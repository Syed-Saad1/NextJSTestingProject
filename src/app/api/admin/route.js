import { NextResponse } from "next/server";

export async function GET() {
  const Admins = [
    {
      id: 1,
      name: "Admin 1",
      description: "Admin 1 description",
      role: "Super Admin",
    },
    {
      id: 2,
      name: "Admin 2",
      description: "Admin 2 description",
      role: "Regular Admin",
    },
    {
      id: 3,
      name: "Admin 3",
      description: "Admin 3 description",
      role: "Regular Admin",
    },
    {
      id: 4,
      name: "Admin 4",
      description: "Admin 4 description",
      role: "Regular Admin",
    },
    {
      id: 5,
      name: "Admin 5",
      description: "Admin 5 description",
      role: "Regular Admin",
    },
    {
      id: 6,
      name: "Admin 6",
      description: "Admin 6 description",
      role: "Regular Admin",
    },
  ];
  return NextResponse.json(
    {
      success: true,
      message: "Admins fetched successfully",
      data: Admins,
    },
    { status: 200 },
  );
}
