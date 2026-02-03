import BreadCumb from "@/app/Components/Common/BreadCumb";
import Link from "next/link";

export const metadata = {
  title:
    "Kelvinator Air Conditioning Melbourne | Installation, Repair & Service | 0405 133 761",
  description:
    "Expert Kelvinator air conditioning installation, repair & service in Melbourne. Australian heritage brand, reliable cooling solutions. Licensed technicians, same-day service. Call 0405 133 761.",
  keywords: [
    "Kelvinator air conditioning Melbourne",
    "Kelvinator installation Melbourne",
    "Kelvinator repair Melbourne",
    "Kelvinator service Melbourne",
    "Kelvinator split system Melbourne",
    "Kelvinator ducted Melbourne",
    "Kelvinator technician Melbourne",
    "Kelvinator warranty Melbourne",
    "Australian air conditioning Melbourne",
    "Kelvinator inverter Melbourne",
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
      "Kelvinator Air Conditioning Melbourne | Professional Installation & Service",
    description:
      "Expert Kelvinator air conditioning services in Melbourne. Installation, repair, maintenance. Licensed technicians, same-day service available.",
    url: "https://www.coolingservicemelbourne.com.au/brands/kelvinator",
    siteName: "Cooling Service Melbourne",
    images: [{ url: "/openGraphImage.jpg", width: 800, height: 600 }],
    locale: "en_AU",
    type: "website",
  },
  alternates: {
    canonical: "https://www.coolingservicemelbourne.com.au/brands/kelvinator",
  },
};

