import { NextResponse } from "next/server";

import { getAllPostsContent } from "@/lib";

export async function GET() {
  try {
    const data = getAllPostsContent();

    return NextResponse.json(
      {
        data: data,
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    return NextResponse.json(
      {
        error: "Error getting posts",
      },
      {
        status: 500,
      }
    );
  }
}
