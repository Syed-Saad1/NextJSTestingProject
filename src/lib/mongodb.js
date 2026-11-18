import "server-only";
import dns from "node:dns/promises";
import mongoose from "mongoose";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

let connectionPromise = null;

export async function connectDB() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is missing");
  }

  try {
    if (!connectionPromise) {
      connectionPromise = mongoose.connect(process.env.MONGODB_URI, {
        serverSelectionTimeoutMS: 10000,
      });
    }

    await connectionPromise;

    console.log("MongoDB Connected Successfully");
    return mongoose.connection;
  } catch (error) {
    connectionPromise = null;
    console.error("MongoDB Connection Error:", error);
    throw error;
  }
}
