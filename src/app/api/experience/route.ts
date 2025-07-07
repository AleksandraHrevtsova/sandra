import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Experience } from "@/models/Experience";

export async function GET() {
  await connectToDatabase();
  const experience = await Experience.find().sort({ from: -1 });
  return NextResponse.json(experience);
}
