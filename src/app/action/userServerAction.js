"use server";
import { revalidatePath } from "next/cache";
import { connectDB } from "@/lib/mongodb";
import User from "@/app/model/User";
export async function createUserAction(data) {
  const { name, email } = data ?? {};
  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  ) {
    return {
      success: false,
      message: "Valid name and email are required",
    };
  }
  try {
    await connectDB();
    await User.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
    });
    revalidatePath("/users");
    return {
      success: true,
      message: "User created successfully",
    };
  } catch (error) {
    if (error.code === 11000) {
      return {
        success: false,
        message: "Email already exists",
      };
    }
    if (error.name === "ValidationError") {
      return {
        success: false,
        message: "Invalid user data",
      };
    }
    console.error("Create User Error:", error);
    return {
      success: false,
      message: "Unable to create user",
    };
  }
}
