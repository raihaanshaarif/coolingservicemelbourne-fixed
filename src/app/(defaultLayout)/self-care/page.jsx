import BreadCumb from "@/app/Components/Common/BreadCumb";
import SelfCareBrands from "@/app/Components/SelfCare/SelfCareBrands";
import React from "react";

export const metadata = {
  title:
    "Self Care - Air Conditioning Error Codes | Troubleshooting Guide Melbourne",
  description:
    "Find error codes and troubleshooting solutions for major air conditioning brands. Daikin, Mitsubishi, Panasonic, Samsung, Fujitsu, Carrier, Toshiba, Kelvinator, Rheem, Braemar, Bonaire error codes with detailed explanations. DIY fixes or call 0405 133 761 for professional help.",
  keywords:
    "air conditioning error codes, AC error codes Melbourne, aircon troubleshooting, split system error codes, daikin error codes, mitsubishi error codes, panasonic error codes, samsung error codes, fujitsu error codes, carrier error codes, toshiba error codes, kelvinator error codes, rheem error codes, braemar error codes, bonaire error codes, air conditioning self help, AC fault codes",
  openGraph: {
    title: "Air Conditioning Error Codes & Troubleshooting Guide Melbourne",
    description:
      "Complete error code database for major AC brands including Daikin, Mitsubishi, Panasonic, Samsung, Fujitsu, Carrier, Toshiba, Kelvinator, Rheem, Braemar, and Bonaire. Find solutions or get professional help from licensed technicians.",
    url: "https://www.coolingservicemelbourne.com.au/self-care",
    images: [
      {
        url: "/assets/img/hero_bg_1.jpg",
        width: 1200,
        height: 630,
        alt: "Air Conditioning Error Codes and Troubleshooting Guide",
      },
    ],
  },
  twitter: {
    title: "AC Error Codes & Troubleshooting | Melbourne Air Conditioning",
    description:
      "Find error codes and solutions for major air conditioning brands. Professional help available 24/7 at 0405 133 761.",
  },
  alternates: {
    canonical: "https://www.coolingservicemelbourne.com.au/self-care",
  },
};

const page = () => {
  return (
    <div>
      <BreadCumb
        bgImg="/assets/img/page_heading_1.jpg"
        Title="Self Care - Error Codes & Troubleshooting"
      />
      <SelfCareBrands />
    </div>
  );
};

export default page;
