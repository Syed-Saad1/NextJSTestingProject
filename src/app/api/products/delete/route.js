import { NextResponse } from "next/server";

export async function DELETE(request) {
  const body = await request.json();

  if (!body.name) {
    return NextResponse.json(
      {
        success: false,
        message: "Name is required",
      },
      { status: 400 },
    );
  }

  return NextResponse.json(
    {
      success: true,
      message: "User deleted successfully",
      data: {
        name: body.name,
      },
    },
    { status: 200 },
  );
}
