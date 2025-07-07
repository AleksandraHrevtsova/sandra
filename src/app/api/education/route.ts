import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Education } from "@/models/Education";

export async function GET() {
  await connectToDatabase();
  const education = await Education.find().sort({ from: -1 });
  return NextResponse.json(education);
}
