/* RECGZ progress key codec. No storage, content catalogue or clock access here.
 * Wire versions are permanent: keep past decoders when adding future versions.
 * V1 envelope: version u8, language (2 ASCII bytes), raw DEFLATE, CRC32 LE u32.
 * V2 envelope: version u8=2, scope u8=0 (all languages), reserved u8=0,
 * raw DEFLATE, CRC32 LE u32. Text prefix: RECGZ2-all-.
 * V2 payload: language count (varuint), then sorted entries of language (2 ASCII
 * bytes), payload byte length (varuint), and the uncompressed V1 payload below.
 * One DEFLATE stream compresses the whole bundle; no nested compressed strings.
 * V1 payload: base epoch minute (varuint), progress record, cards, later, deleted,
 * log. Records have a presence bitmask, typed fields, then a UTF-8 JSON extra
 * block (length 0 = none). Maps use sorted, prefix-compressed UTF-8 string ids.
 * Time = signed minute delta (zigzag varuint) + millisecond remainder (varuint).
 * Stability uses IEEE binary16; difficulty uses a byte in steps of 1/25.
 * Both have float64 escapes when rounding would lose precision. This keeps
 * exact round-trips and avoids changing an FSRS schedule or a merge winner.
 * Integers/lengths are unsigned LEB128; fixed-width numbers are little-endian.
 */
