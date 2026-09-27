import React from "react";
import { SectionTitle } from "./SectionTitle";
import { getCategory } from "../lib/news";

function MoreStories({ more }) {
  return (
    <div>
      <section className="border-t-2 border-black py-8">
        <SectionTitle>More Stories</SectionTitle>

        <div className="grid gap-8 md:grid-cols-3">
          {more.slice(0, 3).map((article) => (
            <article
              key={article.uri}
              className="border-b border-black/20 pb-5 md:border-b-0"
            >
              <span className="font-sans text-[9px] font-bold tracking-[0.2em]">
                {getCategory(article)}
              </span>

              <h3 className="mt-2 font-serif text-2xl font-bold leading-tight">
                {article.title}
              </h3>

              {article.abstract && (
                <p className="mt-3 font-serif text-sm leading-relaxed text-black/60">
                  {article.abstract}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default MoreStories;
