import { NextRequest, NextResponse } from "next/server";
import { getPostContent } from "@/lib";

export function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json({ error: "No slug provided" }, { status: 400 });
  }

  const data = getPostContent(slug);

  return NextResponse.json(data, { status: 200 });
}