(function () {
  'use strict';
  var LIMIT = 20000000;
  var DAMAGED = 'Key is damaged or incomplete — copy it again';
  var OLD_BROWSER = 'Your browser is too old for progress keys. Update it or use file export/import.';
  var STATES = ['new', 'learning', 'review', 'relearning', 'known'];
  var HEADER = [['version', 'uint'], ['created', 'time'], ['resetAt', 'time'], ['lastPractice', 'time'], ['lastExport', 'time']];
  var CARD = [['state', 'state'], ['s', 'stability'], ['d', 'difficulty'], ['due', 'time'], ['last', 'time'],
    ['added', 'time'], ['known', 'time'], ['reps', 'uint'], ['lapses', 'uint']];
  var LOG = [['reviews', 'uint'], ['learned', 'uint']];
  function damaged() { return new Error(DAMAGED); }
  function own(o, k) { return Object.prototype.hasOwnProperty.call(o, k); }
  function put(o, k, v) { Object.defineProperty(o, k, { value: v, enumerable: true, writable: true, configurable: true }); }
  function object(v) { return v && typeof v === 'object' && !Array.isArray(v); }
  function uint(v) { return Number.isSafeInteger(v) && v >= 0; }
  function canonical(v) {
    if (v === null || typeof v !== 'object') return JSON.stringify(v);
    if (Array.isArray(v)) return '[' + v.map(canonical).join(',') + ']';
    return '{' + Object.keys(v).sort().map(function (k) { return JSON.stringify(k) + ':' + canonical(v[k]); }).join(',') + '}';
  }
  function support() {
    try {
      // Existence alone is insufficient: older implementations lack deflate-raw.
      new CompressionStream('deflate-raw');
      new DecompressionStream('deflate-raw');
      new TextEncoder(); new TextDecoder('utf-8', { fatal: true });
    } catch (e) { throw new Error(OLD_BROWSER); }
  }
  function Writer() { this.bytes = []; }
  Writer.prototype.byte = function (v) {
    if (this.bytes.length >= LIMIT) throw new Error('Progress is too large for a key. Use file export/import.');
    this.bytes.push(v);
  };
  Writer.prototype.raw = function (a) { for (var i = 0; i < a.length; i++) this.byte(a[i]); };
  Writer.prototype.uint = function (n) {
    if (!uint(n)) throw damaged();
    do { var b = n % 128; n = Math.floor(n / 128); this.byte(b + (n ? 128 : 0)); } while (n);
  };
  Writer.prototype.signed = function (n) { this.uint(n < 0 ? -n * 2 - 1 : n * 2); };
  Writer.prototype.float = function (n) {
    var a = new Uint8Array(8); new DataView(a.buffer).setFloat64(0, n, true); this.raw(a);
  };
  Writer.prototype.json = function (v) {
    var a = new TextEncoder().encode(canonical(v)); this.uint(a.length); this.raw(a);
  };
  function Reader(a) { this.bytes = a; this.pos = 0; }
  Reader.prototype.byte = function () { if (this.pos >= this.bytes.length) throw damaged(); return this.bytes[this.pos++]; };
  Reader.prototype.raw = function (n) {
    if (!uint(n) || n > this.bytes.length - this.pos) throw damaged();
    var a = this.bytes.subarray(this.pos, this.pos + n); this.pos += n; return a;
  };
  Reader.prototype.uint = function () {
    var n = 0, factor = 1;
    for (var i = 0; i < 8; i++) {
      var b = this.byte(); n += (b & 127) * factor;
      if (!uint(n)) throw damaged();
      if (b < 128) { if (i && b === 0) throw damaged(); return n; }
      factor *= 128;
    }
    throw damaged();
  };
  Reader.prototype.signed = function () { var n = this.uint(); return n % 2 ? -(n + 1) / 2 : n / 2; };
  Reader.prototype.float = function () {
    var a = this.raw(8), n = new DataView(a.buffer, a.byteOffset, 8).getFloat64(0, true);
    if (!Number.isFinite(n)) throw damaged(); return n;
  };
  Reader.prototype.json = function (n) { return JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(this.raw(n))); };
  function halfValue(h) {
    var exp = (h >> 10) & 31, frac = h & 1023;
    return (h & 32768 ? -1 : 1) * (exp ? Math.pow(2, exp - 15) * (1 + frac / 1024) : frac * Math.pow(2, -24));
  }
  function half(n) {
    if (n < 0 || n > 65504) return 65535;
    if (!n) return 0;
    var exp = Math.floor(Math.log2(n));
    var h = exp < -14 ? Math.round(n * Math.pow(2, 24)) :
      (exp + 15) * 1024 + Math.round((n / Math.pow(2, exp) - 1) * 1024);
    return h < 31744 && halfValue(h) === n ? h : 65535;
  }
  function fits(type, v) {
    if (type === 'state') return STATES.indexOf(v) >= 0;
    if (type === 'uint' || type === 'time') return uint(v);
    return typeof v === 'number' && Number.isFinite(v);
  }
  function writeValue(w, type, v, base) {
    if (type === 'uint') w.uint(v);
    else if (type === 'state') w.byte(STATES.indexOf(v));
    else if (type === 'time') { var min = Math.floor(v / 60000); w.signed(min - base); w.uint(v - min * 60000); }
    else if (type === 'stability') { var h = half(v); w.byte(h & 255); w.byte(h >> 8); if (h === 65535) w.float(v); }
    else if (type === 'difficulty') {
      var d = Math.round(v * 25), compact = d >= 0 && d <= 250 && d / 25 === v;
      w.byte(compact ? d : 255); if (!compact) w.float(v);
    }
  }
  function readValue(r, type, base) {
    if (type === 'uint') return r.uint();
    if (type === 'state') { var s = r.byte(); if (s >= STATES.length) throw damaged(); return STATES[s]; }
    if (type === 'time') {
      var min = base + r.signed(), rem = r.uint(), t = min * 60000 + rem;
      if (rem >= 60000 || !uint(t)) throw damaged(); return t;
    }
    if (type === 'stability') {
      var h = r.byte() + r.byte() * 256;
      if (h === 65535) return r.float();
      if (((h >> 10) & 31) === 31) throw damaged(); return halfValue(h);
    }
    var d = r.byte(); if (d === 255) return r.float(); if (d > 250) throw damaged(); return d / 25;
  }
  function writeRecord(w, value, fields, base, excluded) {
    if (!object(value)) throw new Error('Invalid progress record. Use file export/import.');
    var mask = 0, extra = {};
    fields.forEach(function (f, i) { if (own(value, f[0]) && fits(f[1], value[f[0]])) mask |= 1 << i; });
    w.uint(mask);
    fields.forEach(function (f, i) { if (mask & (1 << i)) writeValue(w, f[1], value[f[0]], base); });
    Object.keys(value).forEach(function (k) {
      if (excluded && excluded.indexOf(k) >= 0) return;
      var i = fields.findIndex(function (f) { return f[0] === k; });
      if (i < 0 || !(mask & (1 << i))) put(extra, k, value[k]);
    });
    if (Object.keys(extra).length) w.json(extra); else w.uint(0);
  }
  function readRecord(r, fields, base, excluded) {
    var out = {}, mask = r.uint(); if (mask >= Math.pow(2, fields.length)) throw damaged();
    fields.forEach(function (f, i) { if (mask & (1 << i)) put(out, f[0], readValue(r, f[1], base)); });
    var n = r.uint();
    if (n) {
      var extra = r.json(n); if (!object(extra)) throw damaged();
      Object.keys(extra).forEach(function (k) {
        if (own(out, k) || (excluded && excluded.indexOf(k) >= 0)) throw damaged();
        put(out, k, extra[k]);
      });
    }
    return out;
  }
  function writeMap(w, map, fields, base) {
    if (!object(map)) throw new Error('Invalid progress map. Use file export/import.');
    var ids = Object.keys(map).sort(), prev = new Uint8Array(0);
    w.uint(ids.length);
    ids.forEach(function (id) {
      var bytes = new TextEncoder().encode(id), shared = 0;
      while (shared < prev.length && shared < bytes.length && prev[shared] === bytes[shared]) shared++;
      w.uint(shared); w.uint(bytes.length - shared); w.raw(bytes.subarray(shared)); prev = bytes;
      if (fields) writeRecord(w, map[id], fields, base);
      else if (fits('time', map[id])) { w.byte(0); writeValue(w, 'time', map[id], base); }
      else { w.byte(1); w.json(map[id]); }
    });
  }
  function readMap(r, fields, base) {
    var out = {}, prev = new Uint8Array(0), previousId = null, count = r.uint();
    if (count > r.bytes.length - r.pos) throw damaged();
    for (var i = 0; i < count; i++) {
      var shared = r.uint(), length = r.uint();
      if (shared > prev.length || shared + length > LIMIT) throw damaged();
      var suffix = r.raw(length), bytes = new Uint8Array(shared + length);
      bytes.set(prev.subarray(0, shared)); bytes.set(suffix, shared); prev = bytes;
      var id = new TextDecoder('utf-8', { fatal: true }).decode(bytes);
      if (!id || id === '__proto__' || id === 'constructor' || id === 'prototype' || (previousId !== null && id <= previousId)) throw damaged();
      previousId = id;
      if (fields) put(out, id, readRecord(r, fields, base));
      else { var tag = r.byte(); if (tag > 1) throw damaged(); put(out, id, tag ? r.json(r.uint()) : readValue(r, 'time', base)); }
    }
    return out;
  }
  var MAPS = ['language', 'cards', 'later', 'deleted', 'log'];
  function encodeV1(data) {
    var w = new Writer(), base = uint(data.created) ? Math.floor(data.created / 60000) : 0;
    w.uint(base); writeRecord(w, data, HEADER, base, MAPS);
    writeMap(w, data.cards, CARD, base); writeMap(w, data.later, null, base);
    writeMap(w, data.deleted, null, base); writeMap(w, data.log, LOG, base);
    return new Uint8Array(w.bytes);
  }
  function decodeV1(bytes, lang) {
    var r = new Reader(bytes), base = r.uint(), data = readRecord(r, HEADER, base, MAPS);
    data.language = lang; data.cards = readMap(r, CARD, base); data.later = readMap(r, null, base);
    data.deleted = readMap(r, null, base); data.log = readMap(r, LOG, base);
    if (r.pos !== bytes.length || !uint(data.version) || !uint(data.created)) throw damaged();
    return data;
  }
  function encodeV2(progress) {
    if (!object(progress)) throw new Error('Invalid progress. Use file export/import.');
    var langs = Object.keys(progress).sort(), w = new Writer();
    w.uint(langs.length);
    langs.forEach(function (lang) {
      if (!/^[a-z]{2}$/.test(lang) || !object(progress[lang]) || progress[lang].language !== lang) throw new Error('Unknown progress language.');
      var bytes = encodeV1(progress[lang]);
      w.byte(lang.charCodeAt(0)); w.byte(lang.charCodeAt(1)); w.uint(bytes.length); w.raw(bytes);
    });
    return new Uint8Array(w.bytes);
  }
  function decodeV2(bytes) {
    var r = new Reader(bytes), count = r.uint(), progress = {}, previous = '';
    if (count > 676 || count > (bytes.length - r.pos) / 3) throw damaged();
    for (var i = 0; i < count; i++) {
      var lang = String.fromCharCode(r.byte(), r.byte());
      if (!/^[a-z]{2}$/.test(lang) || lang <= previous) throw damaged();
      previous = lang;
      put(progress, lang, decodeV1(r.raw(r.uint()), lang));
    }
    if (r.pos !== bytes.length) throw damaged();
    return { progress: progress };
  }
  function crc32(bytes) {
    var crc = 0xffffffff;
    for (var i = 0; i < bytes.length; i++) {
      crc ^= bytes[i];
      for (var j = 0; j < 8; j++) crc = (crc >>> 1) ^ ((crc & 1) ? 0xedb88320 : 0);
    }
    return (crc ^ 0xffffffff) >>> 0;
  }
  function base64(bytes) {
    var parts = [];
    for (var i = 0; i < bytes.length; i += 8192) parts.push(String.fromCharCode.apply(null, bytes.subarray(i, i + 8192)));
    return btoa(parts.join('')).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }
  async function transform(bytes, decompress) {
    var stream = new Blob([bytes]).stream().pipeThrough(decompress ? new DecompressionStream('deflate-raw') : new CompressionStream('deflate-raw'));
    var reader = stream.getReader(), chunks = [], size = 0;
    try {
      while (true) {
        var step = await reader.read(); if (step.done) break;
        size += step.value.length;
        if (size > LIMIT) { await reader.cancel(); throw damaged(); }
        chunks.push(step.value);
      }
    } finally { reader.releaseLock(); }
    var out = new Uint8Array(size), pos = 0;
    chunks.forEach(function (chunk) { out.set(chunk, pos); pos += chunk.length; });
    return out;
  }
  async function envelope(packed, version, scope) {
    var compressed = await transform(packed, false), bytes = new Uint8Array(compressed.length + 7);
    bytes[0] = version;
    if (scope !== 'all') { bytes[1] = scope.charCodeAt(0); bytes[2] = scope.charCodeAt(1); }
    bytes.set(compressed, 3);
    new DataView(bytes.buffer).setUint32(bytes.length - 4, crc32(bytes.subarray(0, bytes.length - 4)), true);
    var key = 'RECGZ' + version + '-' + scope + '-' + base64(bytes);
    if (key.length > LIMIT) throw new Error('Progress is too large for a key. Use file export/import.');
    return key;
  }
  async function encode(data, lang) {
    support();
    if (!/^[a-z]{2}$/.test(lang) || data.language !== lang) throw new Error('Unknown progress language.');
    // Snapshot before the first await: reviews made while compressing belong to the next key.
    return envelope(encodeV1(JSON.parse(JSON.stringify(data))), 1, lang);
  }
  async function encodeAll(progress) {
    support();
    return envelope(encodeV2(JSON.parse(JSON.stringify(progress))), 2, 'all');
  }
  async function decode(text) {
    support();
    if (typeof text !== 'string' || text.length > LIMIT) throw damaged();
    var clean = text.replace(/\s/g, ''), match = /^RECGZ(\d+)-([a-z]{2}|all)-([A-Za-z0-9_-]+)$/.exec(clean);
    if (!match) throw damaged();
    var bytes;
    try {
      var raw = atob(match[3].replace(/-/g, '+').replace(/_/g, '/'));
      bytes = Uint8Array.from(raw, function (c) { return c.charCodeAt(0); });
      // Reject noncanonical trailing bits as well as altered/truncated bytes.
      if (bytes.length < 9 || base64(bytes) !== match[3]) throw damaged();
      var end = bytes.length - 4, crc = new DataView(bytes.buffer).getUint32(end, true);
      if (crc !== crc32(bytes.subarray(0, end))) throw damaged();
      if (String(bytes[0]) !== match[1]) throw damaged();
    } catch (e) { throw damaged(); }
    // Never repurpose a version. Old decoders remain here forever.
    var decoder;
    switch (bytes[0]) {
      case 1:
        if (String.fromCharCode(bytes[1], bytes[2]) !== match[2]) throw damaged();
        decoder = decodeV1; break;
      case 2:
        if (match[2] !== 'all' || bytes[1] !== 0 || bytes[2] !== 0) throw damaged();
        decoder = decodeV2; break;
      default: throw new Error('This key needs a newer version of RECGZ. Update the site and try again.');
    }
    try { return decoder(await transform(bytes.subarray(3, bytes.length - 4), true), match[2]); }
    catch (e) { throw damaged(); }
  }
  GT.progressKey = { encode: encode, encodeAll: encodeAll, decode: decode };
})();
