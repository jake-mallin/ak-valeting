import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.akmobilevaleting.co.uk"),
  title: {
    default: " | Mobile Car Valeting in Staffordshire",
    template: "%s | ",
  },
  description:
    "Professional mobile car valeting in Staffordshire, North Staffordshire and South Cheshire. Established in 2008, offering regular and one-off valeting at your home or workplace.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: " | Mobile Car Valeting in Staffordshire",
    description:
      "Friendly, professional mobile car valeting service covering Staffordshire, North Staffordshire and South Cheshire.",
    url: "https://www.akmobilevaleting.co.uk",
    siteName: "",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: " van",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: " | Mobile Car Valeting in Staffordshire",
    description:
      "Professional mobile car valeting at your home or workplace across Staffordshire and South Cheshire.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        <Script
          src="https://kit.fontawesome.com/ea36fa6d9b.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}