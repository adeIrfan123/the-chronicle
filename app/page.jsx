import React from "react";
import Header from "./components/Header";
import LatestBar from "./components/LatestBar";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import LatestNews from "./components/LatestNews";
import MoreStories from "./components/MoreStories";
import ErrorLoad from "./components/ErrorLoad";
import { getTopStories, organizeNews } from "./lib/news";

async function Home() {
  let news;

  try {
    news = await getTopStories("home");
  } catch {
    return <ErrorLoad />;
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

export default Home;
