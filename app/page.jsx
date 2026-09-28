"use client";

import { useEffect, useState } from "react";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import NewsContent from "./components/NewsContet";
import NewsDetail from "./components/NewsDetail";
import FooterSection from "./components/FooterSection";

export default function Page() {
  const [currentCategory, setCurrentCategory] = useState("home");
  const [news, setNews] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  console.log("selectedArticle:", selectedArticle);

  useEffect(() => {
    async function loadNews() {
      try {
        setLoading(true);
        setError(false);

        const response = await fetch(`/api/news?category=${currentCategory}`);

        if (!response.ok) {
          throw new Error("Gagal mengambil berita");
        }

        const data = await response.json();

        setNews(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error(error);
        setError(true);
        setNews([]);
      } finally {
        setLoading(false);
      }
    }

    loadNews();
  }, [currentCategory]);

  function handleCategoryChange(category) {
    setSelectedArticle(null);
    setCurrentCategory(category);
  }

  function handleArticleClick(article) {
    setSelectedArticle(article);
  }

  return (
    <div>
      <Header />

      <Navigation
        currentCategory={currentCategory}
        onCategoryChange={handleCategoryChange}
      />

      <main>
        {selectedArticle ? (
          <NewsDetail
            article={selectedArticle}
            onBack={() => setSelectedArticle(null)}
          />
        ) : (
          <NewsContent
            category={currentCategory}
            news={news}
            loading={loading}
            error={error}
            onArticleClick={handleArticleClick}
          />
        )}
      </main>

      <FooterSection />
    </div>
  );
}
