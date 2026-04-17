// TODO: Orders CRUD — GET seller's orders, POST create order from storefront checkout

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ orders: [] });
}

export async function POST() {
  return NextResponse.json({ message: "Create order — coming soon" });
}
