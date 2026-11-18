import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/app/model/User";

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    const user = await User.create({
      name: body.name,
      email: body.email,
    });

    return NextResponse.json(
      {
        success: true,
        message: "User created successfully",
        data: user,
      },
      { status: 201 },
    );
  } catch (error) {
    if (error.code === 11000) {
      return NextResponse.json(
        { success: false, message: "Email already exists" },
        { status: 409 },
      );
    }

    if (error.name === "ValidationError") {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400 },
      );
    }

    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { success: false, message: "Invalid JSON body" },
        { status: 400 },
      );
    }

    console.error(error);

    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    console.log("Database:", User.db.name);
    console.log("Collection:", User.collection.name);
    console.log("Schema Unique:", User.schema.path("email").options.unique);

    const indexes = await User.collection.indexes();

    console.log("MongoDB Indexes:", indexes);

    const users = await User.find().lean();

    return NextResponse.json({
      success: true,
      data: users,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 },
    );
  }
}
