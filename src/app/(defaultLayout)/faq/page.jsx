import BreadCumb from "@/app/Components/Common/BreadCumb";
import React from "react";

export const metadata = {
  title:
    "Air Conditioning FAQ Melbourne | Expert Answers | Cooling Service Melbourne",
  description:
    "★★★★★ Get expert answers to all your air conditioning questions. Split system, evaporative cooling, ducted AC installation, repair costs, maintenance tips & more. Melbourne's trusted AC specialists.",
  keywords: [
    "air conditioning FAQ Melbourne",
    "air conditioning questions Melbourne",
    "split system cost Melbourne",
    "air conditioning repair cost Melbourne",
    "how much does air conditioning cost Melbourne",
    "best air conditioning Melbourne",
    "air conditioning maintenance Melbourne",
    "when to service air conditioning Melbourne",
    "air conditioning problems Melbourne",
    "energy efficient air conditioning Melbourne",
    "air conditioning installation cost Melbourne",
    "evaporative cooling vs split system Melbourne",
    "ducted air conditioning cost Melbourne",
    "emergency air conditioning Melbourne",
    "air conditioning warranty Melbourne",
  ].join(", "),
  authors: [{ name: "Cooling Service Melbourne" }],
  creator: "Cooling Service Melbourne",
  publisher: "Cooling Service Melbourne",
  openGraph: {
    title: "Air Conditioning FAQ Melbourne | Expert Answers & Tips",
    description:
      "★★★★★ Get expert answers to all your air conditioning questions. Costs, installation, maintenance, repairs & more. Melbourne's trusted AC specialists.",
    url: "https://www.coolingservicemelbourne.com.au/faq",
    siteName: "Cooling Service Melbourne",
    images: [{ url: "/openGraphImage.jpg", width: 1200, height: 630 }],
    locale: "en_AU",
    type: "website",
  },
  alternates: {
    canonical: "https://www.coolingservicemelbourne.com.au/faq",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const FAQPage = () => {
  const faqData = [
    {
      question:
        "How much does air conditioning installation cost in Melbourne?",
      answer:
        "Air conditioning installation costs in Melbourne vary depending on the system type and size. Split systems typically range from $800-$2,500 installed, while ducted systems range from $5,000-$15,000. Evaporative cooling systems are generally more affordable at $1,500-$5,000. We provide free, no-obligation quotes for all Melbourne suburbs.",
    },
    {
      question:
        "What's the best air conditioning system for Melbourne's climate?",
      answer:
        "Melbourne's variable climate suits different systems depending on your needs. Split systems are ideal for year-round comfort with heating and cooling. Evaporative cooling is excellent for dry summer days and more energy-efficient. Ducted systems provide whole-home comfort. Our experts assess your home and recommend the best solution.",
    },
    {
      question: "How often should I service my air conditioning in Melbourne?",
      answer:
        "We recommend servicing your air conditioning annually before peak summer/winter seasons. Split systems should be cleaned every 6 months, evaporative coolers need seasonal maintenance, and ducted systems require annual professional service. Regular maintenance prevents breakdowns and maintains efficiency.",
    },
    {
      question: "Do you provide same-day air conditioning repair in Melbourne?",
      answer:
        "Yes! We offer same-day air conditioning repair across all Melbourne suburbs. Our licensed technicians carry common parts and can fix most issues on the first visit. We also provide 24/7 emergency service for urgent cooling and heating repairs.",
    },
    {
      question: "What air conditioning brands do you service in Melbourne?",
      answer:
        "We service all major air conditioning brands including Daikin, Mitsubishi, Fujitsu, Panasonic, LG, Samsung, Carrier, Trane, and more. Our technicians are trained on all systems and carry genuine parts for most brands.",
    },
    {
      question:
        "How long does air conditioning installation take in Melbourne?",
      answer:
        "Installation times vary by system type. Split systems typically take 3-6 hours, evaporative coolers take 4-8 hours, and ducted systems take 1-2 days depending on complexity. We'll provide an accurate timeframe during your free consultation.",
    },
    {
      question: "What areas of Melbourne do you service?",
      answer:
        "We service all Melbourne metropolitan areas and suburbs including CBD, inner suburbs, eastern suburbs, western suburbs, northern suburbs, southern suburbs, and Mornington Peninsula. Our technicians are available across greater Melbourne for same-day service.",
    },
    {
      question: "Do you offer emergency air conditioning repair in Melbourne?",
      answer:
        "Yes, we provide 24/7 emergency air conditioning repair throughout Melbourne. Whether your system breaks down on a hot summer day or cold winter night, our emergency technicians are available to restore your comfort quickly.",
    },
    {
      question: "What's included in your air conditioning service warranty?",
      answer:
        "We provide comprehensive warranties on all work. New installations include manufacturer warranty plus our workmanship guarantee. Repairs come with parts and labor warranty. All work is performed by licensed technicians and meets Australian standards.",
    },
    {
      question:
        "Can you help with energy-efficient air conditioning in Melbourne?",
      answer:
        "Absolutely! We specialize in energy-efficient air conditioning solutions. We'll recommend systems with high energy star ratings, optimal sizing for your space, and provide maintenance tips to maximize efficiency and minimize running costs.",
    },
  ];

  return (
    <div>
      <BreadCumb
        bgImg="/assets/img/page_heading_1.jpg"
        Title="Air Conditioning FAQ - Expert Answers Melbourne"
      />

      <section className="cs_height_120 cs_height_lg_80"></section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cs_section_heading cs_style_1 text-center">
              <div className="cs_section_heading_in">
                <h3 className="cs_fs_20 cs_accent_color wow fadeInUp">
                  Frequently Asked Questions
                </h3>
                <h2
                  className="cs_fs_48 cs_fs_lg_36 wow fadeInUp"
                  data-wow-delay="0.15s"
                >
                  Expert Answers to Your Air Conditioning Questions
                </h2>
                <div className="cs_height_30 cs_height_lg_20"></div>
                <p className="cs_fs_16 wow fadeInUp" data-wow-delay="0.2s">
                  Get instant answers from Melbourne&rsquo;s trusted air
                  conditioning specialists. From installation costs to
                  maintenance tips, we&rsquo;ve got you covered.
                </p>
              </div>
            </div>
            <div className="cs_height_50 cs_height_lg_40"></div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="cs_accordian cs_style_1">
              {faqData.map((faq, index) => (
                <div key={index} className="cs_accordian_item">
                  <div
                    className="cs_accordian_header"
                    data-bs-toggle="collapse"
                    data-bs-target={`#faq${index}`}
                  >
                    <h3 className="cs_accordian_title cs_fs_18 cs_medium mb-0">
                      {faq.question}
                    </h3>
                    <span className="cs_accordian_toggle cs_accent_color">
                      <i className="bi bi-chevron-down"></i>
                    </span>
                  </div>
                  <div
                    className="cs_accordian_body collapse"
                    id={`faq${index}`}
                  >
                    <p className="cs_accordian_text">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="cs_height_50 cs_height_lg_40"></div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="cs_cta_section cs_accent_bg cs_radius_15">
              <div className="cs_height_50 cs_height_lg_40"></div>
              <h3 className="cs_fs_32 cs_white_color mb-3">
                Still Have Questions?
              </h3>
              <p className="cs_white_color cs_fs_16 mb-4">
                Our expert technicians are here to help with personalized advice
                for your Melbourne home or business.
              </p>
              <div className="cs_btn_group">
                <a
                  href="tel:0405133761"
                  className="cs_btn cs_style_1 cs_white_bg cs_accent_color"
                >
                  <span>Call Now: 0405 133 761</span>
                </a>
                <a href="/contact" className="cs_btn cs_style_2 cs_white_color">
                  <span>Get Free Quote</span>
                </a>
              </div>
              <div className="cs_height_50 cs_height_lg_40"></div>
            </div>
          </div>
        </div>
      </div>
      <section className="cs_height_120 cs_height_lg_80"></section>
    </div>
  );
};

export default FAQPage;
