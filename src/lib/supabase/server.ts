import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "./types";

/**
 * Creates a server-side Supabase client that reads/writes cookies via
 * next/headers. Must be called inside a Server Component, Server Action,
 * or Route Handler — not in Client Components.
 *
 * Cookie writes are wrapped in try/catch because Server Components cannot
 * set cookies; only Server Actions and Route Handlers can.
 */
export async function createClient(): Promise<SupabaseClient<Database>> {
  const cookieStore = await cookies();

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Swallowed in Server Components — the proxy refreshes
            // the session so the browser always has an up-to-date token.
          }
        },
      },
    }
  );
}
