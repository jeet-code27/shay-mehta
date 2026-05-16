import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shaymehta.com"),
  title: {
    default: "Shay Mehta | Personal Portfolio",
    template: "%s | Shay Mehta",
  },
  description: "30+ Years in Sales & Marketing. Now Building Real Digital Growth for SMEs. I help businesses scale through powerful systems, automation, and modern marketing.",
  keywords: ["Shay Mehta", "Digital Growth", "SME Marketing", "Sales Strategies", "Business Automation", "AI Workflows", "Claude AI Guide"],
  authors: [{ name: "Shay Mehta" }],
  creator: "Shay Mehta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.shaymehta.com",
    title: "Shay Mehta | Personal Portfolio",
    description: "30+ Years in Sales & Marketing. Now Building Real Digital Growth for SMEs.",
    siteName: "Shay Mehta",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shay Mehta | Personal Portfolio",
    description: "30+ Years in Sales & Marketing. Now Building Real Digital Growth for SMEs.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      className={`${outfit.variable} ${jakarta.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
