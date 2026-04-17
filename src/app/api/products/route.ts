// TODO: Products CRUD — GET list with pagination/filters, POST create new product with Supabase

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ products: [] });
}

export async function POST() {
  return NextResponse.json({ message: "Create product — coming soon" });
}
