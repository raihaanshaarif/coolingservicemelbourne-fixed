import React from "react";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";
import About1 from "../Components/About/About1";
import Services1 from "../Components/Services/Services1";
import Choose1 from "../Components/Choose/Choose1";
import BeforeAfter from "../Components/BeforeAfter/BeforeAfter";
import Project1 from "../Components/Project/Project1";
import Contact1 from "../Components/ContactInfo/Contact1";
import Testimonial1 from "../Components/Testimonial/Testimonial1";
import Pricing1 from "../Components/Pricing/Pricing1";
import Process from "../Components/Process/Process";
import Blog3 from "../Components/Blog/Blog3";

export const metadata = {
  title:
    "Air Conditioning Melbourne | Same-Day Repair & Installation | 0405 133 761",
  description:
    "★★★★★ Melbourne's #1 air conditioning specialists. Same-day split system repair, evaporative cooling, ducted AC installation. Licensed technicians, all suburbs, 24/7 emergency service. Free quotes!",
  keywords: [
    "air conditioning Melbourne",
    "split system repair Melbourne",
    "evaporative cooling Melbourne",
    "ducted air conditioning Melbourne",
    "same day aircon repair Melbourne",
    "emergency air conditioning Melbourne",
    "air conditioning installation Melbourne",
    "licensed air conditioning technician Melbourne",
    "air conditioning service Melbourne",
    "cooling system repair Melbourne",
    "Melbourne air conditioning quotes",
    "24/7 air conditioning Melbourne",
    "residential air conditioning Melbourne",
    "commercial air conditioning Melbourne",
  ].join(", "),
  authors: [{ name: "Cooling Service Melbourne" }],
  creator: "Cooling Service Melbourne",
  publisher: "Cooling Service Melbourne",
  openGraph: {
    title:
      "Melbourne's #1 Air Conditioning Specialists | Same-Day Service | 0405 133 761",
    description:
      "★★★★★ Rated Melbourne air conditioning experts. Same-day split system repair, evaporative cooling, ducted AC. Licensed technicians, all suburbs, 24/7 emergency service. Free quotes!",
    url: "https://coolingservicemelbourne.com.au",
    siteName: "Cooling Service Melbourne",
    images: [
      {
        url: "/openGraphImage.jpg",
        width: 1200,
        height: 630,
        alt: "Cooling Service Melbourne - Same Day Air Conditioning Repair & Installation",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Air Conditioning Melbourne | Same-Day Repair & Installation | 0405 133 761",
    description:
      "★★★★★ Melbourne's trusted AC specialists. Same-day service, licensed technicians, all suburbs. Split system, evaporative, ducted. Emergency repairs 24/7!",
    images: ["/openGraphImage.jpg"],
  },
  alternates: {
    canonical: "https://coolingservicemelbourne.com.au",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

const page = () => {
  return (
    <div>
      <HeroBanner1></HeroBanner1>
      <About1
        img1="/assets/img/about_img_1.jpg"
        img2="/assets/img/about_img_2.jpg"
        img3="/assets/img/about_img_3.jpg"
        expNumber="15"
        expYers="Years"
        expTitle="Experience"
        number="0405 133 761"
        subTitle="About Us"
        Title="Same‑Day Cooling Repairs, Trusted Results"
        Content=" Cooling Service Melbourne provides fast, professional repairs, installations and maintenance for split systems, evaporative cooling and ducted refrigeration across metro Melbourne."
        feature1="Split System Servicing & Repair"
        feature2="Ducted & Evaporative Repair"
        listItem={[
          "Same‑day callouts across metro Melbourne",
          "Comprehensive diagnostic checks with clear quotes",
          "Licensed, local technicians you can trust",
        ]}
        avatar="/assets/img/avatar_1.png"
        name="Ronald Richards"
        designation="Founder CEO"
      ></About1>
      <Services1></Services1>
      <Choose1
        img1="/assets/img/feature_img_1.jpg"
        content="Don't let a faulty air conditioning system ruin your comfort. Strange noises, poor cooling, or high energy bills are clear signs your cooling system needs professional attention. Call Us for immediate assistance."
        btnName="Call Now"
        btnUrl="tel:0405133761"
        img2="/assets/img/feature_img_2.jpg"
        img3="/assets/img/feature_img_3.jpg"
      ></Choose1>

      <Process></Process>

      <Testimonial1
        subtitle="Customer Reviews"
        title="What Melbourne customers say <br> About Our Service"
        bgImg="/assets/img/testimonial_bg_1.jpg"
      ></Testimonial1>

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
