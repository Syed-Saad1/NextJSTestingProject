import { NextResponse } from "next/server";

export async function GET() {
  const Products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
  ];
  return NextResponse.json(
    {
      success: true,
      message: "Products fetched successfully",
      data: Products,
    },
    { status: 200 },
  );
}
