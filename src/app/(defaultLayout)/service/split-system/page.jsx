import BreadCumb from "@/app/Components/Common/BreadCumb";
import SplitSystemServices from "@/app/Components/Services/SplitSystemServices";
import React from "react";

export const metadata = {
  title:
    "Split System Air Conditioning Melbourne | Installation, Repair & Service | Same-Day",
  description:
    "★★★★★ Expert split system services Melbourne. Same-day installation, repair & maintenance. Licensed technicians, all major brands, competitive prices. Free quotes! Call 0405 133 761",
  keywords: [
    "split system Melbourne",
    "split system installation Melbourne",
    "split system repair Melbourne",
    "split system service Melbourne",
    "air conditioning split system Melbourne",
    "same day split system repair",
    "emergency split system Melbourne",
    "split system maintenance Melbourne",
    "ducted split system Melbourne",
    "multi split system Melbourne",
    "reverse cycle split system Melbourne",
    "split system quote Melbourne",
    "licensed split system technician Melbourne",
    "residential split system Melbourne",
    "commercial split system Melbourne",
  ].join(", "),
  authors: [{ name: "Cooling Service Melbourne" }],
  creator: "Cooling Service Melbourne",
  publisher: "Cooling Service Melbourne",
  openGraph: {
    title:
      "Split System Air Conditioning Melbourne | Same-Day Installation & Repair",
    description:
      "★★★★★ Melbourne's split system specialists. Same-day installation, repair & maintenance. Licensed technicians, all major brands, competitive prices. Free quotes!",
    url: "https://www.coolingservicemelbourne.com.au/service/split-system",
    siteName: "Cooling Service Melbourne",
    images: ["/assets/img/service_banner.jpg"],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Split System Melbourne | Same-Day Installation & Repair | 0405 133 761",
    description:
      "★★★★★ Expert split system services Melbourne. Same-day service, licensed technicians, all brands. Installation, repair & maintenance. Free quotes!",
  },
  alternates: {
    canonical:
      "https://www.coolingservicemelbourne.com.au/service/split-system",
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
        Title="Split System Services Melbourne"
      />
      <SplitSystemServices />
    </div>
  );
};

export default page;
