import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import { CupIllustration } from "@/components/Illustrations";

const menu = [
  { kode: "B-01", nama: "Kopi Saksi Mata", harga: "28K", ket: "Espresso ganda, susu hangat, sedikit karamel asin." },
  { kode: "B-02", nama: "Teh Alibi", harga: "24K", ket: "Earl grey dingin dengan jeruk bali dan madu." },
  { kode: "B-03", nama: "Cokelat Sidik Jari", harga: "30K", ket: "Cokelat hitam 70% yang kental, disajikan panas." },
  { kode: "K-01", nama: "Croissant Barang Bukti", harga: "26K", ket: "Croissant mentega dengan isian keju dan daging asap." },
  { kode: "K-02", nama: "Kue Teka-Teki", harga: "32K", ket: "Kue lapis rasa rahasia yang berganti setiap minggu." },
  { kode: "K-03", nama: "Roti Bakar Lensa", harga: "22K", ket: "Roti brioche, selai srikaya, dan mentega." },
];

const jadwal = [
  { hari: "Jumat", jam: "19.00", acara: "Malam Misteri", isi: "Pecahkan kasus fiktif bersama satu meja. Tim pemenang dapat minuman gratis." },
  { hari: "Sabtu", jam: "15.00", acara: "Klub Buku Detektif", isi: "Diskusi santai satu novel misteri setiap bulan." },
  { hari: "Minggu", jam: "10.00", acara: "Kelas Latte Art", isi: "Belajar menuang susu bersama barista kami. Kuota 8 orang." },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="beranda" className="hero">
          <div className="container hero-inner">
            <div className="hero-intro">
              <p className="stamp">Buka setiap hari, 08.00–22.00</p>
              <h1>Setiap cangkir menyimpan satu petunjuk.</h1>
              <p className="lead">
                Kedai Petunjuk adalah kafe kecil di Jakarta Barat untuk kamu yang suka kopi enak dan cerita
                misteri. Pesan dari berkas menu, duduk di ruang baca, atau ikut memecahkan kasus setiap Jumat malam.
              </p>
              <div className="hero-actions">
                <a href="#menu" className="btn btn-primary">Lihat menu</a>
                <a href="#acara" className="btn btn-ghost">Jadwal acara</a>
              </div>
            </div>
            <Carousel />
          </div>
        </section>

        <section id="menu" className="section section-paper">
          <div className="container">
            <header className="section-head">
              <h2>Berkas menu</h2>
              <p>Minuman berkode B, kudapan berkode K. Sebutkan kodenya ke barista.</p>
            </header>
            <div className="menu-grid">
              {menu.map((m) => (
                <article key={m.kode} className="menu-item">
                  <span className="menu-code">{m.kode}</span>
                  <div className="menu-text">
                    <h3>{m.nama}</h3>
                    <p>{m.ket}</p>
                  </div>
                  <span className="menu-price">{m.harga}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="acara" className="section section-ink">
          <div className="container">
            <header className="section-head">
              <h2>Acara minggu ini</h2>
              <p>Gratis untuk pengunjung. Reservasi meja lewat WhatsApp agar kebagian tempat.</p>
            </header>
            <ol className="timeline">
              {jadwal.map((j) => (
                <li key={j.acara}>
                  <div className="tl-when">
                    <strong>{j.hari}</strong>
                    <span>{j.jam}</span>
                  </div>
                  <div className="tl-what">
                    <h3>{j.acara}</h3>
                    <p>{j.isi}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="tentang" className="section section-paper">
          <div className="container about">
            <div className="about-art" aria-hidden="true">
              <CupIllustration variant="large" />
            </div>
            <div className="about-text">
              <h2>Tentang kami</h2>
              <p>
                Kedai Petunjuk berawal dari rak buku misteri milik dua sahabat yang terlalu penuh untuk disimpan
                di rumah. Kami memindahkannya ke sini, menambahkan mesin espresso, dan membuka pintu untuk
                siapa saja yang ingin membaca sambil menunggu hujan reda.
              </p>
              <p>
                Biji kopi kami datang dari petani di Gayo dan Toraja, disangrai sendiri setiap Senin. Ada lebih
                dari 400 novel detektif yang bebas dibaca di tempat.
              </p>
              <dl className="facts">
                <div><dt>400+</dt><dd>novel misteri</dd></div>
                <div><dt>2</dt><dd>daerah asal kopi</dd></div>
                <div><dt>52</dt><dd>malam misteri per tahun</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section id="kontak" className="section section-ink">
          <div className="container contact">
            <div>
              <h2>Datang ke lokasi</h2>
              <p>Jl. Letjen S. Parman No. 1, Grogol, Jakarta Barat</p>
              <p>Senin–Minggu, 08.00–22.00</p>
            </div>
            <div className="contact-links">
              <a className="btn btn-primary" href="https://wa.me/6281200000000" target="_blank" rel="noreferrer">
                Reservasi via WhatsApp
              </a>
              <a className="btn btn-ghost" href="https://instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <p>© 2026 Kedai Petunjuk. Dibuat oleh Felicia Angeline (535250029) untuk Tugas 5 Praktikum Frontend.</p>
        </div>
      </footer>
    </>
  );
}
