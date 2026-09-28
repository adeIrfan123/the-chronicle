"use client";

const categories = [
  { label: "HOME", value: "home" },
  { label: "WORLD", value: "world" },
  { label: "U.S", value: "us" },
  { label: "POLITICS", value: "politics" },
  { label: "BUSINESS", value: "business" },
  { label: "TECHNOLOGY", value: "technology" },
  { label: "SCIENCE", value: "science" },
  { label: "SPORTS", value: "sports" },
  { label: "ARTS", value: "arts" },
];

export default function Navigation({ currentCategory, onCategoryChange }) {
  return (
    <nav className="border-y-2 border-black">
      <div className="flex flex-wrap justify-center gap-8 py-3">
        {categories.map((category) => {
          const isActive = currentCategory === category.value;

          return (
            <button
              key={category.value}
              onClick={() => onCategoryChange(category.value)}
              className={`px-2 py-1 font-serif text-sm font-bold transition ${
                isActive
                  ? "bg-black text-white"
                  : "text-black hover:bg-black hover:text-white"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
