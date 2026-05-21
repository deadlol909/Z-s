"use client";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    const yearNode = document.getElementById("year");
    if (yearNode) {
      yearNode.textContent = String(new Date().getFullYear());
    }

    const button = document.getElementById("themeToggle");
    const handleClick = () => {
      document.body.classList.toggle("light-mode");
    };

    button?.addEventListener("click", handleClick);

    return () => {
      button?.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <main className="landing">
      <header className="hero">
        <p className="eyebrow">HTML + CSS + JavaScript</p>
        <h1>Frontend Foundation</h1>
        <p>
          This homepage is built with semantic HTML structure, custom CSS styling,
          and JavaScript behavior.
        </p>
        <button id="themeToggle" className="cta">Toggle Theme</button>
      </header>

      <section className="cards" aria-label="Feature cards">
        <article className="card">
          <h2>HTML</h2>
          <p>Clean sections, headings, buttons, and accessible content layout.</p>
        </article>
        <article className="card">
          <h2>CSS</h2>
          <p>Custom styling, spacing, and responsive card-based design.</p>
        </article>
        <article className="card">
          <h2>JavaScript</h2>
          <p>Interactive theme toggle and dynamic current-year rendering.</p>
        </article>
      </section>

      <footer className="footer">
        <small>© <span id="year"></span> Frontend Base</small>
      </footer>
    </main>
  );
}
