import BreadCumb from "@/app/Components/Common/BreadCumb";
import Contact from "@/app/Components/Contact/Contact";
import React from "react";

export const metadata = {
  title:
    "Contact Melbourne Air Conditioning Experts | Same-Day Service | 0405 133 761",
  description:
    "★★★★★ Contact Cooling Service Melbourne for expert air conditioning installation, repair & service. Licensed technicians, same-day service, all major brands, all Melbourne suburbs. Emergency service 24/7. Free quotes!",
  keywords: [
    "contact air conditioning Melbourne",
    "air conditioning service contact Melbourne",
    "Melbourne AC repair contact",
    "emergency air conditioning Melbourne",
    "cooling service contact Melbourne",
    "air conditioning technician Melbourne contact",
    "AC installation contact Melbourne",
    "licensed air conditioning Melbourne contact",
    "same day air conditioning Melbourne",
    "24/7 air conditioning Melbourne",
    "air conditioning quote Melbourne",
    "Melbourne suburbs air conditioning",
    "residential air conditioning contact Melbourne",
    "commercial air conditioning contact Melbourne",
    "emergency AC repair Melbourne",
  ].join(", "),
  authors: [{ name: "Cooling Service Melbourne" }],
  creator: "Cooling Service Melbourne",
  publisher: "Cooling Service Melbourne",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title:
      "Contact Melbourne's #1 Air Conditioning Specialists | Same-Day Service | 0405 133 761",
    description:
      "★★★★★ Contact Melbourne's trusted air conditioning specialists. Licensed technicians, same-day service, all major brands, all suburbs. Emergency service available 24/7. Free quotes!",
    url: "https://coolingservicemelbourne.com.au/contact",
    siteName: "Cooling Service Melbourne",
    images: [{ url: "/openGraphImage.jpg", width: 1200, height: 630 }],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Contact Air Conditioning Melbourne | Same-Day Service | 0405 133 761",
    description:
      "★★★★★ Contact Melbourne's trusted AC specialists. Same-day service, licensed technicians, all suburbs. Split system, evaporative, ducted. Emergency 24/7!",
  },
  alternates: {
    canonical: "https://coolingservicemelbourne.com.au/contact",
  },
};

const page = () => {
  return (
    <div>
      <BreadCumb
        bgImg="/assets/img/page_heading_1.jpg"
        Title="Contact Us - Professional Air Conditioning Service Melbourne"
      ></BreadCumb>
      <Contact></Contact>
    </div>
  );
};

export default page;
