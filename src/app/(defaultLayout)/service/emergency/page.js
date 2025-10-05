import BreadCumb from "@/app/Components/Common/BreadCumb";
import EmergencyServices from "@/app/Components/EmergencyServices";
import React from "react";

export const metadata = {
  title:
    "🚨 24/7 Emergency Air Conditioning Repair Melbourne | Same-Day Service | 0405 133 761",
  description:
    "URGENT air conditioning repairs across Melbourne! 24/7 emergency service for split system, ducted & evaporative cooling. Licensed technicians arrive fast. No call-out fees for repairs. Call 0405 133 761 NOW for immediate assistance!",
  keywords:
    "emergency air conditioning repair Melbourne, 24/7 aircon repair Melbourne, urgent split system repair, emergency ducted air conditioning Melbourne, emergency evaporative cooling repair, same day air conditioning repair Melbourne, after hours aircon repair Melbourne, weekend air conditioning repair, emergency cooling service Melbourne, urgent AC repair Melbourne",
  openGraph: {
    title:
      "🚨 24/7 Emergency Air Conditioning Repair Melbourne | Call 0405 133 761 NOW!",
    description:
      "URGENT cooling repairs needed? Our licensed technicians are available 24/7 across Melbourne for emergency split system, ducted & evaporative repairs. Same-day service guaranteed!",
    url: "https://coolingservicemelbourne.com.au/service/emergency",
    images: [
      {
        url: "/assets/img/hero_bg_1.jpg",
        width: 1200,
        height: 630,
        alt: "24/7 Emergency Air Conditioning Repair Melbourne - Licensed Technicians",
      },
    ],
  },
  twitter: {
    title:
      "🚨 Emergency Air Conditioning Repair Melbourne 24/7 | Call 0405 133 761",
    description:
      "Urgent aircon repair needed? 24/7 emergency service across Melbourne. Same-day repairs for split system, ducted, evaporative. Call NOW!",
  },
  alternates: {
    canonical: "https://coolingservicemelbourne.com.au/service/emergency",
  },
};

export default function EmergencyServicesPage() {
  return (
    <div>
      <BreadCumb
        bgImg="/assets/img/page_heading_1.jpg"
        Title="Emergency Cooling Services Melbourne"
      />
      <EmergencyServices />
    </div>
  );
}
