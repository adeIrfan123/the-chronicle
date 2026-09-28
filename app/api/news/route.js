import { NextResponse } from "next/server";
import { getTopStories } from "../../lib/news";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const category = searchParams.get("category") || "home";

    const news = await getTopStories(category);

    return NextResponse.json(news);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Gagal mengambil berita",
      },
      {
        status: 500,
      },
    );
  }
}
