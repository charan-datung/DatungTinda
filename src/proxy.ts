import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

// Routes that require an authenticated session
const PROTECTED_PREFIXES = ["/dashboard"] as const;

// Auth routes that should redirect to /dashboard when already signed in
const AUTH_ROUTES = ["/login", "/register"] as const;

export async function proxy(request: NextRequest): Promise<NextResponse> {
  const { pathname } = request.nextUrl;

  // Refresh the Supabase session and get the current user.
  const { response, user } = await updateSession(request);

  const isProtected = PROTECTED_PREFIXES.some((prefix) =>
    pathname.startsWith(prefix)
  );
  const isAuthRoute = (AUTH_ROUTES as readonly string[]).includes(pathname);

  // Redirect unauthenticated users away from protected routes.
  if (isProtected && !user) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("next", pathname);
    const redirect = NextResponse.redirect(loginUrl);
    // Forward the refreshed session cookies so the browser stays in sync.
    response.cookies.getAll().forEach((cookie) => {
      redirect.cookies.set(cookie);
    });
    return redirect;
  }

  // Redirect authenticated users away from auth routes.
  if (isAuthRoute && user) {
    const next = request.nextUrl.searchParams.get("next") ?? "/dashboard";
    // Validate the `next` param to prevent open-redirect attacks.
    const destination = next.startsWith("/") ? next : "/dashboard";
    const redirect = NextResponse.redirect(new URL(destination, request.url));
    response.cookies.getAll().forEach((cookie) => {
      redirect.cookies.set(cookie);
    });
    return redirect;
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Run on all paths except:
     * - _next/static  (bundled assets)
     * - _next/image   (image optimisation)
     * - favicon.ico, sitemap.xml, robots.txt
     * - common static extensions
     *
     * /store/* routes, /api/webhooks/*, and the landing page /
     * are intentionally included so the session is always refreshed,
     * but they contain no redirect logic above, so they pass through.
     */
    "/((?!_next/static|_next/image|favicon\\.ico|sitemap\\.xml|robots\\.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
