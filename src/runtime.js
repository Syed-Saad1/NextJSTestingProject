import { connectDB } from "./lib/mongodb";

export async function register() {
  console.log("Instrumentation is running");

  if (process.env.NEXT_RUNTIME === "nodejs") {
    await connectDB();
  }
}
