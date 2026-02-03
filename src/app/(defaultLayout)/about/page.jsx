import About1 from "@/app/Components/About/About1";
import BreadCumb from "@/app/Components/Common/BreadCumb";
import Contact1 from "@/app/Components/ContactInfo/Contact1";
import Services1 from "@/app/Components/Services/Services1";
import React from "react";

export const metadata = {
  title:
    "About Cooling Service Melbourne | 15+ Years Licensed Air Conditioning Specialists",
  description:
    "Meet Melbourne's most trusted air conditioning specialists. 15+ years experience, licensed technicians, same-day service across all Melbourne suburbs. Specializing in split systems, evaporative cooling & ducted refrigeration. 1,200+ happy customers. Call 0405 133 761!",
  keywords:
    "about cooling service Melbourne, licensed air conditioning technician Melbourne, Melbourne AC specialists, experienced cooling technicians Melbourne, professional air conditioning company Melbourne, local air conditioning business Melbourne, trusted AC repair Melbourne, established cooling business Melbourne",
  openGraph: {
    title:
      "About Cooling Service Melbourne | 15+ Years Trusted Air Conditioning Specialists",
    description:
      "Melbourne's most trusted air conditioning company. 15+ years experience, licensed technicians, same-day service. 1,200+ satisfied customers across all Melbourne suburbs!",
    url: "https://www.coolingservicemelbourne.com.au/about",
    images: [
      {
        url: "/assets/img/about_img_1.jpg",
        width: 1200,
        height: 630,
        alt: "Cooling Service Melbourne Team - Licensed Air Conditioning Technicians",
      },
    ],
  },
  twitter: {
    title:
      "About Cooling Service Melbourne | Trusted AC Specialists | 15+ Years Experience",
    description:
      "Melbourne's trusted air conditioning specialists. Licensed technicians, same-day service, 1,200+ happy customers. All suburbs covered. Call 0405 133 761!",
  },
  alternates: {
    canonical: "https://www.coolingservicemelbourne.com.au/about",
  },
};

const page = () => {
  return (
    <div>
      <BreadCumb
        bgImg="/assets/img/page_heading_1.jpg"
        Title="About Us"
      ></BreadCumb>
      <About1
        img1="/assets/img/about_img_1.jpg"
        img2="/assets/img/about_img_2.jpg"
        img3="/assets/img/about_img_3.jpg"
        expNumber="15"
        expYers="Years"
        expTitle="Experience"
        number="0405 133 761"
        subTitle="About Cooling Service Melbourne"
        Title="Melbourne's Most Trusted Cooling Specialists"
        Content="With over 15 years of experience, Cooling Service Melbourne is your trusted partner for all air conditioning needs. We specialize in professional installation, repair, and maintenance of split systems, evaporative coolers, and ducted refrigeration systems across Melbourne's metro area. Our licensed technicians deliver reliable, same-day service with transparent pricing and quality guarantees."
        feature1="Emergency 24/7 Service"
        feature2="All Cooling System Types"
        listItem={[
          "Same-day emergency repairs across all Melbourne suburbs",
          "Licensed technicians with 15+ years experience",
          "Transparent quotes with no hidden fees",
          "Comprehensive warranty on all work completed",
          "Specializing in split systems, evaporative & ducted cooling",
          "Energy-efficient solutions for optimal performance",
        ]}
        avatar="/assets/img/avatar_1.png"
        name="Michael Thompson"
        designation="Lead Technician & Owner"
      ></About1>
      <Services1></Services1>

      {/* <Brand1></Brand1> */}
      <Contact1
        Title="Get In Touch Today"
        subTitle="Need urgent cooling repairs or want to book a service? Contact Cooling Service Melbourne for professional air conditioning solutions."
        address="Servicing All Melbourne <br/>Metro Areas & Suburbs"
        email="servicefirsthampton@gmail.com <br/>Quick Response Guaranteed"
        number="0405 133 761 <br/>24/7 Emergency Service"
        clientNumber="1,200+"
        img="/assets/img/contact_img_1.jpg"
        client="Happy Customers"
        subtitle2="Contact us"
        title2="Book Your Service Today"
      ></Contact1>
    </div>
  );
};

export default page;
