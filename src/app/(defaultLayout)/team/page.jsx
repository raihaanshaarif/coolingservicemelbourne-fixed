import BreadCumb from "@/app/Components/Common/BreadCumb";
import Team2 from "@/app/Components/Team/Team2";
import React from "react";

export const metadata = {
  title:
    "Our Team | Licensed Air Conditioning Technicians Melbourne | Cooling Service Melbourne",
  description:
    "Meet our licensed air conditioning technicians in Melbourne. Experienced professionals providing same-day service, emergency repairs, and installations across all Melbourne suburbs.",
  keywords: [
    "air conditioning team Melbourne",
    "licensed AC technicians Melbourne",
    "Melbourne air conditioning experts",
    "professional AC repair team",
    "experienced cooling technicians",
    "same day AC service team",
    "emergency repair technicians Melbourne",
  ].join(", "),
  openGraph: {
    title: "Licensed Air Conditioning Technicians Melbourne | Our Expert Team",
    description:
      "Meet the experienced team of licensed air conditioning technicians at Cooling Service Melbourne. Same-day service and emergency repairs available.",
    url: "https://www.coolingservicemelbourne.com.au/team",
    siteName: "Cooling Service Melbourne",
    images: [{ url: "/openGraphImage.jpg", width: 1200, height: 630 }],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Licensed AC Technicians Melbourne | Our Team",
    description:
      "Experienced air conditioning technicians providing professional service across Melbourne.",
  },
  alternates: {
    canonical: "https://www.coolingservicemelbourne.com.au/team",
  },
};

const page = () => {
  return (
    <div>
      <BreadCumb
        bgImg="/assets/img/page_heading_1.jpg"
        Title="Team"
      ></BreadCumb>
      <Team2></Team2>
    </div>
  );
};

export default page;
