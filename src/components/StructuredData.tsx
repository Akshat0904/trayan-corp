import React from "react";

// Organization data interface
interface OrganizationData {
  name: string;
  url: string;
  logo: string;
  contactPoint: {
    "@type": string;
    telephone: string;
    contactType: string;
  }[];
  sameAs: string[];
  description: string;
}

// Website data interface
interface WebsiteData {
  name: string;
  url: string;
}

// BreadcrumbList data interface
interface BreadcrumbListData {
  itemListElement: {
    "@type": string;
    position: number;
    name: string;
    item: string;
  }[];
}

// Product data interface
interface ProductData {
  name: string;
  image: string | string[];
  description: string;
  brand: string;
  priceCurrency: string;
  price: string | number;
  availability: string;
}

type StructuredDataType =
  | OrganizationData
  | WebsiteData
  | BreadcrumbListData
  | ProductData;

export interface StructuredDataProps {
  type: "Organization" | "WebSite" | "BreadcrumbList" | "Product";
  data: StructuredDataType;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  let structuredData;

  switch (type) {
    case "Organization":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: (data as OrganizationData).name,
        url: (data as OrganizationData).url,
        logo: (data as OrganizationData).logo,
        contactPoint: (data as OrganizationData).contactPoint,
        sameAs: (data as OrganizationData).sameAs,
        description: (data as OrganizationData).description,
      };
      break;
    case "WebSite":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: (data as WebsiteData).name,
        url: (data as WebsiteData).url,
        potentialAction: {
          "@type": "SearchAction",
          target: `${(data as WebsiteData).url}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      };
      break;
    case "BreadcrumbList":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: (data as BreadcrumbListData).itemListElement,
      };
      break;
    case "Product":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: (data as ProductData).name,
        image: (data as ProductData).image,
        description: (data as ProductData).description,
        brand: {
          "@type": "Brand",
          name: (data as ProductData).brand,
        },
        offers: {
          "@type": "Offer",
          priceCurrency: (data as ProductData).priceCurrency,
          price: (data as ProductData).price,
          availability: (data as ProductData).availability,
        },
      };
      break;
    default:
      structuredData = {};
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
