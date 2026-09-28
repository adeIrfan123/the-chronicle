import { getCategory, getImage } from "../lib/news";

function HeroSection({ headline, secondary, onArticleClick }) {
  return (
    <section className="grid border-b-2 border-black py-8 lg:grid-cols-[1.6fr_1fr]">
      <article className="border-b border-black/30 pb-8 lg:border-b-0 lg:border-r lg:pr-8">
        <div className="mb-4">
          <span className="font-sans text-[10px] font-bold tracking-[0.2em]">
            {getCategory(headline)}
          </span>
        </div>

        <h2
          onClick={() => onArticleClick(headline)}
          className="cursor-pointer max-w-4xl font-serif text-4xl font-black leading-[0.95] tracking-[-0.035em] sm:text-5xl md:text-6xl"
        >
          {headline.title}
        </h2>

        {headline.abstract && (
          <p className="mt-5 max-w-2xl font-serif text-lg leading-relaxed text-black/70">
            {headline.abstract}
          </p>
        )}

        <div className="mt-5 flex items-center gap-3 font-sans text-[10px] uppercase tracking-wider text-black/60">
          <span>{headline.byline || "NYTimes"}</span>

          <span>•</span>

          <span>
            {headline.published_date
              ? new Date(headline.published_date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })
              : ""}
          </span>
        </div>

        {getImage(headline) && (
          <img
            src={getImage(headline)}
            alt={headline.title}
            className="mt-7 aspect-[16/9] w-full object-cover grayscale"
          />
        )}
      </article>

      <div className="grid gap-8 pt-8 lg:pt-0 lg:pl-8">
        {secondary.map((article) => (
          <article
            key={article.uri}
            className="border-b border-black/30 pb-8 last:border-b-0"
          >
            {getImage(article) && (
              <img
                src={getImage(article)}
                alt={article.title}
                className="mb-5 aspect-[16/9] w-full object-cover grayscale"
              />
            )}

            <span className="font-sans text-[9px] font-bold tracking-[0.2em]">
              {getCategory(article)}
            </span>

            <h3
              onClick={() => onArticleClick(headline)}
              className="cursor-pointer mt-2 font-serif text-2xl font-bold leading-tight"
            >
              {article.title}
            </h3>

            {article.abstract && (
              <p className="mt-3 font-serif text-sm leading-relaxed text-black/65">
                {article.abstract}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
