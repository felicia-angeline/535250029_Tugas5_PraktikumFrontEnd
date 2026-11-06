"use client";

import { useEffect, useState } from "react";

const links = [
  { id: "beranda", label: "Beranda" },
  { id: "menu", label: "Menu" },
  { id: "acara", label: "Acara" },
  { id: "tentang", label: "Tentang" },
  { id: "kontak", label: "Kontak" },
];

export default function Navbar() {
  const [active, setActive] = useState("beranda");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Tandai menu aktif sesuai section yang sedang terlihat di layar
  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id) => {
    setActive(id);
    setOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="container nav-inner" aria-label="Navigasi utama">
        <a href="#beranda" className="brand" onClick={() => handleClick("beranda")}>
          <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
            <circle cx="13" cy="13" r="8" fill="none" stroke="currentColor" strokeWidth="3" />
            <path d="M19 19l8 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          </svg>
          Kedai Petunjuk
        </a>

        <button
          type="button"
          className={`burger ${open ? "is-open" : ""}`}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul id="nav-links" className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={active === l.id ? "is-active" : ""}
                aria-current={active === l.id ? "page" : undefined}
                onClick={() => handleClick(l.id)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
