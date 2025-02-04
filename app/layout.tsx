import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CraftDuka Digital",
  description: "CraftDuka Digital is a software development company that specializes in web development, mobile app development, and custom software development.",
  robots: "follow, index",
  applicationName: "CraftDuka Digital",
  category: "Portfolio Website",
  keywords: ["CraftDuka Digital", "CraftDuka", "Digital", "Portfolio", "Website", "Software Company", "Software Development", "Software Development Company", "Software Development Agency", "Software Agency", "Software Development Agency in Kenya", "Software Development Company in Kenya", "Software Agency in Kenya", "Software Development Agency in Nairobi", "Software Development Company in Nairobi", "web development", "Software Agency in Nairobi", "Software Development Agency in Africa", "Software Development Company in Africa", "Software Agency in Africa", "Software Development Agency in East Africa", "Software Development Company in East Africa", "Software Agency in East Africa", "Software Development Agency in Nairobi, Kenya", "Software Development Company in Nairobi, Kenya", "Software Agency in Nairobi, Kenya", "Software Development Agency in Africa", "Software Development Company in Africa", "Software Agency in Africa", "Software Development Agency in East Africa", "Software Development Company in East Africa", "Software Agency in East Africa", "Software Development Agency in Nairobi, Kenya", "Software Development Company in Nairobi, Kenya", "Software Agency in Nairobi, Kenya", "Software Development Agency in Africa", "Software Development Company in Africa", "Software Agency in Africa", "Software Development Agency in East Africa", "Software Development Company in East Africa", "Software Agency in East Africa", "Software Development Agency in Nairobi, Kenya", "Software Development Company in Nairobi, Kenya", "Software Agency in Nairobi, Kenya", "Software Development Agency in Africa", "Software Development Company in Africa", "Software Agency in Africa", "Software Development Agency in East Africa", "Software Development Company in East Africa", "Software Agency in East Africa", "Software Development Agency in Nairobi, Kenya", "Software Development Company in Nairobi, Kenya", "Software Agency in Nairobi, Kenya", "Software Development Agency in Africa", "Software Development Company in Africa", "Software Agency in Africa", "Software Development Agency in East Africa", "Software Development Company in East Africa", "Software Agency in East Africa", "Software Development Agency in Nairobi, Kenya", "Software Development Company in Nairobi, Kenya", "Software Agency in Nairobi, Kenya", "Software Development Agency in Africa", "Software Development Company in Africa", "Software Agency in Africa", "Software Development Agency in East Africa", "Software Development Company in East Africa", "Software Agency in East Africa", "Software Development Agency in Nairobi, Kenya", "Software Development Company in Nairobi, Kenya", "Software Agency in Nairobi, Kenya", "Software Development Agency in Africa", "Software Development Company in Africa", "Software Agency in Africa", "Software Development Agency in East Africa", "Software Development Company"],
  classification: "Software Development",
  openGraph: {
    title: "CraftDuka Digital",
    description: "CraftDuka Digital is a software development company that specializes in web development, mobile app development, and custom software development.",
    type: "website",
    url: "https://craftduka.com",
    images: [
      {
        url: "/images/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "CraftDuka Digital",
      },
    ],
  },
  icons: {
    icon: "/images/logo.jpeg",
  },
  metadataBase: new URL("https://craftduka.com"),
  alternates: {
    canonical: "https://craftduka.com",
    languages: {
      'en-US': '/en-US',
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
