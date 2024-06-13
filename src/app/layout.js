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
    url: "https://indochino-home.vercel.app/",
    siteName: "Indochino: Made to Measure",

    images: [
      {
        url: "https://indochino-home.vercel.app/twitter-image.png",
        width: 512,
        height: 512,
      },
      {
        url: "https://indochino-home.vercel.app/twitter-image.png",
        width: 512,
        height: 512,
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
