import { NextResponse } from "next/server";
import { featuredProjects } from "@/data/featured-projects";

export async function GET() {
  return NextResponse.json({ projects: featuredProjects });
}


