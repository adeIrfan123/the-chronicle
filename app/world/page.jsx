import React from "react";
import Header from "../components/Header";
import LatestBar from "../components/LatestBar";
import FooterSection from "../components/FooterSection";
import HeroSection from "../components/HeroSection";
import LatestNews from "../components/LatestNews";
import MoreStories from "../components/MoreStories";
import { getTopStories, organizeNews } from "../lib/news";

async function Page() {
  let news;

  try {
    news = await getTopStories("world");
  } catch (error) {
    console.error(error);

    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f5f1e8] px-5">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold">
            Unable to load the news
          </h1>

          <p className="mt-3 font-serif text-black/60">
            Please try again later.
          </p>
        </div>
      </main>
    );
  }

  const organizedNews = organizeNews(news);

  const { headline, secondary, more } = organizedNews;
  return (
    <div>
      <Header />
      <LatestBar />
      <HeroSection headline={headline} secondary={secondary} />
      <LatestNews news={news} />
      <MoreStories more={more} />
      <FooterSection />
    </div>
  );
}

export default Page;
