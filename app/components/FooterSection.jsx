import React from "react";

function FooterSection() {
  return (
    <footer className="border-t-4 border-double border-black">
      <div className="mx-auto max-w-7xl px-5 py-8 text-center md:px-8">
        <h2 className="font-serif text-3xl font-black">THE CHRONICLE</h2>

        <p className="mt-2 font-serif text-xs text-black/60">
          A digital newspaper project
        </p>

        <div className="mt-6 border-t border-black/20 pt-4 font-sans text-[9px] uppercase tracking-widest text-black/50">
          © 2026 The Chronicle
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
