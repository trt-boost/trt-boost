import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Optional password gate for private preview deployments.
 *
 * When PREVIEW_PASSWORD is set (e.g., on the Vercel preview environment), the
 * whole site requires HTTP Basic Auth — only people with the password can view
 * it. When the var is NOT set (local dev, or public launch), the gate is off.
 *
 * Set PREVIEW_PASSWORD (and optionally PREVIEW_USER, default "partner") in your
 * hosting env to enable it.
 */
export function middleware(req: NextRequest) {
  const password = process.env.PREVIEW_PASSWORD;
  if (!password) return NextResponse.next(); // gate disabled

  const expectedUser = process.env.PREVIEW_USER || "partner";
  const header = req.headers.get("authorization");

  if (header?.startsWith("Basic ")) {
    try {
      const [user, pass] = atob(header.slice(6)).split(":");
      if (user === expectedUser && pass === password) {
        return NextResponse.next();
      }
    } catch {
      // fall through to 401
    }
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="TRT Boost preview", charset="UTF-8"' },
  });
}

export const config = {
  // Gate everything except Next static assets, the favicon, and the Stripe webhook.
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/webhooks).*)"],
};
