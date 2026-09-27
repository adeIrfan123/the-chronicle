import { SectionTitle } from "./SectionTitle";
import { organizeNews, getCategory } from "../lib/news";

function LatestNews({ news }) {
  const organizedNews = organizeNews(news);

  const { secondary, latest } = organizedNews;
  return (
    <div>
      <section className="grid gap-10 py-10 lg:grid-cols-[2fr_1fr]">
        <div>
          <SectionTitle>Latest News</SectionTitle>

          <div>
            {latest.map((article, index) => (
              <article
                key={article.uri}
                className={`grid gap-4 py-5 md:grid-cols-[80px_110px_1fr] ${
                  index !== latest.length - 1 ? "border-b border-black/20" : ""
                }`}
              >
                <span className="font-sans text-xs font-bold text-black/50">
                  {article.published_date
                    ? new Date(article.published_date).toLocaleTimeString(
                        "en-US",
                        {
                          hour: "2-digit",
                          minute: "2-digit",
                        },
                      )
                    : "--:--"}
                </span>

                <span className="font-sans text-[9px] font-bold tracking-[0.15em]">
                  {getCategory(article)}
                </span>

                <h3 className="font-serif text-xl font-bold leading-tight">
                  {article.title}
                </h3>
              </article>
            ))}
          </div>
        </div>

        {/* ================= OPINION ================= */}

        <aside className="border-t-2 border-black pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <SectionTitle>Featured</SectionTitle>

          {secondary.slice(0, 2).map((article) => (
            <article
              key={article.uri}
              className="border-b border-black/20 py-5 last:border-0"
            >
              <span className="font-sans text-[9px] font-bold tracking-[0.15em]">
                {getCategory(article)}
              </span>

              <h3 className="mt-2 font-serif text-xl font-bold leading-tight">
                {article.title}
              </h3>

              {article.abstract && (
                <p className="mt-2 font-serif text-xs italic text-black/60">
                  {article.abstract}
                </p>
              )}
            </article>
          ))}
        </aside>
      </section>
    </div>
  );
}

export default LatestNews;
