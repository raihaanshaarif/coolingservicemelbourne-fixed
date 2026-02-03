import BreadCumb from "@/app/Components/Common/BreadCumb";
import Services3 from "@/app/Components/Services/Services3";
import React from "react";

export const metadata = {
  title:
    "Expert Air Conditioning Services Melbourne | Split System, Ducted & Evaporative",
  description:
    "Professional air conditioning services across Melbourne. Split system installation & repair, ducted refrigeration, evaporative cooling, emergency repairs. Licensed technicians, same-day service, 5-year warranty. Call 0405 133 761 for free quote!",
  keywords:
    "air conditioning services Melbourne, split system installation Melbourne, ducted air conditioning Melbourne, evaporative cooling services, emergency aircon repair Melbourne, commercial air conditioning Melbourne, residential AC services Melbourne, licensed air conditioning technician Melbourne",
  openGraph: {
    title:
      "Professional Air Conditioning Services Melbourne | Licensed Technicians | Same-Day Service",
    description:
      "★★★★★ Complete air conditioning services across Melbourne. Split system, ducted, evaporative cooling. Installation, repair, maintenance. Emergency service 24/7. Licensed technicians, 5-year warranty!",
    url: "https://www.coolingservicemelbourne.com.au/service",
    images: [
      {
        url: "/assets/img/portfolio_img_1.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Air Conditioning Services Melbourne - Licensed Technicians",
      },
    ],
  },
  twitter: {
    title:
      "Expert Air Conditioning Services Melbourne | Same-Day Installation & Repair",
    description:
      "Professional AC services across Melbourne. Split system, ducted, evaporative. Licensed technicians, emergency repairs, free quotes. Call 0405 133 761!",
  },
  alternates: {
    canonical: "https://www.coolingservicemelbourne.com.au/service",
  },
};

const page = () => {
  return (
    <div>
      <BreadCumb
        bgImg="/assets/img/page_heading_1.jpg"
        Title="Professional Air Conditioning Services Melbourne"
      ></BreadCumb>
      <Services3></Services3>
    </div>
  );
};

export default page;
