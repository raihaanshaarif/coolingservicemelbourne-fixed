import BreadCumb from "@/app/Components/Common/BreadCumb";
import EvaporativeSystemServices from "@/app/Components/Services/EvaporativeSystemServices";
import React from "react";

export const metadata = {
  title:
    "Evaporative Cooling Melbourne | Installation, Repair & Maintenance | Same-Day Service",
  description:
    "★★★★★ Melbourne's evaporative cooling experts. Same-day installation, repair & maintenance. Water management, cooling pad replacement, seasonal service. Licensed technicians. Free quotes! 0405 133 761",
  keywords: [
    "evaporative cooling Melbourne",
    "evaporative cooler Melbourne",
    "evaporative air conditioning Melbourne",
    "evaporative cooling installation Melbourne",
    "evaporative cooling repair Melbourne",
    "evaporative cooling service Melbourne",
    "cooling pad replacement Melbourne",
    "water management evaporative Melbourne",
    "seasonal evaporative service Melbourne",
    "emergency evaporative repair Melbourne",
    "evaporative cooling maintenance Melbourne",
    "ducted evaporative Melbourne",
    "portable evaporative cooler Melbourne",
    "residential evaporative cooling Melbourne",
    "commercial evaporative cooling Melbourne",
  ].join(", "),
  authors: [{ name: "Cooling Service Melbourne" }],
  creator: "Cooling Service Melbourne",
  publisher: "Cooling Service Melbourne",
  openGraph: {
    title: "Evaporative Cooling Melbourne | Same-Day Installation & Repair",
    description:
      "★★★★★ Melbourne's evaporative cooling specialists. Same-day installation, repair & maintenance. Water management, cooling pads, seasonal service. Licensed technicians, free quotes!",
    url: "https://coolingservicemelbourne.com.au/service/evaporative-system",
    siteName: "Cooling Service Melbourne",
    images: ["/assets/img/service_banner.jpg"],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evaporative Cooling Melbourne | Same-Day Service | 0405 133 761",
    description:
      "★★★★★ Expert evaporative cooling services Melbourne. Installation, repair, maintenance & water management. Same-day service, free quotes!",
  },
  alternates: {
    canonical:
      "https://coolingservicemelbourne.com.au/service/evaporative-system",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const page = () => {
  return (
    <div>
      <BreadCumb
        bgImg="/assets/img/page_heading_1.jpg"
        Title="Evaporative System Services Melbourne"
      />
      <EvaporativeSystemServices />
    </div>
  );
};

export default page;
