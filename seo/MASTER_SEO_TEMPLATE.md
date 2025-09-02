# 🚀 MASTER SEO TEMPLATE
*One-stop SEO implementation guide for any business*

## COPY-PASTE HTML TEMPLATE

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- REPLACE ALL [PLACEHOLDERS] WITH YOUR INFO -->
    <title>[BUSINESS_NAME] | [SERVICE] | [CITY, STATE]</title>
    <meta name="description" content="[BUSINESS_DESC] in [CITY]. [VALUE_PROP]. [SERVICES]. [HOURS]. [CTA]!">
    <meta name="keywords" content="[business + city], [service + location], [business near me]">
    <meta name="robots" content="index, follow">
    
    <!-- LOCATION TAGS -->
    <meta name="geo.region" content="[COUNTRY-STATE]">
    <meta name="geo.position" content="[LAT;LONG]">
    
    <!-- SOCIAL MEDIA -->
    <meta property="og:title" content="[SOCIAL_TITLE]">
    <meta property="og:description" content="[SOCIAL_DESC]">
    <meta property="og:image" content="https://[DOMAIN]/og.jpg">
    
    <!-- BUSINESS SCHEMA -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "[LocalBusiness|Restaurant|Store]",
      "name": "[BUSINESS_NAME]",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[ADDRESS]",
        "addressLocality": "[CITY]",
        "addressRegion": "[STATE]",
        "postalCode": "[ZIP]",
        "addressCountry": "[COUNTRY]"
      },
      "telephone": "[PHONE]",
      "url": "https://[DOMAIN]"
    }
    </script>
</head>
```

## TECHNICAL FILES

### robots.txt:
```
User-agent: *
Allow: /
Sitemap: https://[DOMAIN]/sitemap.xml
```

### sitemap.xml:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://[DOMAIN]/</loc>
    <priority>1.0</priority>
  </url>
</urlset>
```

## IMPLEMENTATION STEPS
1. Replace ALL [PLACEHOLDERS]
2. Research keywords for your industry
3. Test with Google Rich Results Tool
4. Submit sitemap to Search Console
5. Monitor performance

This template works for any business type!