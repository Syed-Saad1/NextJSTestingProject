"use server";

import User from "../model/User";

export async function useGetServerAction() {
  try {
    const users = await User.find({})
      .select("name email createdAt")
      .sort({ createdAt: -1 })
      .limit(50)
      .lean();
    return users.map((user) => ({
      id: user._id.toString(),
      name: user.name ?? null,
      email: user.email ?? null,
      createdAt: user.createdAt?.toISOString() ?? null,
    }));
  } catch (error) {
    console.error("GET_USERS_ERROR", error);
    throw new Error("Unable to fetch users");
  }
}
