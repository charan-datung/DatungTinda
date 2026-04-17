// TODO: GCash webhook — verify HMAC signature, update order payment status in Supabase

import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ received: true });
}
