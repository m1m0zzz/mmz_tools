import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const noteSansJP = Noto_Sans_JP({ subsets: ["latin"] });

const title = "mmz_tools | Ableton Racks Pack"
const description = "Ableton Live Racks mmz_tools"
const siteUrl = "https://m1m0zzz.github.io/mmz_tools/"
const imageUrl = siteUrl + "preview.png"

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: ["Music", "DTM", "Ableton", "Live", "Plugin"],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: title,
    description: description,
    siteName: "mmz_tools",
    images: [{
      url: imageUrl,
    }],
  },
  twitter: {
    title: title,
    description: description,
    card: "summary_large_image",
    creator: "@mimoz",
    images: imageUrl
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" prefix="og: http://ogp.me/ns#">
      <body className={noteSansJP.className}>{children}</body>
    </html>
  );
}
