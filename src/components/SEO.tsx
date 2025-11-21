"use client";

import React, { useEffect } from "react";
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
  canonical = "/",
  pageType = "website",
  imageUrl = "/images/logos/Trayan-blue.jpg",
  structuredData,
}) => {
  // Ensure canonical URL is always absolute
  const fullCanonical = canonical.startsWith("http")
    ? canonical
    : `https://trayancorp.com${canonical}`;

  // Ensure image URL is always absolute
  const fullImageUrl =
    imageUrl && typeof imageUrl === "string" && imageUrl.startsWith("http")
      ? imageUrl
      : `https://trayancorp.com${imageUrl || "/images/logos/Trayan-blue.jpg"}`;

  useEffect(() => {
    // Set page title
    document.title = title;

    // Set or update canonical link
    let canonicalLink = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement;
    if (canonicalLink) {
      canonicalLink.href = fullCanonical;
    } else {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      canonicalLink.href = fullCanonical;
      document.head.appendChild(canonicalLink);
    }

    // Set or update meta description
    let metaDescription = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement;
    if (metaDescription) {
      metaDescription.content = description;
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      metaDescription.content = description;
      document.head.appendChild(metaDescription);
    }

    // Set or update Open Graph tags
    const setMetaProperty = (property: string, content: string) => {
      let meta = document.querySelector(
        `meta[property="${property}"]`
      ) as HTMLMetaElement;
      if (meta) {
        meta.content = content;
      } else {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    setMetaProperty("og:title", title);
    setMetaProperty("og:description", description);
    setMetaProperty("og:url", fullCanonical);
    setMetaProperty("og:image", fullImageUrl);
    setMetaProperty("og:type", pageType);
    setMetaProperty("og:site_name", "Trayan Corporation");
    setMetaProperty("og:locale", "en_US");

    // Set or update Twitter tags
    const setMetaName = (name: string, content: string) => {
      let meta = document.querySelector(
        `meta[name="${name}"]`
      ) as HTMLMetaElement;
      if (meta) {
        meta.content = content;
      } else {
        meta = document.createElement("meta");
        meta.name = name;
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    setMetaName("twitter:card", "summary_large_image");
    setMetaName("twitter:title", title);
    setMetaName("twitter:description", description);
    setMetaName("twitter:image", fullImageUrl);
  }, [title, description, fullCanonical, fullImageUrl, pageType]);

  return (
    <>
      {structuredData && (
        <StructuredData type={structuredData.type} data={structuredData.data} />
      )}
    </>
  );
};

export default SEO;
