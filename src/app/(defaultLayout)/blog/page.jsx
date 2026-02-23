import Blog1 from "@/app/Components/Blog/Blog1";
import BreadCumb from "@/app/Components/Common/BreadCumb";
import React from "react";

export const metadata = {
  title:
    "Air Conditioning Blog Melbourne | Tips, Maintenance & News | Cooling Service Melbourne",
  description:
    "Stay informed with the latest air conditioning tips, maintenance guides, and industry news from Melbourne's leading AC specialists. Expert advice on split systems, ducted cooling, and evaporative systems.",
  keywords: [
    "air conditioning blog Melbourne",
    "AC maintenance tips",
    "split system advice",
    "ducted cooling guide",
    "evaporative cooling tips",
    "air conditioning news Melbourne",
    "cooling system maintenance",
    "AC repair tips",
    "Melbourne air conditioning experts",
  ].join(", "),
  openGraph: {
    title: "Air Conditioning Blog Melbourne | Expert Tips & Maintenance Guides",
    description:
      "Get expert air conditioning advice from Melbourne's top technicians. Tips on maintenance, repairs, and choosing the right system for your home.",
    url: "https://www.coolingservicemelbourne.com.au/blog",
    siteName: "Cooling Service Melbourne",
    images: [{ url: "/openGraphImage.jpg", width: 1200, height: 630 }],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Air Conditioning Blog Melbourne | Tips & Maintenance",
    description:
      "Expert AC tips and maintenance guides from Melbourne's leading cooling specialists.",
  },
  alternates: {
    canonical: "https://www.coolingservicemelbourne.com.au/blog",
  },
};

const page = () => {
  return (
    <div>
      <BreadCumb
        bgImg="/assets/img/page_heading_1.jpg"
        Title="Blog"
      ></BreadCumb>
      <Blog1></Blog1>
    </div>
  );
};

export default page;
