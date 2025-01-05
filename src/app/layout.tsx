import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luma: NFT Event Ticketing",
  description: "Mint NFT tickets for exclusive events on Solana",
  openGraph: {
    title: "Luma: NFT Event Ticketing",
    description: "Mint NFT tickets for exclusive events on Solana",
    type: "website",
    images: [{
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnOnMs0gmXdrM_xRO7U5ioRch6xrAFDI2iQQ&s",
      width: 1200,
      height: 630,
    }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <Providers>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      </Providers>
    </html>
  );
}
