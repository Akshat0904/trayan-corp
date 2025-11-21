import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Layout from "@/components/layout/Layout";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://trayancorp.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Trayan Corporation | Chemical Trading & Manufacturing Company | Ahmedabad, Gujarat, India",
    template: "%s | Trayan Corporation - Chemical Solutions Provider",
  },
  description:
    "Trayan Corporation - Leading chemical trading and manufacturing company in Ahmedabad, Gujarat, India. Specializing in industrial chemicals, solvents, additives & raw materials. Trusted chemical supplier with 5+ years experience serving 10+ countries with 300+ products. Contact: +91 87809 98478",
  keywords: [
    // Company Name Variations
    "Trayan Corporation",
    "Trayan Corp",
    "Trayan Chemical Corporation",
    "Trayan Chemical Company",
    "Trayan Corporation Private Limited",
    "Trayan Corporation Pvt Ltd",

    // Core Business Keywords
    "chemical trading company",
    "chemical manufacturing",
    "chemical manufacturing company",
    "industrial chemicals",
    "chemical supplier",
    "chemical distributor",
    "chemical solutions",
    "chemical trading",
    "chemical business",
    "chemical industry",
    "chemical company",
    "chemical trading business",
    "chemical supply chain",
    "chemical procurement",
    "chemical sourcing",

    // Location-Based Keywords - Ahmedabad Focus
    "chemical company Ahmedabad",
    "chemical suppliers Ahmedabad",
    "chemical manufacturers Ahmedabad",
    "chemical distributors Ahmedabad",
    "chemical trading Ahmedabad",
    "chemical industry Ahmedabad",
    "chemical business Ahmedabad",
    "industrial chemicals Ahmedabad",
    "chemical solutions Ahmedabad",
    "Ahmedabad chemical company",
    "Ahmedabad chemical suppliers",
    "Ahmedabad chemical manufacturers",
    "Ahmedabad chemical distributors",
    "Ahmedabad chemical trading",
    "Ahmedabad industrial chemicals",
    "Ahmedabad chemical solutions",

    // Location-Based Keywords - Gujarat Focus
    "chemical company Gujarat",
    "chemical suppliers Gujarat",
    "chemical manufacturers Gujarat",
    "chemical distributors Gujarat",
    "chemical trading Gujarat",
    "chemical industry Gujarat",
    "chemical business Gujarat",
    "industrial chemicals Gujarat",
    "chemical solutions Gujarat",
    "Gujarat chemical company",
    "Gujarat chemical suppliers",
    "Gujarat chemical manufacturers",
    "Gujarat chemical distributors",
    "Gujarat chemical trading",
    "Gujarat industrial chemicals",
    "Gujarat chemical solutions",

    // Specific Area Keywords
    "Gota chemical company",
    "Jagatpur chemical company",
    "SG Highway chemical company",
    "Skywalk Elements chemical company",
    "chemical company Gota",
    "chemical company Jagatpur",
    "chemical company SG Highway",
    "chemical company Gota Ahmedabad",
    "chemical company Jagatpur Ahmedabad",
    "chemical company SG Highway Ahmedabad",
    "West Ahmedabad chemical company",
    "North Ahmedabad chemical company",
    "Bopal chemical company",
    "Shela chemical company",
    "Prahlad Nagar chemical company",
    "Science City chemical company",

    // Pin Code and Address Keywords
    "382481 chemical company",
    "chemical company 382481",
    "chemical company Ahmedabad 382481",
    "310 Skywalk Elements",
    "Jagatpur off SG Highway",
    "chemical company near Science City",
    "chemical company near Bopal",
    "chemical company near Shela",

    // Near Me Keywords
    "chemical suppliers near me",
    "chemical company near me",
    "chemical trading company near me",
    "chemical manufacturers near me",
    "chemical distributors near me",
    "industrial chemicals near me",
    "chemical solutions near me",

    // India Focus Keywords
    "chemical supplier India",
    "chemical company India",
    "chemical trading India",
    "chemical manufacturing India",
    "chemical industry India",
    "chemical business India",
    "chemical solutions India",
    "industrial chemicals India",
    "India chemical company",
    "India chemical supplier",
    "India chemical trading",
    "India chemical manufacturing",
    "India chemical industry",
    "India chemical business",
    "India chemical solutions",
    "India industrial chemicals",

    // Product-Specific Keywords
    "solvents supplier",
    "solvents manufacturer",
    "solvents distributor",
    "additives manufacturer",
    "additives supplier",
    "additives distributor",
    "raw materials distributor",
    "raw materials supplier",
    "chemical raw materials",
    "chemical solvents",
    "chemical additives",
    "industrial solvents",
    "industrial additives",
    "industrial raw materials",
    "specialty chemicals",
    "bulk chemicals",
    "fine chemicals",
    "organic chemicals",
    "inorganic chemicals",

    // Industry-Specific Keywords
    "pharmaceutical chemicals",
    "textile chemicals",
    "paint chemicals",
    "coating chemicals",
    "plastic chemicals",
    "rubber chemicals",
    "food processing chemicals",
    "agriculture chemicals",
    "manufacturing chemicals",
    "construction chemicals",
    "automotive chemicals",
    "electronics chemicals",

    // Service Keywords
    "chemical export import",
    "chemical export",
    "chemical import",
    "chemical logistics",
    "chemical transportation",
    "chemical delivery",
    "chemical supply",
    "chemical inventory management",
    "chemical consultation",
    "chemical technical support",
    "chemical quality control",
    "chemical testing",
    "chemical certification",
    "chemical analysis",
    "custom chemicals",
    "chemical formulation",
    "chemical blending",
    "chemical processing",
    "chemical packaging",
    "chemical storage",
    "chemical handling",

    // Quality and Trust Keywords
    "quality chemicals",
    "reliable chemical supplier",
    "trusted chemical company",
    "leading chemical company",
    "top chemical company",
    "best chemical company",
    "established chemical company",
    "experienced chemical company",
    "ISO certified chemical company",
    "certified chemical supplier",

    // Business Attributes
    "chemical company founded 2020",
    "5 years experience chemical company",
    "global chemical supplier",
    "international chemical supplier",
    "worldwide chemical supplier",
    "chemical company 10 countries",
    "chemical company 300 products",
    "chemical company 200 partners",

    // Contact Information Keywords
    "chemical company contact",
    "chemical company phone",
    "chemical company email",
    "chemical company address",
    "chemical company location",
    "+91 87809 98478",
    "+91 91063 64185",
    "info@trayancorp.com",

    // Industrial Area Keywords
    "Ahmedabad chemical hub",
    "Gujarat chemical zone",
    "chemical park Ahmedabad",
    "chemical cluster Gujarat",
    "GIDC chemical company",
    "industrial area chemical company",
    "Vatva chemical company",
    "Naroda chemical company",
    "Odhav chemical company",

    // Long-tail Keywords
    "chemical trading company Ahmedabad Gujarat",
    "industrial chemicals supplier India",
    "chemical manufacturing Ahmedabad",
    "chemical distributor Gujarat India",
    "chemical supplier Ahmedabad Gujarat",
    "chemical company Ahmedabad Gujarat India",
    "best chemical company in Ahmedabad",
    "top chemical supplier in Gujarat",
    "leading chemical manufacturer in India",
    "reliable chemical distributor Ahmedabad",
    "trusted chemical supplier Gujarat",
    "chemical trading company near me Ahmedabad",
    "industrial chemical supplier near me",
    "chemical manufacturer contact number",
    "chemical supplier phone number Ahmedabad",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title:
      "Trayan Corporation | Leading Chemical Trading & Manufacturing Company in Ahmedabad",
    description:
      "Trayan Corporation - Leading chemical trading and manufacturing company in Ahmedabad, Gujarat. Specializing in industrial chemicals, solvents, additives & raw materials. Trusted partner for 5+ years.",
    url: siteUrl,
    siteName: "Trayan Corporation",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/logos/Trayan-blue.jpg`,
        width: 1200,
        height: 630,
        alt: "Trayan Corporation - Chemical Trading & Manufacturing Company Ahmedabad Gujarat",
      },
      {
        url: `${siteUrl}/images/chemical-industry-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Chemical Industry Manufacturing - Trayan Corporation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trayan Corporation | Chemical Trading Company Ahmedabad",
    description:
      "Leading chemical trading & manufacturing company in Ahmedabad, Gujarat. Industrial chemicals, solvents, additives & raw materials. Call +91 87809 98478",
    images: [`${siteUrl}/images/logos/Trayan-blue.jpg`],
    site: "@trayancorp",
    creator: "@trayancorp",
  },
  icons: {
    icon: [
      {
        url: "/images/logos/Trayan-corp.png",
        type: "image/svg+xml",
      },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/images/logos/Trayan-corp.png",
    shortcut: "/images/logos/Trayan-corp.png",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        {/* Search Engine Verification */}
        <meta
          name="google-site-verification"
          content="YOUR_GOOGLE_VERIFICATION_CODE"
        />
        <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" />
        <meta
          name="yandex-verification"
          content="YOUR_YANDEX_VERIFICATION_CODE"
        />

        {/* Geographic Meta Tags for Local SEO */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad, Gujarat" />
        <meta name="geo.position" content="23.1138826;72.5412793" />
        <meta name="ICBM" content="23.1138826, 72.5412793" />

        {/* Business Meta Tags */}
        <meta name="author" content="Trayan Corporation" />
        <meta name="publisher" content="Trayan Corporation" />
        <meta
          name="copyright"
          content="© 2024 Trayan Corporation. All rights reserved."
        />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="classification" content="Chemical Trading, Manufacturing" />
        <meta name="category" content="Chemical Industry" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />

        {/* Mobile Optimization */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Trayan Corp" />

        {/* DNS Prefetch for Performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        {/* Preconnect for Critical Resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        {/* PWA Manifest */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme Color */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-navbutton-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#2563eb" />

        {/* Enhanced Business Meta Tags */}
        <meta
          name="locality"
          content="Gota, Jagatpur, SG Highway, West Ahmedabad, Bopal, Shela, Science City, Prahlad Nagar, Satellite, Bodakdev"
        />
        <meta
          name="business-type"
          content="Chemical Trading Company, Chemical Manufacturing"
        />
        <meta
          name="industry"
          content="Chemical Industry, Industrial Chemicals, B2B Chemical Solutions"
        />
        <meta
          name="service-area"
          content="Ahmedabad, Gujarat, India, International"
        />
        <meta name="established" content="2020" />
        <meta
          name="experience"
          content="5+ years in chemical trading and manufacturing"
        />

        {/* Industrial Context Tags */}
        <meta
          name="industrial-areas"
          content="GIDC Vatva, GIDC Naroda, GIDC Odhav, GIDC Ankleshwar, GIDC Vapi, GIDC Bharuch, Dahej SEZ"
        />
        <meta
          name="business-hubs"
          content="SG Highway, CG Road, Ashram Road, GIFT City, Gandhinagar"
        />
        <meta
          name="service-radius"
          content="50km from Ahmedabad, Pan Gujarat, Pan India, International"
        />

        {/* Contact and Business Info */}
        <meta name="contact-phone" content="+91 87809 98478, +91 91063 64185" />
        <meta name="contact-email" content="info@trayancorp.com" />
        <meta
          name="business-hours"
          content="Monday-Saturday 9:00AM-6:00PM IST"
        />
        <meta
          name="address"
          content="310 Skywalk Elements, Jagatpur off SG Highway, Gota, Ahmedabad, Gujarat 382481"
        />

        {/* Enhanced Local Business Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": `${siteUrl}/#localbusiness`,
              name: "Trayan Corporation",
              alternateName: [
                "Trayan Corp",
                "Trayan Chemical Corporation",
                "Trayan Chemical Company",
                "Trayan Corporation Ahmedabad",
              ],
              description:
                "Trayan Corporation is a leading chemical trading and manufacturing company based in Ahmedabad, Gujarat, India. We specialize in sourcing, supplying, and distributing high-quality industrial chemicals, solvents, additives, and raw materials for various industries across India and internationally.",
              url: siteUrl,
              logo: `${siteUrl}/images/logos/Trayan-blue.jpg`,
              image: [
                `${siteUrl}/images/logos/Trayan-blue.jpg`,
                `${siteUrl}/images/chemical-industry-hero.jpg`,
                `${siteUrl}/images/chemicals-lab.jpg`,
              ],
              telephone: ["+91 87809 98478", "+91 91063 64185"],
              email: "info@trayancorp.com",
              foundingDate: "2020",
              slogan:
                "Your trusted partner in chemical trading and manufacturing solutions",
              priceRange: "$$",
              currenciesAccepted: ["INR", "USD", "EUR"],
              paymentAccepted: [
                "Bank Transfer",
                "Letter of Credit",
                "Cash",
                "Check",
              ],
              openingHours: "Mo-Sa 09:00-18:00",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "310 - Skywalk The Elements, Jagatpur, off SG Highway, Gota",
                addressLocality: "Ahmedabad",
                addressRegion: "Gujarat",
                postalCode: "382481",
                addressCountry: {
                  "@type": "Country",
                  name: "India",
                },
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "23.1138826",
                longitude: "72.5412793",
              },
              hasMap: "https://maps.google.com/?cid=your_google_maps_cid",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91 87809 98478",
                  contactType: "customer service",
                  areaServed: ["IN", "US", "EU", "ASIA"],
                  availableLanguage: ["English", "Hindi", "Gujarati"],
                  hoursAvailable: {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                    ],
                    opens: "09:00",
                    closes: "18:00",
                  },
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+91 91063 64185",
                  contactType: "sales",
                  areaServed: ["IN", "US", "EU", "ASIA"],
                  availableLanguage: ["English", "Hindi", "Gujarati"],
                },
              ],
              sameAs: [
                "https://www.facebook.com/trayancorp",
                "https://www.linkedin.com/company/trayan-corporation",
                "https://twitter.com/trayancorp",
                "https://www.instagram.com/trayancorp",
              ],
              knowsAbout: [
                "Chemical Trading",
                "Chemical Manufacturing",
                "Industrial Chemicals",
                "Chemical Solvents",
                "Chemical Additives",
                "Raw Materials",
                "Chemical Distribution",
                "Chemical Supply Chain",
                "Chemical Import Export",
                "Chemical Solutions",
                "Pharmaceutical Chemicals",
                "Textile Chemicals",
                "Paint and Coating Chemicals",
                "Plastic and Polymer Chemicals",
                "Rubber Chemicals",
                "Food Grade Chemicals",
                "Agriculture Chemicals",
                "Construction Chemicals",
                "Automotive Chemicals",
                "Electronics Chemicals",
                "Specialty Chemicals",
                "Bulk Chemicals",
                "Fine Chemicals",
                "Organic Chemicals",
                "Inorganic Chemicals",
                "Chemical Processing",
                "Chemical Formulation",
                "Chemical Blending",
                "Chemical Packaging",
                "Chemical Quality Control",
                "Chemical Testing",
                "Chemical Analysis",
                "Chemical Certification",
                "Chemical Compliance",
                "Chemical Safety",
                "Chemical Storage",
                "Chemical Handling",
                "Chemical Transportation",
                "Chemical Logistics",
                "Chemical Procurement",
                "Chemical Sourcing",
                "Chemical Inventory Management",
                "Chemical Supply Chain Management",
                "Chemical Technical Support",
                "Chemical Consultation",
                "Custom Chemical Manufacturing",
                "Chemical Research and Development",
                "Chemical Market Intelligence",
                "Chemical Regulatory Affairs",
              ],
              areaServed: [
                {
                  "@type": "Country",
                  name: "India",
                },
                {
                  "@type": "State",
                  name: "Gujarat",
                },
                {
                  "@type": "State",
                  name: "Rajasthan",
                },
                {
                  "@type": "State",
                  name: "Maharashtra",
                },
                {
                  "@type": "City",
                  name: "Ahmedabad",
                },
                {
                  "@type": "City",
                  name: "Gandhinagar",
                },
                {
                  "@type": "City",
                  name: "Surat",
                },
                {
                  "@type": "City",
                  name: "Vadodara",
                },
              ],
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: "23.1138826",
                  longitude: "72.5412793",
                },
                geoRadius: "50000",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "47",
                bestRating: "5",
                worstRating: "1",
              },
              hasCredential: [
                "ISO 9001:2015 Certified",
                "Chemical Trading License",
                "Import Export License",
              ],
            }),
          }}
        />

        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": `${siteUrl}/#organization`,
              name: "Trayan Corporation",
              legalName: "Trayan Corporation Private Limited",
              alternateName: ["Trayan Corp", "Trayan Chemical"],
              description:
                "Trayan Corporation is a leading chemical trading and manufacturing company based in Ahmedabad, Gujarat, specializing in sourcing, supplying, and distributing high-quality chemicals for various industries across India and internationally.",
              url: siteUrl,
              logo: `${siteUrl}/images/logos/Trayan-blue.jpg`,
              image: `${siteUrl}/images/logos/Trayan-blue.jpg`,
              telephone: "+91 87809 98478",
              email: "info@trayancorp.com",
              foundingDate: "2020",
              numberOfEmployees: {
                "@type": "QuantitativeValue",
                minValue: "10",
                maxValue: "50",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "310 - Skywalk The Elements, Jagatpur, off SG Highway, Gota",
                addressLocality: "Ahmedabad",
                addressRegion: "Gujarat",
                postalCode: "382481",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "23.1138826",
                longitude: "72.5412793",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91 87809 98478",
                  contactType: "customer service",
                  areaServed: "IN",
                  availableLanguage: ["English", "Hindi", "Gujarati"],
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+91 91063 64185",
                  contactType: "sales",
                  areaServed: "IN",
                  availableLanguage: ["English", "Hindi", "Gujarati"],
                },
              ],
              sameAs: [
                "https://www.facebook.com/trayancorp",
                "https://www.linkedin.com/company/trayan-corporation",
                "https://twitter.com/trayancorp",
              ],
              knowsAbout: [
                "Chemical Trading",
                "Chemical Manufacturing",
                "Industrial Chemicals",
                "Chemical Solutions",
                "Chemical Distribution",
              ],
              areaServed: {
                "@type": "Country",
                name: "India",
              },
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Chemical Trading Services",
                    description:
                      "Professional chemical trading and distribution services",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Chemical Manufacturing",
                    description: "Custom chemical manufacturing and processing",
                  },
                },
              ],
            }),
          }}
        />

        {/* Website Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": `${siteUrl}/#website`,
              name: "Trayan Corporation",
              url: siteUrl,
              potentialAction: {
                "@type": "SearchAction",
                target: `${siteUrl}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;
