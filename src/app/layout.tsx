import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pavitra Kushwaha — Builder",
  description:
    "Pavitra Kushwaha — teenage builder, researcher, and founder. IIT Kanpur Research Fellow, Y Combinator Startup School, Founder of byteforge.",
  keywords: [
    "Pavitra Kushwaha",
    "builder",
    "developer",
    "IIT Kanpur",
    "byteforge",
    "Y Combinator",
  ],
  authors: [{ name: "Pavitra Kushwaha" }],
  creator: "Pavitra Kushwaha",
  openGraph: {
    title: "Pavitra Kushwaha — Builder",
    description:
      "Teenage builder, researcher, and founder. Top 20 at VIBECON, IIT Kanpur Research Fellow, YC Startup School.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Pavitra Kushwaha — Builder",
    description: "Teenage builder. IIT Kanpur researcher. Founder of byteforge.",
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
