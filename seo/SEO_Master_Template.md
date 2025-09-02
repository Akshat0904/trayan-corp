# SEO Master Template - Complete Implementation Guide
*Universal SEO template based on successful local business analysis*

## Quick Start Checklist

### ✅ Essential Meta Tags (Replace placeholders with your info)
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Primary SEO Tags -->
<title>[BUSINESS_NAME] | [SERVICE_TYPE] | [CITY, STATE]</title>
<meta name="description" content="[BUSINESS_DESCRIPTION] in [LOCATION]. [VALUE_PROPOSITION]. [SERVICES]. [HOURS]. [CTA]!">
<meta name="keywords" content="[business + city], [service + location], [business near me], [service + neighborhood]">
<meta name="robots" content="index, follow">

<!-- Geographic Tags -->
<meta name="geo.region" content="[COUNTRY-STATE]">
<meta name="geo.placename" content="[CITY, STATE]">
<meta name="geo.position" content="[LATITUDE;LONGITUDE]">
<meta name="ICBM" content="[LATITUDE, LONGITUDE]">

<!-- Open Graph -->
<meta property="og:title" content="[SOCIAL_TITLE_60_CHARS]">
<meta property="og:description" content="[SOCIAL_DESCRIPTION_155_CHARS]">
<meta property="og:image" content="https://[DOMAIN]/og-image.jpg">
<meta property="og:url" content="https://[DOMAIN]">
<meta property="og:type" content="website">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:title" content="[TWITTER_TITLE_70_CHARS]">
<meta property="twitter:description" content="[TWITTER_DESC_200_CHARS]">
<meta property="twitter:image" content="https://[DOMAIN]/twitter.jpg">

<!-- Canonical -->
<link rel="canonical" href="https://[DOMAIN]/[CURRENT_PAGE]">
```

### ✅ Local Business Schema (Replace all [PLACEHOLDERS])
```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "[LocalBusiness|Restaurant|Store|ProfessionalService]",
    "name": "[BUSINESS_NAME]",
    "alternateName": [
        "[NICKNAME]",
        "[BRAND_VARIATION]",
        "[COMMON_REFERENCE]"
    ],
    "description": "[DETAILED_BUSINESS_DESCRIPTION]",
    "url": "https://[DOMAIN]",
    "telephone": "[PHONE_NUMBER]",
    "email": "[EMAIL]",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "[STREET_ADDRESS]",
        "addressLocality": "[CITY]",
        "addressRegion": "[STATE]",
        "postalCode": "[ZIP_CODE]",
        "addressCountry": "[COUNTRY_CODE]"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "[LATITUDE]",
        "longitude": "[LONGITUDE]"
    },
    "openingHours": "[Mo-Su HH:MM-HH:MM]",
    "priceRange": "[$ | $$ | $$$ | $$$$]",
    "servesCuisine": ["[CUISINE1]", "[CUISINE2]"],
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "[4.0-5.0]",
        "reviewCount": "[NUMBER]"
    },
    "sameAs": [
        "https://www.instagram.com/[HANDLE]/",
        "https://www.facebook.com/[HANDLE]",
        "https://www.google.com/maps/place/[BUSINESS]"
    ],
    "areaServed": [
        "[NEIGHBORHOOD]",
        "[CITY]",
        "[COUNTY]",
        "[STATE]"
    ]
}
</script>
```

## Complete File Templates

### robots.txt Template
```txt
# Robots.txt for [BUSINESS_NAME]
# https://[DOMAIN]/robots.txt

User-agent: *
Allow: /
Sitemap: https://[DOMAIN]/sitemap.xml
Crawl-delay: 1

