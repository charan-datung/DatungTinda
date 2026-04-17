// TODO: Storefront settings API — GET/PUT seller storefront config (slug, theme, social links)

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ storefront: null });
}

export async function PUT() {
  return NextResponse.json({ message: "Update storefront — coming soon" });
}
