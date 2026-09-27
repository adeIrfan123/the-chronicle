"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Header() {
  const today = new Date();
  const pathname = usePathname();

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

      <div className="overflow-x-auto border-b border-black/30">
        <nav className="flex items-center min-w-max justify-center gap-7 py-3 font-bold text-xs uppercase font-serif tracking-wider">
          <Link
            href={"/"}
            className={
              pathname === "/"
                ? "bg-black text-white text-center px-2 py-1"
                : ""
            }
          >
            HOME
          </Link>
          <Link
            href={"/world"}
            className={
              pathname === "/world"
                ? "bg-black text-white text-center px-2 py-1"
                : ""
            }
          >
            WORLD
          </Link>
          <Link
            href={"/us"}
            className={
              pathname === "/us"
                ? "bg-black text-white text-center px-2 py-1"
                : ""
            }
          >
            U.S
          </Link>
          <Link
            href={"/politics"}
            className={
              pathname === "/politics"
                ? "bg-black text-white text-center px-2 py-1"
                : ""
            }
          >
            Politics
          </Link>
          <Link
            href={"/business"}
            className={
              pathname === "/business"
                ? "bg-black text-white text-center px-2 py-1"
                : ""
            }
          >
            Business
          </Link>
          <Link
            href={"/technology"}
            className={
              pathname === "/technology"
                ? "bg-black text-white text-center px-2 py-1"
                : ""
            }
          >
            Technology
          </Link>
          <Link
            href={"/science"}
            className={
              pathname === "/science"
                ? "bg-black text-white text-center px-2 py-1"
                : ""
            }
          >
            Science
          </Link>
          <Link
            href={"/sports"}
            className={
              pathname === "/sports"
                ? "bg-black text-white text-center px-2 py-1"
                : ""
            }
          >
            Sports
          </Link>
          <Link
            href={"/arts"}
            className={
              pathname === "/arts"
                ? "bg-black text-white text-center px-2 py-1"
                : ""
            }
          >
            Arts
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
