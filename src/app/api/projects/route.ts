import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Project } from "@/models/Project";

export async function GET() {
  await connectToDatabase();
  const projects = await Project.find();
  return NextResponse.json(projects);
}
