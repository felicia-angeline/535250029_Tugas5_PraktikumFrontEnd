# Kedai Petunjuk — Tugas 5 Praktikum Frontend

**Nama:** Felicia Angeline
**NIM:** 535250029

Single page website untuk sebuah kafe bertema detektif (orisinal), dibuat dengan Next.js (App Router).

## Fitur sesuai ketentuan tugas

- **Komponen carousel** (`components/Carousel.jsx`): autoplay tiap 5 detik, tombol sebelumnya/berikutnya, indikator titik, navigasi keyboard (panah kiri/kanan), geser (swipe) di layar sentuh, berhenti saat kursor di atas carousel, dan menghormati pengaturan *reduced motion*.
- **Menu aktif pada Navbar** (`components/Navbar.jsx`): menu ditandai otomatis sesuai section yang sedang terlihat (memakai `IntersectionObserver`), dengan gaya khusus dan `aria-current`.
- **Responsif**: layout menyesuaikan desktop, tablet, dan HP; navbar berubah menjadi menu hamburger di layar kecil.

## Menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:3000
