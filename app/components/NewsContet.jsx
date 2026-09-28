"use client";

import HeroSection from "./HeroSection";
import LatestNews from "./LatestNews";
import MoreStories from "./MoreStories";
import { organizeNews } from "../lib/news";

export default function NewsContent({
  category,
  news,
  loading,
  error,
  onArticleClick,
}) {
  if (loading) {
    return (
      <main className="mx-auto max-w-7xl px-6">
        <div className="py-20 text-center">
          <p className="font-serif text-xl">Loading news...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="mx-auto max-w-7xl px-6">
        <div className="py-20 text-center">
          <p className="font-serif text-xl">Failed to load news.</p>
        </div>
      </main>
    );
  }

  if (!news || news.length === 0) {
    return (
      <main className="mx-auto max-w-7xl px-6">
        <div className="py-20 text-center">
          <p className="font-serif text-xl">No news available.</p>
        </div>
      </main>
    );
  }

  const { headline, secondary, latest, more } = organizeNews(news);

  return (
    <main className="mx-auto max-w-7xl px-6">
      <div className="">
        <div className="py-2">
          <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em]">
            {category}
          </span>
        </div>

        <HeroSection
          headline={headline}
          secondary={secondary}
          onArticleClick={onArticleClick}
        />

        <LatestNews
          latest={latest}
          secondary={secondary}
          onArticleClick={onArticleClick}
        />

        <MoreStories more={more} onArticleClick={onArticleClick} />
      </div>
    </main>
  );
}
