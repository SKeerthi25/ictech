import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ictechltd.co.uk'),
  title: "IC TECH LTD | Premium Software Development",
  description: "UK-based software development company specializing in business and domestic software solutions.",
  icons: {
    icon: [
      { url: '/logo.png', sizes: 'any' }
    ],
    apple: [
      { url: '/logo.png' }
    ],
  },
  openGraph: {
    title: "IC TECH LTD | Premium Software Development",
    description: "UK-based software development company specializing in business and domestic software solutions.",
    url: 'https://www.ictechltd.co.uk',
    siteName: 'IC TECH LTD',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased scroll-smooth ${inter.className}`}>
      <body className="min-h-full flex flex-col bg-slate-950 text-white selection:bg-blue-500/30">
        <LoadingScreen>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </LoadingScreen>
      </body>
    </html>
  );
}