# Allow important files
Allow: /*.css$
Allow: /*.js$
Allow: /*.jpg$
Allow: /*.json$

# Block admin areas
Disallow: /admin/
Disallow: /.git/

# Business: [BUSINESS_NAME] - [TYPE] in [LOCATION]
# Address: [FULL_ADDRESS]
# Phone: [PHONE] | Hours: [HOURS]
```

### sitemap.xml Template
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://[DOMAIN]/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://[DOMAIN]/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://[DOMAIN]/services</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://[DOMAIN]/gallery</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>
```

### site.webmanifest Template
```json
{
    "name": "[FULL_BUSINESS_NAME]",
    "short_name": "[SHORT_NAME]",
    "description": "[BRIEF_DESCRIPTION]",
    "start_url": "/",
    "display": "standalone",
    "background_color": "[BACKGROUND_COLOR]",
    "theme_color": "[BRAND_COLOR]",
    "icons": [
        {
            "src": "/favicon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        }
    ],
    "categories": ["[BUSINESS_CATEGORY]", "[INDUSTRY]"]
}
```

## Industry-Specific Templates

### Restaurant/Cafe
- **Schema Type**: "Restaurant"
- **Keywords**: "restaurant", "cafe", "food", "dining", "[cuisine type]"
- **Services**: "Dine-in", "Takeout", "Delivery"

### Retail Store
- **Schema Type**: "Store"  
- **Keywords**: "store", "shop", "retail", "[product category]"
- **Services**: "In-store shopping", "Online ordering"

### Professional Service
- **Schema Type**: "ProfessionalService"
- **Keywords**: "[service type]", "professional", "expert", "consultation"
- **Services**: List specific services offered

## Keyword Research Template

### Primary Keywords (High Priority)
- [Business Name] + [City]
- [Service/Product] + [City]
- [Business Name] + [Neighborhood]

### Secondary Keywords (Medium Priority)  
- [Service] + [Area/Region]
- "Best" + [Service] + [City]
- [Service] + "near" + [Landmark]

### Long-tail Keywords (High Conversion)
- [Service] + "near me"
- [Specific Service] + "in" + [City]
- "Where to" + [Action] + "in" + [Area]

## Page-Specific SEO Templates

### Homepage Template
```html
<title>[BUSINESS] | [MAIN_SERVICE] in [CITY, STATE]</title>
<meta name="description" content="[SERVICE_DESCRIPTION] in [CITY]. [UNIQUE_VALUE]. [KEY_BENEFITS]. Visit [ADDRESS] or call [PHONE]. [CTA]!">
```

### Service Page Template
```html
<title>[SERVICE_NAME] | [BUSINESS] | [CITY] [SERVICE_TYPE]</title>
<meta name="description" content="Professional [SERVICE] in [CITY]. [BENEFITS]. [EXPERIENCE]. Located in [AREA]. [PHONE] | [CTA]!">
```

### Gallery Page Template
```html
<title>[BUSINESS] Photos | [DESCRIPTION] Gallery | [CITY]</title>
<meta name="description" content="Browse [BUSINESS] photos. [VISUAL_HIGHLIGHTS]. See why we're [CITY]'s [SUPERLATIVE]. Perfect for [TARGET_AUDIENCE]!">
```

## Implementation Instructions

### Step 1: Replace All Placeholders
- **[BUSINESS_NAME]** → Your business name
- **[CITY, STATE]** → Your location
- **[LATITUDE, LONGITUDE]** → Your GPS coordinates  
- **[PHONE_NUMBER]** → Your phone number
- **[DOMAIN]** → Your website domain
- **[SERVICE_TYPE]** → Your main service/product

### Step 2: Customize Keywords
1. **Research local competitors**
2. **Use Google Keyword Planner**
3. **Check "People Also Ask" sections**
4. **Analyze local search terms**
5. **Include landmark references**

### Step 3: Test Implementation
- **Google Rich Results Test**
- **PageSpeed Insights**
- **Mobile-Friendly Test**
- **Search Console monitoring**

### Step 4: Monitor & Optimize
- **Track keyword rankings**
- **Monitor organic traffic**
- **Check local pack appearances**
- **Review click-through rates**
- **Update content regularly**

## Common Mistakes to Avoid

❌ **Don't**:
- Use identical meta descriptions across pages
- Stuff keywords unnaturally
- Ignore mobile optimization
- Forget to update coordinates
- Skip structured data testing

✅ **Do**:
- Create unique content for each page
- Write for humans first, search engines second
- Test on mobile devices
- Keep business information consistent
- Monitor performance regularly

## Success Metrics to Track

### SEO KPIs:
- **Organic search traffic**
- **Keyword ranking positions**
- **Local pack appearances**
- **Click-through rates**
- **Google My Business views**

### Local SEO Metrics:
- **"Near me" search rankings**
- **Direction requests**
- **Phone calls from search**
- **Review ratings and quantity**
- **Local citation accuracy**

This master template provides everything needed for comprehensive SEO implementation that can be adapted for any business type or location. 