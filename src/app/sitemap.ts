import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://coolingservicemelbourne.com.au";
  const currentDate = new Date().toISOString();

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/service`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/service/emergency`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/service-areas`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/service-areas/melbourne-suburbs`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/brands`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  // Service pages - Split System
  const splitSystemPages = [
    {
      url: `${baseUrl}/service/split-system`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/service/split-system/split-system-installation-melbourne`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/service/split-system/split-system-repair-melbourne`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/service/split-system/split-system-service-tune-up-melbourne`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/service/split-system/emergency-split-system-repairs-melbourne`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  // Service pages - Ducted System
  const ductedSystemPages = [
    {
      url: `${baseUrl}/service/ducted-system`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/service/ducted-system/ducted-system-installation-melbourne`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/service/ducted-system/ducted-system-repair-melbourne`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/service/ducted-system/ducted-system-service-maintenance-melbourne`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/service/ducted-system/duct-cleaning-airflow-balancing-melbourne`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/service/ducted-system/emergency-ducted-system-repairs-melbourne`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  // Service pages - Evaporative System
  const evaporativeSystemPages = [
    {
      url: `${baseUrl}/service/evaporative-system`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/service/evaporative-system/evaporative-cooling-installation-melbourne`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/service/evaporative-system/evaporative-system-repair-melbourne`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/service/evaporative-system/seasonal-service-replacement-melbourne`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/service/evaporative-system/water-management-leak-repair-melbourne`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/service/evaporative-system/emergency-evaporative-repairs-melbourne`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  // Melbourne suburbs (major ones for local SEO)
  const melbourneSuburbs = [
    "carlton",
    "fitzroy",
    "richmond",
    "south-yarra",
    "toorak",
    "prahran",
    "chapel-hill",
    "brighton",
    "sandringham",
    "hampton",
    "cheltenham",
    "glen-iris",
    "malvern",
    "armadale",
    "caulfield",
    "bentleigh",
    "moorabbin",
    "frankston",
    "clayton",
    "oakleigh",
    "box-hill",
    "hawthorn",
    "kew",
    "balwyn",
    "camberwell",
    "ashburton",
    "burwood",
    "essendon",
    "moonee-ponds",
    "brunswick",
    "northcote",
    "thornbury",
    "preston",
    "reservoir",
    "bundoora",
    "mill-park",
    "epping",
    "craigieburn",
    "broadmeadows",
    "altona",
    "footscray",
    "yarraville",
    "williamstown",
    "newport",
    "st-kilda",
    "port-melbourne",
    "albert-park",
  ];

  const suburbPages = melbourneSuburbs.map((suburb) => ({
    url: `${baseUrl}/service-areas/${suburb}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Brand pages
  const brandPages = [
    {
      url: `${baseUrl}/brands/daikin`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ];

  return [
    ...mainPages,
    ...splitSystemPages,
    ...ductedSystemPages,
    ...evaporativeSystemPages,
    ...suburbPages,
    ...brandPages,
  ];
}
