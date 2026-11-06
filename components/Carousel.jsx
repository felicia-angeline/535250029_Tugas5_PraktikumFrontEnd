"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  CupIllustration,
  MagnifierIllustration,
  BookIllustration,
  KeyIllustration,
} from "./Illustrations";

const slides = [
  {
    kasus: "Kasus 01",
    judul: "Kopi Saksi Mata",
    isi: "Espresso ganda dengan karamel asin. Menu yang paling sering dipesan para pembaca setia.",
    art: <CupIllustration />,
    warna: "#E9D29C",
  },
  {
    kasus: "Kasus 02",
    judul: "Biji kopi di bawah lensa",
    isi: "Kami menyangrai biji Gayo dan Toraja sendiri setiap Senin pagi. Cium aromanya di meja bar.",
    art: <MagnifierIllustration />,
    warna: "#D9C4A0",
  },
  {
    kasus: "Kasus 03",
    judul: "Ruang baca 400 novel",
    isi: "Pilih buku dari rak, pesan minuman, dan baca selama yang kamu mau. Tidak ada batas waktu.",
    art: <BookIllustration />,
    warna: "#E4CFA8",
  },
  {
    kasus: "Kasus 04",
    judul: "Malam Misteri, tiap Jumat",
    isi: "Satu kasus fiktif, beberapa tersangka, dan petunjuk tersembunyi di sekitar kafe. Mulai pukul 19.00.",
    art: <KeyIllustration />,
    warna: "#DCC08A",
  },
];

const INTERVAL = 5000;

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const touchStartX = useRef(null);
  const total = slides.length;

  const goTo = useCallback((i) => setIndex((i + total) % total), [total]);
  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Autoplay: berhenti saat di-hover/fokus atau saat reduced motion aktif
  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [paused, reducedMotion, next, index]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 50) (diff < 0 ? next : prev)();
    touchStartX.current = null;
  };

  return (
    <div
      className="carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Sorotan Kedai Petunjuk"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="carousel-viewport">
        <div className="carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {slides.map((s, i) => (
            <article
              key={s.kasus}
              className="slide"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} dari ${total}`}
              aria-hidden={i !== index}
              style={{ "--slide-bg": s.warna }}
            >
              <div className="folder-tab">{s.kasus}</div>
              <div className="slide-body">
                <div className="slide-art">{s.art}</div>
                <div className="slide-text">
                  <h2>{s.judul}</h2>
                  <p>{s.isi}</p>
                </div>
              </div>
              <span className="pin" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>

      <div className="carousel-controls">
        <button type="button" className="ctrl" onClick={prev} aria-label="Slide sebelumnya">
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /></svg>
        </button>
        <div className="dots" role="tablist" aria-label="Pilih slide">
          {slides.map((s, i) => (
            <button
              key={s.kasus}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Ke ${s.kasus}`}
              className={`dot ${i === index ? "is-active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <button type="button" className="ctrl" onClick={next} aria-label="Slide berikutnya">
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /></svg>
        </button>
      </div>
    </div>
  );
}
