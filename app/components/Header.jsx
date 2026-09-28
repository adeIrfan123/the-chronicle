"use client";

function Header() {
  const today = new Date();

  const formattedDate = today.toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex justify-between items-center border-b border-black/30 pb-3 font-semibold uppercase tracking-[0.15em] text-[10px]">
        <span>{formattedDate}</span>
        <span className="hidden md:block">Daily Chronicle</span>
        <span>DIGITAL EDITION</span>
      </div>

      <div className="border-b-4 border-double border-black py-7 text-center">
        <h1 className="font-serif text-5xl font-bold tracking-[0.04em] sm:text-6xl md:text-8xl">
          THE CHRONICLE
        </h1>
        <p className="font-serif text-xs italic mt-2 tracking-[0.25em]">
          NEWS • IDEAS • CULTURE • THE WORLD
        </p>
      </div>
    </div>
  );
}

export default Header;
