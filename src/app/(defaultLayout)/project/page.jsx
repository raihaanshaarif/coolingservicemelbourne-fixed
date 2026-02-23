import BreadCumb from "@/app/Components/Common/BreadCumb";
import Project3 from "@/app/Components/Project/Project3";
import React from "react";

export const metadata = {
  title:
    "Air Conditioning Projects Melbourne | Installation Case Studies | Cooling Service Melbourne",
  description:
    "View our air conditioning installation projects across Melbourne. Case studies of split systems, ducted cooling, and evaporative systems. Licensed technicians with 5-year warranty.",
  keywords: [
    "air conditioning projects Melbourne",
    "AC installation case studies",
    "split system projects Melbourne",
    "ducted cooling installations",
    "evaporative system projects",
    "Melbourne AC case studies",
    "cooling system installations",
    "professional AC projects",
  ].join(", "),
  openGraph: {
    title: "Air Conditioning Projects Melbourne | Installation Case Studies",
    description:
      "Explore our successful air conditioning installation projects across Melbourne. Professional installations with warranty.",
    url: "https://www.coolingservicemelbourne.com.au/project",
    siteName: "Cooling Service Melbourne",
    images: [{ url: "/openGraphImage.jpg", width: 1200, height: 630 }],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AC Projects Melbourne | Installation Case Studies",
    description:
      "View professional air conditioning installation projects and case studies in Melbourne.",
  },
  alternates: {
    canonical: "https://www.coolingservicemelbourne.com.au/project",
  },
};

const page = () => {
  return (
    <div>
      <BreadCumb
        bgImg="/assets/img/page_heading_1.jpg"
        Title="Project"
      ></BreadCumb>
      <Project3></Project3>
    </div>
  );
};

export default page;
