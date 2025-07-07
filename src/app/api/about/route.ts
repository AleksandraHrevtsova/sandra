import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { About } from "@/models/About";

export async function GET() {
  await connectToDatabase();
  const about = await About.findOne();
  return NextResponse.json(about);
}

export async function PUT(req: NextRequest) {
  await connectToDatabase();
  const data = await req.json();
  const updated = await About.findOneAndUpdate({}, data, { new: true, upsert: true });
  return NextResponse.json(updated);
}
