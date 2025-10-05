"use client";

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://coolingservicemelbourne.com.au/#organization",
    name: "Cooling Service Melbourne",
    alternateName: "Air Conditioning Melbourne",
    description:
      "Melbourne's premier air conditioning specialists providing same-day repair, installation and maintenance services for split systems, evaporative cooling and ducted refrigeration across all Melbourne suburbs.",
    url: "https://coolingservicemelbourne.com.au",
    telephone: "+61405133761",
    email: "servicefirsthampton@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Melbourne",
      addressRegion: "VIC",
      addressCountry: "AU",
      postalCode: "3000",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -37.8136,
      longitude: 144.9631,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Melbourne",
        sameAs: "https://en.wikipedia.org/wiki/Melbourne",
      },
      {
        "@type": "State",
        name: "Victoria",
        sameAs: "https://en.wikipedia.org/wiki/Victoria_(Australia)",
      },
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: -37.8136,
        longitude: 144.9631,
      },
      geoRadius: "50000",
    },
    openingHours: ["Mo-Fr 07:00-18:00", "Sa 08:00-16:00", "Su Emergency Only"],
    priceRange: "$$",
    currenciesAccepted: "AUD",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    logo: {
      "@type": "ImageObject",
      url: "https://coolingservicemelbourne.com.au/assets/img/logo.svg",
      width: 300,
      height: 100,
    },
    image: [
      {
        "@type": "ImageObject",
        url: "https://coolingservicemelbourne.com.au/openGraphImage.jpg",
        width: 1200,
        height: 630,
      },
    ],
    sameAs: [
      "https://www.facebook.com/coolingservicemelbourne",
      "https://www.linkedin.com/company/coolingservicemelbourne",
      "https://twitter.com/coolingservicemelb",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Air Conditioning Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Split System Installation",
            description:
              "Professional split system air conditioning installation across Melbourne",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Split System Repair",
            description:
              "Same-day split system repair and maintenance services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Evaporative Cooling",
            description:
              "Evaporative cooling system installation, repair and maintenance",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ducted Air Conditioning",
            description:
              "Ducted refrigeration system installation and repair services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Emergency Repairs",
            description:
              "24/7 emergency air conditioning repair services across Melbourne",
          },
        },
      ],
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Sarah Johnson",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Excellent same-day service! They fixed our split system quickly and professionally. Highly recommend for Melbourne air conditioning repairs.",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "247",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Air Conditioning Services",
    provider: {
      "@id": "https://coolingservicemelbourne.com.au/#organization",
    },
    areaServed: {
      "@type": "City",
      name: "Melbourne",
      containedInPlace: {
        "@type": "State",
        name: "Victoria",
        containedInPlace: {
          "@type": "Country",
          name: "Australia",
        },
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Melbourne Air Conditioning Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Split System Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Split System Installation Melbourne",
                url: "https://coolingservicemelbourne.com.au/service/split-system/split-system-installation-melbourne",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Split System Repair Melbourne",
                url: "https://coolingservicemelbourne.com.au/service/split-system/split-system-repair-melbourne",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Evaporative Cooling Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Evaporative Cooling Installation Melbourne",
                url: "https://coolingservicemelbourne.com.au/service/evaporative-system/evaporative-cooling-installation-melbourne",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Evaporative System Repair Melbourne",
                url: "https://coolingservicemelbourne.com.au/service/evaporative-system/evaporative-system-repair-melbourne",
              },
            },
          ],
        },
      ],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://coolingservicemelbourne.com.au",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://coolingservicemelbourne.com.au/service",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
