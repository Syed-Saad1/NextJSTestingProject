import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    const { name, email, age } = body;

    if (
      typeof name !== "string" ||
      !name.trim() ||
      typeof email !== "string" ||
      !email.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Valid name and email are required",
        },
        { status: 400 },
      );
    }

    const user = await prisma.user.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        age: age,
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: user,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Create user error:", error);

    if (error.code === "P2002") {
      return NextResponse.json(
        {
          success: false,
          message: "Email already exists",
        },
        { status: 409 },
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 },
    );
  }
}
