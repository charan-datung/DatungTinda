import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import type { User } from "@supabase/supabase-js";
import type { Database } from "./types";

export interface SessionResult {
  /** The Supabase-aware response with refreshed auth cookies attached. */
  response: NextResponse;
  /** The authenticated user, or null if the session is absent / expired. */
  user: User | null;
}

/**
 * Refreshes the Supabase session on every request and returns both the
 * updated response (with Set-Cookie headers) and the current user.
 *
 * IMPORTANT: Always return `result.response` (or copy its cookies onto any
 * redirect response) so that the refreshed auth tokens reach the browser.
 */
export async function updateSession(
  request: NextRequest
): Promise<SessionResult> {
  // Start with a pass-through response that carries the original request
  // headers so that downstream RSC / route handlers see them unchanged.
  let response = NextResponse.next({ request });

  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          // Step 1 — write into the mutated request so the same request
          //           object is consistent for the rest of the proxy run.
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          // Step 2 — rebuild the response so it carries the new cookies in
          //           Set-Cookie response headers back to the browser.
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Calling getUser() is what actually refreshes the JWT when it has expired.
  // Use getUser() rather than getSession() — getUser() re-validates the token
  // with the Supabase auth server, so it is safe to trust the result.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return { response, user };
}
