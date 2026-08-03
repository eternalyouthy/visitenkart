/**
 * Cloudflare Worker — serves the static site + the email endpoint.
 *
 *   GET  /            → public/index.html (served automatically as a static asset)
 *   POST /api/email   → validates the Turnstile token, then returns the email
 *
 * The email address and secret key live ONLY in environment variables, never
 * in the client bundle. Set them in the dashboard (Settings → Variables and
 * secrets) or via `npx wrangler secret put TURNSTILE_SECRET`:
 *   TURNSTILE_SECRET  = your Turnstile secret key
 *   CONTACT_EMAIL     = your Email
 */

const SITEVERIFY = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/email") {
      if (request.method !== "POST") {
        return json({ error: "method_not_allowed" }, 405, { Allow: "POST" });
      }
      return handleEmail(request, env);
    }

    // Everything else → static assets (index.html, etc.)
    return env.ASSETS.fetch(request);
  },
};

async function handleEmail(request, env) {
  const secret = env.TURNSTILE_SECRET;
  const email = env.CONTACT_EMAIL;

  if (!secret || !email) {
    return json({ error: "server_misconfigured" }, 500);
  }

  let token;
  try {
    const body = await request.json();
    token = body && typeof body.token === "string" ? body.token : null;
  } catch {
    return json({ error: "bad_request" }, 400);
  }
  if (!token) return json({ error: "missing_token" }, 400);

  const form = new FormData();
  form.append("secret", secret);
  form.append("response", token);
  const ip = request.headers.get("CF-Connecting-IP");
  if (ip) form.append("remoteip", ip);

  let outcome;
  try {
    const verify = await fetch(SITEVERIFY, { method: "POST", body: form });
    outcome = await verify.json();
  } catch {
    return json({ error: "verify_unreachable" }, 502);
  }

  if (!outcome.success) {
    return json({ error: "verification_failed", codes: outcome["error-codes"] || [] }, 403);
  }

  return json({ email });
}

function json(obj, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      ...extraHeaders,
    },
  });
}
