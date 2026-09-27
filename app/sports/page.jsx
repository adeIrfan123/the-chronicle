import React from "react";
import Header from "../components/Header";
import LatestBar from "../components/LatestBar";
import FooterSection from "../components/FooterSection";
import HeroSection from "../components/HeroSection";
import LatestNews from "../components/LatestNews";
import MoreStories from "../components/MoreStories";
import ErrorLoad from "../components/ErrorLoad";
import { getTopStories, organizeNews } from "../lib/news";

async function page() {
  let news;
  try {
    news = await getTopStories("sports");
  } catch {
    return <ErrorLoad />;
  }

  if (news.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f5f1e8]">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold">
            No stories available
          </h1>

          <p className="mt-3 font-serif text-black/60">
            There are currently no stories in this category.
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
      <MoreStories more={more} news={news} />
      <FooterSection />
    </div>
  );
}

export default page;
