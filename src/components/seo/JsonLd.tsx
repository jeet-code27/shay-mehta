import React from "react"

export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://shaymehta.com/#person",
    name: "Shay Mehta",
    alternateName: ["Shailesh Mehta", "sayitlikeshay", "@sayitlikeshay"],
    url: "https://shaymehta.com",
    image: "https://shaymehta.com/images/shay-mehta.jpeg",
    jobTitle: "Founder & Digital Marketing Consultant",
    description:
      "Digital Marketing & Growth Consultant with 30+ years living, studying, and working in the United States and India. Founder of BizBox Story, with deep expertise in US market entry, American consumer psychology, AI SEO, and revenue growth engines.",
    worksFor: {
      "@type": "Organization",
      name: "BizBox Story",
      url: "https://www.bizboxstory.com/",
    },
    sameAs: [
      "https://instagram.com/sayitlikeshay",
      "https://www.bizboxstory.com/",
    ],
    knowsAbout: [
      "US Market Expansion & American Consumer Psychology",
      "Cross-Border Digital Growth (US & India)",
      "Search Engine Optimization (SEO)",
      "AI SEO & Generative Engine Optimization",
      "Google Ads & PPC Management",
      "Facebook & Meta Ads",
      "Digital Growth Strategy",
      "B2B and B2C Sales Systems",
      "Lead Generation",
      "Brand Positioning",
    ],
  }

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://shaymehta.com/#business",
    name: "Shay Mehta - Digital Growth & Marketing Consultant",
    url: "https://shaymehta.com",
    logo: "https://shaymehta.com/images/shay-mehta.jpeg",
    image: "https://shaymehta.com/images/shay-mehta-hero-section.png",
    description:
      "India's leading Digital Marketing & Growth Consultancy for SMEs and startups. Specializing in SEO, AI SEO, Google Ads, and revenue growth engines.",
    founder: { "@id": "https://shaymehta.com/#person" },
    telephone: ["+91-9217730039", "+1-774-991-2610"],
    email: "info@bizboxstory.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "122 Woodstock Ave, Nirvana Country, Sector 50",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      postalCode: "122018",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Australia" },
    ],
    sameAs: [
      "https://instagram.com/sayitlikeshay",
      "https://www.bizboxstory.com/",
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://shaymehta.com/#website",
    url: "https://shaymehta.com",
    name: "Shay Mehta | Digital Growth Consultant",
    description:
      "Official portfolio and digital growth consultancy website of Shay Mehta.",
    publisher: { "@id": "https://shaymehta.com/#person" },
    inLanguage: "en-US",
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
