const NYT_BASE_URL = "https://api.nytimes.com/svc/topstories/v2";

export async function getTopStories(section = "home") {
  const apiKey = process.env.NYT_API_KEY;

  if (!apiKey) {
    throw new Error("NYT_API_KEY belum tersedia");
  }

  const response = await fetch(
    `${NYT_BASE_URL}/${section}.json?api-key=${apiKey}`,
    {
      next: {
        revalidate: 300,
      },
    },
  );

  if (!response.ok) {
    throw new Error("Gagal mengambil berita dari NYTimes");
  }

  const data = await response.json();
  return Array.isArray(data.results) ? data.results : [];

  // return data.results;
}

export function getCategory(article) {
  return article.section?.toUpperCase() || "NEWS";
}

export function getImage(article) {
  return (
    article.multimedia?.find((media) => media.type === "image")?.url || null
  );
}

export function organizeNews(news) {
  if (!news || news.length === 0) {
    return {
      headline: null,
      secondary: [],
      latest: [],
      more: [],
    };
  }
  return {
    headline: news[0],

    secondary: news.slice(1, 3),

    latest: news.slice(3, 8),

    more: news.slice(8, 14),
  };
}
