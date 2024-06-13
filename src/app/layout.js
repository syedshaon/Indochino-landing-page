import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Indochino: Made to Measure",
  description: "The ultimate custom menswear experience is now open in Chinock Centre.",
  imageUrl: "/apple-touch-icon.png",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Indochino: Made to Measure",
    description: "The ultimate custom menswear experience is now open in Chinock Centre.",
    url: "https://mashi-portfolio.vercel.app/",
    siteName: "Indochino: Made to Measure",

    images: [
      {
        url: "https://mashi-portfolio.vercel.app/twitter-image.png",
        width: 250,
        height: 256,
      },
      {
        url: "https://mashi-portfolio.vercel.app/mashi.png",
        width: 1280,
        height: 630,
        alt: "Indochino: Made to Measure",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
