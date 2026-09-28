export default function NewsDetail({ article, onBack }) {
  const mainImage = article.multimedia?.find(
    (item) => item.format === "Super Jumbo",
  );

  return (
    <main className="bg-[#f5f1e8] px-5 py-10">
      <article className="mx-auto max-w-5xl">
        <button
          onClick={onBack}
          className="mb-8 font-serif text-sm font-bold underline"
        >
          ← Back to News
        </button>

        <div className="mb-5 font-serif text-sm font-bold uppercase tracking-widest">
          {article.section}
          {article.subsection && ` · ${article.subsection}`}
        </div>

        <h1 className="max-w-4xl font-serif text-5xl font-bold leading-tight md:text-7xl">
          {article.title}
        </h1>

        <p className="mt-6 max-w-3xl font-serif text-xl leading-relaxed text-black/70">
          {article.abstract}
        </p>

        <div className="mt-6 flex flex-wrap gap-3 font-serif text-sm uppercase tracking-wide">
          <span>{article.byline}</span>

          <span>•</span>

          <span>
            {new Date(article.published_date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>

        {mainImage && (
          <figure className="mt-10">
            <img
              src={mainImage.url}
              alt={article.title}
              className="h-auto w-full"
            />

            {mainImage.copyright && (
              <figcaption className="mt-2 font-serif text-xs text-black/50">
                {mainImage.copyright}
              </figcaption>
            )}
          </figure>
        )}

        <div className="mx-auto mt-10 max-w-3xl border-t border-black/30 pt-8">
          <p className="font-serif text-lg leading-relaxed">
            {article.abstract}
          </p>

          <div className="mt-8 border-t border-black/20 pt-6">
            <p className="font-serif text-sm text-black/60">
              Read the complete article on The New York Times.
            </p>

            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-black px-5 py-3 font-serif text-sm font-bold text-white"
            >
              Read Full Article ↗
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
