import "./globals.css";

export const metadata = {
  title: "Kedai Petunjuk — Kafe Detektif",
  description: "Kafe bertema detektif: kopi, kue, dan malam misteri setiap Jumat.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Special+Elite&family=Work+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
