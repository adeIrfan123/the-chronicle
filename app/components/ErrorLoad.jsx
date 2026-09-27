import React from "react";

function ErrorLoad() {
  return (
    <div>
      <main className="flex min-h-screen items-center justify-center bg-[#f5f1e8] px-5">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold">
            Unable to load the news
          </h1>

          <p className="mt-3 font-serif text-black/60">
            Please try again later.
          </p>
        </div>
      </main>
    </div>
  );
}

export default ErrorLoad;
