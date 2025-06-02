"use client";

import React from "react";
import Head from "next/head";
import StructuredData from "./StructuredData";
import type { StructuredDataProps } from "./StructuredData";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  pageType?: "website" | "article" | "product";
  imageUrl?: string;
  structuredData?: {
    type: StructuredDataProps["type"];
    data: StructuredDataProps["data"];
  };
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical = "https://trayancorp.com",
  pageType = "website",
  imageUrl = "/images/logos/logo.svg",
  structuredData,
}) => {
  const fullCanonical = canonical.startsWith("http")
    ? canonical
    : `https://trayancorp.com${canonical}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <link rel="canonical" href={fullCanonical} />

        {/* Open Graph */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content={pageType} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={fullCanonical} />
        <meta property="og:site_name" content="Trayan Corporation" />
        <meta property="og:image" content={imageUrl} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
      </Head>

      {structuredData && (
        <StructuredData type={structuredData.type} data={structuredData.data} />
      )}
    </>
  );
};

export default SEO;
