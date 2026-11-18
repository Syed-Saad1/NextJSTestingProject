import { NextResponse } from "next/server";

export async function GET() {
  const Products = [
    { id: 1, name: "Product 1 Detailed" },
    { id: 2, name: "Product 2 Detailed" },
  ];
  return NextResponse.json(
    {
      success: true,
      message: "Products Detailed fetched successfully",
      data: Products,
    },
    { status: 200 },
  );
}
