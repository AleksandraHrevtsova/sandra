import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Skill } from "@/models/Skill";

export async function GET() {
  await connectToDatabase();
  const skills = await Skill.find();
  return NextResponse.json(skills);
}
