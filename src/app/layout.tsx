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

export const metadata: Metadata = {
  metadataBase: new URL("https://trayancorp.com"),
  title: "Trayan Corporation - Chemical Trading Company",
  description:
    "Trayan Corporation - Your trusted partner in chemical trading and manufacturing solutions. We provide high-quality chemicals for various industries.",
  keywords: [
    "chemical trading",
    "chemical manufacturing",
    "industrial chemicals",
    "Trayan Corporation",
    "chemical solutions",
    "chemical supplier",
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
    title: "Trayan Corporation - Chemical Trading Company",
    description:
      "Your trusted partner in chemical trading and manufacturing solutions.",
    url: "https://trayancorp.com",
    siteName: "Trayan Corporation",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/logos/logo.svg",
        width: 800,
        height: 600,
        alt: "Trayan Corporation Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trayan Corporation - Chemical Trading Company",
    description:
      "Your trusted partner in chemical trading and manufacturing solutions.",
    images: ["/images/logos/logo.svg"],
  },
  icons: {
    icon: [
      { url: "/images/logos/logo.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/images/logos/logo.svg",
    shortcut: "/images/logos/logo.svg",
  },
  alternates: {
    canonical: "https://trayancorp.com",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <meta
          name="google-site-verification"
          content="YOUR_VERIFICATION_CODE"
        />
      </head>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;
