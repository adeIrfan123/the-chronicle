import React from "react";

function LatestBar() {
  return (
    <div className="flex items-center gap-3 py-3 border-b border-black/20">
      <span className="bg-black text-white px-2 py-1 text-[9px] font-bold tracking-widest">
        NEWS
      </span>
      <p className="font-serif text-xs font-semibold">
        Latest stories from around the world
      </p>
    </div>
  );
}

export default LatestBar;
