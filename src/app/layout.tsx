import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import AnnouncementTicker from "@/components/AnnouncementTicker";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Govt. Shalimar Graduate College, Lahore",
  description: "Govt. Shalimar Graduate College, Lahore — Excellence in education since 1963. Intermediate, BS, and professional programs near Shalimar Gardens.",
  keywords: "Shalimar College, Lahore, college, admissions, BS programs, intermediate, education",
  openGraph: {
    title: "Govt. Shalimar Graduate College, Lahore",
    description: "Excellence in education since 1963",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <TopBar />
        <Navigation />
        <AnnouncementTicker />
        <main>{children}</main>
        <Footer />
        {/* Back to top */}
        <a
          href="#top"
          style={{ backgroundColor: "#C9A227" }}
          className="fixed bottom-6 right-6 w-11 h-11 flex items-center justify-center rounded shadow-lg z-50 text-white font-bold text-lg hover:scale-110 transition-transform"
          aria-label="Back to top"
        >
          ↑
        </a>
      </body>
    </html>
  );
}
