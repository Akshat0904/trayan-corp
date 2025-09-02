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
    default: "Trayan Corporation | Chemical Trading & Manufacturing Company | Ahmedabad, Gujarat, India",
    template: "%s | Trayan Corporation - Chemical Solutions Provider"
  },
  description:
    "Trayan Corporation - Leading chemical trading and manufacturing company in Ahmedabad, Gujarat, India. Specializing in industrial chemicals, solvents, additives & raw materials. Trusted chemical supplier with 5+ years experience. Call +91 87809 98478",
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
    "chemical supplier phone number Ahmedabad"
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
    title: "Trayan Corporation | Leading Chemical Trading & Manufacturing Company in Ahmedabad",
    description:
      "Trayan Corporation - Leading chemical trading and manufacturing company in Ahmedabad, Gujarat. Specializing in industrial chemicals, solvents, additives & raw materials. Trusted partner for 5+ years.",
    url: siteUrl,
    siteName: "Trayan Corporation",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/logos/logo.svg`,
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
    images: [`${siteUrl}/images/logos/logo.svg`],
    site: "@trayancorp",
    creator: "@trayancorp",
  },
  icons: {
    icon: [
      { url: "/images/logos/logo.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/images/logos/logo.svg",
    shortcut: "/images/logos/logo.svg",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        {/* Search Engine Verification */}
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
        <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" />
        <meta name="yandex-verification" content="YOUR_YANDEX_VERIFICATION_CODE" />
        
        {/* Geographic Meta Tags for Local SEO */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad, Gujarat" />
        <meta name="geo.position" content="23.1138826;72.5412793" />
        <meta name="ICBM" content="23.1138826, 72.5412793" />
        
        {/* Business Meta Tags */}
        <meta name="author" content="Trayan Corporation" />
        <meta name="publisher" content="Trayan Corporation" />
        <meta name="copyright" content="© 2024 Trayan Corporation. All rights reserved." />
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-navbutton-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#2563eb" />
      </head>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;