const KelvinatorPage = () => {
  return (
    <div>
      <BreadCumb
        bgImg="/assets/img/page_heading_1.jpg"
        Title="Kelvinator Air Conditioning Melbourne"
      />

      <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="cs_brand_content">
                {/* Brand Header */}
                <div className="cs_brand_header_large cs_white_bg cs_radius_15 p-4 cs_shadow_1 cs_mb_40">
                  <div className="row align-items-center">
                    <div className="col-md-3">
                      <div
                        className="cs_brand_logo_large cs_accent_bg_light cs_radius_10 d-flex align-items-center justify-content-center p-3"
                        style={{ height: "120px" }}
                      >
                        <span className="cs_fs_20 cs_bold cs_heading_color">
                          KELVINATOR
                        </span>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <h1 className="cs_fs_36 cs_semibold cs_heading_color cs_mb_15">
                        Kelvinator Air Conditioning Melbourne
                      </h1>
                      <p className="cs_fs_18 cs_accent_color cs_mb_15 cs_semibold">
                        Expert Kelvinator Installation, Repair & Service
                      </p>
                      <p className="cs_fs_16 cs_mb_20 line-height-1-7">
                        As certified Kelvinator specialists in Melbourne, we
                        provide professional installation, emergency repairs,
                        and comprehensive maintenance for all Kelvinator air
                        conditioning systems. Australian heritage brand,
                        reliable cooling, genuine parts, warranty compliance.
                      </p>
                      <a
                        href="tel:0405133761"
                        className="cs_btn cs_style_1 cs_accent_bg cs_white_color cs_fs_16 cs_rounded_5 cs_pl_25 cs_pr_25 cs_pt_12 cs_pb_12 text-decoration-none"
                      >
                        <i className="bi bi-telephone-fill me-2"></i>
                        Call for Kelvinator Service: 0405 133 761
                      </a>
                    </div>
                  </div>
                </div>

                {/* Our Kelvinator Expertise */}
                <div className="cs_brand_features cs_mb_50">
                  <h2 className="cs_fs_32 cs_semibold cs_heading_color cs_mb_30">
                    Why Choose Our Kelvinator Services?
                  </h2>

                  <div className="row cs_row_gap_30 cs_gap_y_30">
                    <div className="col-md-6">
                      <div className="cs_feature_item cs_white_bg cs_radius_10 p-4 cs_shadow_1">
                        <div
                          className="cs_feature_icon cs_accent_bg cs_white_color cs_radius_50 d-inline-flex align-items-center justify-content-center cs_mb_20"
                          style={{ width: "60px", height: "60px" }}
                        >
                          <i className="bi bi-house-heart cs_fs_24"></i>
                        </div>
                        <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                          Australian Heritage Specialists
                        </h3>
                        <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                          Our technicians understand Kelvinator&apos;s
                          Australian heritage and engineering, providing expert
                          service for this trusted brand that has been cooling
                          Australian homes for decades.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="cs_feature_item cs_white_bg cs_radius_10 p-4 cs_shadow_1">
                        <div
                          className="cs_feature_icon cs_accent_bg cs_white_color cs_radius_50 d-inline-flex align-items-center justify-content-center cs_mb_20"
                          style={{ width: "60px", height: "60px" }}
                        >
                          <i className="bi bi-coin cs_fs_24"></i>
                        </div>
                        <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                          Budget-Friendly Solutions
                        </h3>
                        <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                          We provide expert service for Kelvinator&apos;s
                          value-oriented air conditioning systems, offering
                          reliable cooling solutions that won&apos;t break the
                          budget.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="cs_feature_item cs_white_bg cs_radius_10 p-4 cs_shadow_1">
                        <div
                          className="cs_feature_icon cs_accent_bg cs_white_color cs_radius_50 d-inline-flex align-items-center justify-content-center cs_mb_20"
                          style={{ width: "60px", height: "60px" }}
                        >
                          <i className="bi bi-tools cs_fs_24"></i>
                        </div>
                        <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                          Reliable Performance
                        </h3>
                        <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                          We install and maintain Kelvinator systems for
                          consistent, reliable cooling performance designed to
                          handle Melbourne&apos;s climate variations with
                          dependable operation.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="cs_feature_item cs_white_bg cs_radius_10 p-4 cs_shadow_1">
                        <div
                          className="cs_feature_icon cs_accent_bg cs_white_color cs_radius_50 d-inline-flex align-items-center justify-content-center cs_mb_20"
                          style={{ width: "60px", height: "60px" }}
                        >
                          <i className="bi bi-geo-alt cs_fs_24"></i>
                        </div>
                        <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                          Local Service Network
                        </h3>
                        <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                          As part of the local service network for this
                          Australian brand, we provide prompt support and
                          genuine parts availability throughout Melbourne.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Kelvinator Systems We Service */}
                <div className="cs_product_range cs_mb_50">
                  <h2 className="cs_fs_32 cs_semibold cs_heading_color cs_mb_30">
                    Kelvinator Systems We Install & Service in Melbourne
                  </h2>

                  <div className="cs_product_list">
                    <div className="cs_product_item cs_white_bg cs_radius_15 p-4 cs_mb_30 cs_shadow_1 position-relative overflow-hidden">
                      <div className="cs_product_header d-flex align-items-center cs_mb_20">
                        <div
                          className="cs_product_icon cs_accent_bg cs_white_color cs_radius_50 d-flex align-items-center justify-content-center cs_mr_20"
                          style={{
                            width: "60px",
                            height: "60px",
                            minWidth: "60px",
                          }}
                        >
                          <i className="bi bi-house-gear cs_fs_24"></i>
                        </div>
                        <div>
                          <h3 className="cs_fs_24 cs_semibold cs_heading_color cs_mb_5">
                            Kelvinator Split Systems
                          </h3>
                          <p className="cs_fs_14 cs_accent_color cs_mb_0">
                            Reliable Split System Solutions
                          </p>
                        </div>
                      </div>
                      <p className="cs_fs_16 cs_mb_20 line-height-1-7">
                        We install, repair, and service all Kelvinator split
                        systems including standard models and inverter units,
                        providing dependable cooling for Melbourne homes.
                      </p>
                      <div className="row">
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>KSV Series - Standard models</li>
                            <li>KSVI Series - Inverter models</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>Value-oriented cooling</li>
                            <li>Australian designed</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="cs_product_item cs_white_bg cs_radius_15 p-4 cs_mb_30 cs_shadow_1 position-relative overflow-hidden">
                      <div className="cs_product_header d-flex align-items-center cs_mb_20">
                        <div
                          className="cs_product_icon cs_accent_bg cs_white_color cs_radius_50 d-flex align-items-center justify-content-center cs_mr_20"
                          style={{
                            width: "60px",
                            height: "60px",
                            minWidth: "60px",
                          }}
                        >
                          <i className="bi bi-diagram-3 cs_fs_24"></i>
                        </div>
                        <div>
                          <h3 className="cs_fs_24 cs_semibold cs_heading_color cs_mb_5">
                            Kelvinator Ducted System Services
                          </h3>
                          <p className="cs_fs_14 cs_accent_color cs_mb_0">
                            Whole-Home Cooling Solutions
                          </p>
                        </div>
                      </div>
                      <p className="cs_fs_16 cs_mb_20 line-height-1-7">
                        Professional ducted system installation and maintenance
                        for Kelvinator whole-home cooling solutions designed for
                        Australian conditions and Melbourne properties.
                      </p>
                      <div className="row">
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>KAD Series - Standard ducted</li>
                            <li>KADI Series - Inverter ducted</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>Zone control available</li>
                            <li>Local service support</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="cs_product_item cs_white_bg cs_radius_15 p-4 cs_mb_30 cs_shadow_1 position-relative overflow-hidden">
                      <div className="cs_product_header d-flex align-items-center cs_mb_20">
                        <div
                          className="cs_product_icon cs_accent_bg cs_white_color cs_radius_50 d-flex align-items-center justify-content-center cs_mr_20"
                          style={{
                            width: "60px",
                            height: "60px",
                            minWidth: "60px",
                          }}
                        >
                          <i className="bi bi-layers cs_fs_24"></i>
                        </div>
                        <div>
                          <h3 className="cs_fs_24 cs_semibold cs_heading_color cs_mb_5">
                            Kelvinator Window & Portable Units
                          </h3>
                          <p className="cs_fs_14 cs_accent_color cs_mb_0">
                            Compact Cooling Solutions
                          </p>
                        </div>
                      </div>
                      <p className="cs_fs_16 cs_mb_20 line-height-1-7">
                        Expert installation and service for Kelvinator window
                        and portable air conditioning units, providing
                        cost-effective cooling for smaller spaces and rentals.
                      </p>
                      <div className="row">
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>KWH Series - Window units</li>
                            <li>KPA Series - Portable units</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>Easy installation</li>
                            <li>Budget-friendly options</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Our Kelvinator Services */}
                <div className="cs_services_section cs_white_bg cs_radius_15 p-4 cs_shadow_1 cs_mb_50">
                  <h2 className="cs_fs_32 cs_semibold cs_heading_color cs_mb_30 text-center">
                    Our Kelvinator Air Conditioning Services in Melbourne
                  </h2>

                  <div className="row cs_row_gap_20 cs_gap_y_20">
                    <div className="col-md-6">
                      <div className="cs_service_item d-flex align-items-start">
                        <div
                          className="cs_service_icon cs_accent_bg cs_white_color cs_radius_50 d-flex align-items-center justify-content-center cs_mr_20"
                          style={{ width: "70px", height: "70px" }}
                        >
                          <i className="bi bi-tools cs_fs_28"></i>
                        </div>
                        <div>
                          <h3 className="cs_fs_18 cs_semibold cs_heading_color cs_mb_10">
                            Kelvinator Installation
                          </h3>
                          <p className="cs_fs_15 cs_mb_0">
                            Professional installation by experienced technicians
                            familiar with Kelvinator systems, ensuring proper
                            setup and warranty compliance.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="cs_service_item d-flex align-items-start">
                        <div
                          className="cs_service_icon cs_accent_bg cs_white_color cs_radius_50 d-flex align-items-center justify-content-center cs_mr_20"
                          style={{ width: "70px", height: "70px" }}
                        >
                          <i className="bi bi-wrench cs_fs_28"></i>
                        </div>
                        <div>
                          <h3 className="cs_fs_18 cs_semibold cs_heading_color cs_mb_10">
                            Kelvinator Repairs
                          </h3>
                          <p className="cs_fs_15 cs_mb_0">
                            Emergency and scheduled repairs using genuine
                            Kelvinator parts with same-day service available
                            across Melbourne.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="cs_service_item d-flex align-items-start">
                        <div
                          className="cs_service_icon cs_accent_bg cs_white_color cs_radius_50 d-flex align-items-center justify-content-center cs_mr_20"
                          style={{ width: "70px", height: "70px" }}
                        >
                          <i className="bi bi-gear cs_fs_28"></i>
                        </div>
                        <div>
                          <h3 className="cs_fs_18 cs_semibold cs_heading_color cs_mb_10">
                            Kelvinator Servicing
                          </h3>
                          <p className="cs_fs_15 cs_mb_0">
                            Regular maintenance programs to keep your Kelvinator
                            system running efficiently and extend its operating
                            life with reliable performance.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="cs_service_item d-flex align-items-start">
                        <div
                          className="cs_service_icon cs_accent_bg cs_white_color cs_radius_50 d-flex align-items-center justify-content-center cs_mr_20"
                          style={{ width: "70px", height: "70px" }}
                        >
                          <i className="bi bi-arrow-up-circle cs_fs_28"></i>
                        </div>
                        <div>
                          <h3 className="cs_fs_18 cs_semibold cs_heading_color cs_mb_10">
                            Kelvinator Upgrades
                          </h3>
                          <p className="cs_fs_15 cs_mb_0">
                            Upgrade to newer Kelvinator models with improved
                            energy efficiency and enhanced cooling performance
                            for better value.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ */}
                <div className="cs_faq_section cs_mb_50">
                  <h2 className="cs_fs_32 cs_semibold cs_heading_color cs_mb_30">
                    Frequently Asked Questions - Our Kelvinator Services
                  </h2>

                  <div className="cs_faq_list">
                    <div className="cs_faq_item cs_white_bg cs_radius_10 cs_shadow_1 p-4 cs_mb_20">
                      <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                        What makes Kelvinator a good choice for Melbourne homes?
                      </h3>
                      <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                        Kelvinator is an Australian heritage brand that
                        understands local climate conditions. Their systems are
                        designed for Australian homes and offer reliable,
                        value-oriented cooling solutions with local service
                        support.
                      </p>
                    </div>

                    <div className="cs_faq_item cs_white_bg cs_radius_10 cs_shadow_1 p-4 cs_mb_20">
                      <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                        How long is the Kelvinator warranty and what do you
                        cover?
                      </h3>
                      <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                        Kelvinator typically offers a 5-year warranty on parts
                        and labor. As authorized service providers, we handle
                        all warranty claims and provide ongoing support
                        throughout the coverage period.
                      </p>
                    </div>

                    <div className="cs_faq_item cs_white_bg cs_radius_10 cs_shadow_1 p-4 cs_mb_20">
                      <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                        Are Kelvinator parts readily available in Melbourne?
                      </h3>
                      <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                        Yes, as an Australian brand with established local
                        distribution networks, Kelvinator parts are readily
                        available throughout Melbourne, ensuring quick repairs
                        and minimal downtime.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="cs_cta_section cs_accent_bg cs_radius_15 p-4 text-center">
                  <h3 className="cs_fs_28 cs_white_color cs_mb_20">
                    Ready for Professional Kelvinator Services?
                  </h3>
                  <p className="cs_white_color cs_fs_16 cs_mb_25">
                    Get expert Kelvinator installation, emergency repairs, and
                    comprehensive maintenance from experienced technicians.
                    Same-day service available across Melbourne with genuine
                    parts and reliable warranty support.
                  </p>
                  <div className="cs_cta_buttons">
                    <a
                      href="tel:0405133761"
                      className="cs_btn cs_style_1 cs_white_bg cs_accent_color cs_fs_18 cs_rounded_5 cs_pl_30 cs_pr_30 cs_pt_15 cs_pb_15 text-decoration-none cs_bold me-3 cs_mb_15"
                    >
                      <i className="bi bi-telephone-fill me-2"></i>
                      Call 0405 133 761
                    </a>
                    <a
                      href="/contact"
                      className="cs_btn cs_style_2 cs_white_color cs_fs_18 cs_rounded_5 cs_pl_30 cs_pr_30 cs_pt_15 cs_pb_15 text-decoration-none cs_bold cs_mb_15"
                    >
                      <i className="bi bi-envelope-fill me-2"></i>
                      Get Free Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="cs_sidebar cs_style_1">
                {/* Emergency Service Widget */}
                <div className="cs_sidebar_widget cs_accent_bg cs_radius_20 p-4 cs_mb_30">
                  <div className="cs_card cs_style_6 text-center">
                    <h3 className="cs_fs_24 cs_white_color cs_mb_25">
                      Kelvinator Emergency Service
                    </h3>
                    <div className="cs_card_icon cs_center cs_mb_25 mx-auto">
                      <i className="bi bi-telephone-fill cs_white_color cs_fs_32"></i>
                    </div>
                    <p className="cs_white_color cs_mb_15 cs_fs_16">
                      24/7 Kelvinator Repairs
                    </p>
                    <a
                      href="tel:0405133761"
                      className="cs_btn cs_style_1 cs_white_bg cs_accent_color cs_fs_16 cs_rounded_5 cs_pl_20 cs_pr_20 cs_pt_10 cs_pb_10 text-decoration-none cs_bold"
                    >
                      Call Now: 0405 133 761
                    </a>
                  </div>
                </div>

                {/* Other Brands Widget */}
                <div className="cs_sidebar_widget cs_accent_bg_light cs_radius_20 p-4 cs_shadow_1 cs_mb_30">
                  <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_25">
                    Other Air Conditioning Brands
                  </h3>
                  <div className="cs_categories">
                    <Link
                      href="/brands/daikin"
                      className="d-flex align-items-center justify-content-between text-decoration-none cs_mb_10 p-2 rounded transition-all"
                    >
                      <span>Daikin</span>
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                    <Link
                      href="/brands/mitsubishi"
                      className="d-flex align-items-center justify-content-between text-decoration-none cs_mb_10 p-2 rounded transition-all"
                    >
                      <span>Mitsubishi</span>
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                    <Link
                      href="/brands/panasonic"
                      className="d-flex align-items-center justify-content-between text-decoration-none cs_mb_10 p-2 rounded transition-all"
                    >
                      <span>Panasonic</span>
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                    <Link
                      href="/brands/samsung"
                      className="d-flex align-items-center justify-content-between text-decoration-none cs_mb_10 p-2 rounded transition-all"
                    >
                      <span>Samsung</span>
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                    <Link
                      href="/brands/fujitsu"
                      className="d-flex align-items-center justify-content-between text-decoration-none cs_mb_10 p-2 rounded transition-all"
                    >
                      <span>Fujitsu</span>
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                    <Link
                      href="/brands/toshiba"
                      className="d-flex align-items-center justify-content-between text-decoration-none p-2 rounded transition-all"
                    >
                      <span>Toshiba</span>
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>

                {/* Quick Contact Widget */}
                <div className="cs_sidebar_widget cs_accent_bg_light cs_radius_20 p-4">
                  <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_20">
                    Get Kelvinator Quote
                  </h3>
                  <p className="cs_fs_14 cs_mb_20">
                    Free assessment and competitive pricing for all Kelvinator
                    air conditioning services.
                  </p>
                  <a
                    href="/contact"
                    className="cs_btn cs_style_1 cs_accent_bg cs_white_color cs_fs_14 cs_rounded_5 cs_pl_20 cs_pr_20 cs_pt_10 cs_pb_10 text-decoration-none w-100 text-center"
                  >
                    Request Free Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    </div>
  );
};

export default KelvinatorPage;
