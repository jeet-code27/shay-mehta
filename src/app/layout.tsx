import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { JsonLd } from "@/components/seo/JsonLd";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#1E293B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://shaymehta.com"),
  title: {
    default: "Shay Mehta | Digital Marketing & Growth Consultant for SMEs",
    template: "%s | Shay Mehta",
  },
  description:
    "Over 30+ years in Sales & Marketing. Shay Mehta (founder of BizBox Story) helps SMEs and startups scale through SEO, AI SEO, Google Ads, brand strategy, and revenue growth engines.",
  keywords: [
    "Shay Mehta",
    "Shailesh Mehta",
    "sayitlikeshay",
    "Digital Marketing Consultant",
    "Digital Growth Consultant India",
    "SME Marketing Consultant",
    "AI SEO Consultant",
    "SEO Expert India",
    "Google Ads Specialist",
    "BizBox Story Founder",
    "Business Growth Strategy",
    "Lead Generation Consultant",
  ],
  authors: [{ name: "Shay Mehta", url: "https://shaymehta.com" }],
  creator: "Shay Mehta",
  publisher: "BizBox Story",
  applicationName: "Shay Mehta Portfolio",
  category: "Business & Digital Marketing",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "https://shaymehta.com",
      "en-IN": "https://shaymehta.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://shaymehta.com",
    title: "Shay Mehta | Digital Marketing & Growth Consultant for SMEs",
    description:
      "Over 30+ years in Sales & Marketing. Founder of BizBox Story. Scaling 50+ SMEs and startups globally with proven SEO, AI SEO, and revenue growth engines.",
    siteName: "Shay Mehta",
    images: [
      {
        url: "/images/shay-mehta-hero-section.png",
        width: 1200,
        height: 630,
        alt: "Shay Mehta - Digital Marketing & Growth Consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shay Mehta | Digital Marketing & Growth Consultant for SMEs",
    description:
      "Over 30+ years in Sales & Marketing. Scaling SMEs and startups globally with real revenue growth engines.",
    creator: "@sayitlikeshay",
    site: "@sayitlikeshay",
    images: ["/images/shay-mehta-hero-section.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/web-app-manifest-192x192.png",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    title: "Shay Mehta Portfolio",
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
      <head>
        <meta name="apple-mobile-web-app-title" content="Shay Mehta Portfolio" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt Context" />
        <JsonLd />
      </head>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
