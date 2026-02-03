import BreadCumb from "@/app/Components/Common/BreadCumb";
import Link from "next/link";

export const metadata = {
  title:
    "Braemar Evaporative Cooling Melbourne | Installation, Repair & Service | 0405 133 761",
  description:
    "Expert Braemar evaporative cooling installation, repair & service in Melbourne. Australian specialists, eco-friendly cooling, ideal for Melbourne's dry climate. Licensed technicians, same-day service. Call 0405 133 761.",
  keywords: [
    "Braemar evaporative cooling Melbourne",
    "Braemar installation Melbourne",
    "Braemar repair Melbourne",
    "Braemar service Melbourne",
    "Braemar ducted cooling Melbourne",
    "Braemar technician Melbourne",
    "Braemar warranty Melbourne",
    "Braemar eco-friendly cooling Melbourne",
    "Braemar dry climate cooling Melbourne",
    "Braemar energy efficient Melbourne",
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
      "Braemar Evaporative Cooling Melbourne | Professional Installation & Service",
    description:
      "Expert Braemar evaporative cooling services in Melbourne. Installation, repair, maintenance. Licensed technicians, same-day service available.",
    url: "https://www.coolingservicemelbourne.com.au/brands/braemar",
    siteName: "Cooling Service Melbourne",
    images: [{ url: "/openGraphImage.jpg", width: 800, height: 600 }],
    locale: "en_AU",
    type: "website",
  },
  alternates: {
    canonical: "https://www.coolingservicemelbourne.com.au/brands/braemar",
  },
};

const BraemarPage = () => {
  return (
    <div>
      <BreadCumb
        bgImg="/assets/img/page_heading_1.jpg"
        Title="Braemar Evaporative Cooling Melbourne"
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
                        <span className="cs_fs_24 cs_bold cs_heading_color">
                          BRAEMAR
                        </span>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <h1 className="cs_fs_36 cs_semibold cs_heading_color cs_mb_15">
                        Braemar Evaporative Cooling Melbourne
                      </h1>
                      <p className="cs_fs_18 cs_accent_color cs_mb_15 cs_semibold">
                        Expert Braemar Installation, Repair & Service
                      </p>
                      <p className="cs_fs_16 cs_mb_20 line-height-1-7">
                        As certified Braemar specialists in Melbourne, we
                        provide professional installation, emergency repairs,
                        and comprehensive maintenance for all Braemar
                        evaporative cooling systems. Australian specialists,
                        eco-friendly cooling, perfect for Melbourne&apos;s dry
                        climate with energy efficient operation.
                      </p>
                      <a
                        href="tel:0405133761"
                        className="cs_btn cs_style_1 cs_accent_bg cs_white_color cs_fs_16 cs_rounded_5 cs_pl_25 cs_pr_25 cs_pt_12 cs_pb_12 text-decoration-none"
                      >
                        <i className="bi bi-telephone-fill me-2"></i>
                        Call for Braemar Service: 0405 133 761
                      </a>
                    </div>
                  </div>
                </div>

                {/* Our Braemar Expertise */}
                <div className="cs_brand_features cs_mb_50">
                  <h2 className="cs_fs_32 cs_semibold cs_heading_color cs_mb_30">
                    Why Choose Our Braemar Services?
                  </h2>

                  <div className="row cs_row_gap_30 cs_gap_y_30">
                    <div className="col-md-6">
                      <div className="cs_feature_item cs_white_bg cs_radius_10 p-4 cs_shadow_1">
                        <div
                          className="cs_feature_icon cs_accent_bg cs_white_color cs_radius_50 d-inline-flex align-items-center justify-content-center cs_mb_20"
                          style={{ width: "60px", height: "60px" }}
                        >
                          <i className="bi bi-geo-alt cs_fs_24"></i>
                        </div>
                        <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                          Australian Specialists
                        </h3>
                        <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                          Our technicians are trained in Braemar&apos;s
                          Australian evaporative cooling expertise, specializing
                          in systems perfectly designed for Melbourne&apos;s
                          climate conditions.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="cs_feature_item cs_white_bg cs_radius_10 p-4 cs_shadow_1">
                        <div
                          className="cs_feature_icon cs_accent_bg cs_white_color cs_radius_50 d-inline-flex align-items-center justify-content-center cs_mb_20"
                          style={{ width: "60px", height: "60px" }}
                        >
                          <i className="bi bi-droplet cs_fs_24"></i>
                        </div>
                        <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                          Eco-Friendly Cooling
                        </h3>
                        <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                          We install and service Braemar&apos;s environmentally
                          friendly evaporative cooling systems that use natural
                          water evaporation for energy-efficient cooling.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="cs_feature_item cs_white_bg cs_radius_10 p-4 cs_shadow_1">
                        <div
                          className="cs_feature_icon cs_accent_bg cs_white_color cs_radius_50 d-inline-flex align-items-center justify-content-center cs_mb_20"
                          style={{ width: "60px", height: "60px" }}
                        >
                          <i className="bi bi-thermometer-half cs_fs_24"></i>
                        </div>
                        <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                          Perfect for Melbourne Climate
                        </h3>
                        <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                          We configure Braemar systems to maximize performance
                          in Melbourne&apos;s dry climate conditions where
                          evaporative cooling works most efficiently.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="cs_feature_item cs_white_bg cs_radius_10 p-4 cs_shadow_1">
                        <div
                          className="cs_feature_icon cs_accent_bg cs_white_color cs_radius_50 d-inline-flex align-items-center justify-content-center cs_mb_20"
                          style={{ width: "60px", height: "60px" }}
                        >
                          <i className="bi bi-lightning-charge cs_fs_24"></i>
                        </div>
                        <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                          Energy Efficient Operation
                        </h3>
                        <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                          Our certified technicians provide professional Braemar
                          installation with optimal settings for maximum energy
                          efficiency and minimal operating costs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Braemar Systems We Service */}
                <div className="cs_product_range cs_mb_50">
                  <h2 className="cs_fs_32 cs_semibold cs_heading_color cs_mb_30">
                    Braemar Systems We Install & Service in Melbourne
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
                            Braemar LCB Series
                          </h3>
                          <p className="cs_fs_14 cs_accent_color cs_mb_0">
                            Central Evaporative Cooling
                          </p>
                        </div>
                      </div>
                      <p className="cs_fs_16 cs_mb_20 line-height-1-7">
                        We install, repair, and service all Braemar LCB series
                        central evaporative cooling systems designed for
                        whole-home cooling in Melbourne properties.
                      </p>
                      <div className="row">
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>LCB Series - Central units</li>
                            <li>Ducted evaporative systems</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>Whole-home cooling</li>
                            <li>Energy efficient operation</li>
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
                            Braemar Window/Wall Units
                          </h3>
                          <p className="cs_fs_14 cs_accent_color cs_mb_0">
                            Compact Evaporative Solutions
                          </p>
                        </div>
                      </div>
                      <p className="cs_fs_16 cs_mb_20 line-height-1-7">
                        Professional installation and maintenance for Braemar
                        window and wall-mounted evaporative coolers perfect for
                        single rooms or smaller Melbourne properties.
                      </p>
                      <div className="row">
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>Window mounted units</li>
                            <li>Wall mounted systems</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>Room-specific cooling</li>
                            <li>Cost-effective installation</li>
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
                            Braemar Commercial Systems
                          </h3>
                          <p className="cs_fs_14 cs_accent_color cs_mb_0">
                            Large-Scale Evaporative Cooling
                          </p>
                        </div>
                      </div>
                      <p className="cs_fs_16 cs_mb_20 line-height-1-7">
                        Expert installation and service for Braemar commercial
                        evaporative cooling systems designed for larger
                        Melbourne commercial and industrial properties.
                      </p>
                      <div className="row">
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>Commercial evaporative units</li>
                            <li>Industrial cooling systems</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>Large capacity cooling</li>
                            <li>Professional installation</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Our Braemar Services */}
                <div className="cs_services_section cs_white_bg cs_radius_15 p-4 cs_shadow_1 cs_mb_50">
                  <h2 className="cs_fs_32 cs_semibold cs_heading_color cs_mb_30 text-center">
                    Our Braemar Evaporative Cooling Services in Melbourne
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
                            Braemar Installation
                          </h3>
                          <p className="cs_fs_15 cs_mb_0">
                            Professional installation by Braemar-certified
                            technicians with eco-friendly setup, proper sizing,
                            and comprehensive warranty compliance.
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
                            Braemar Repairs
                          </h3>
                          <p className="cs_fs_15 cs_mb_0">
                            Emergency and scheduled repairs using genuine
                            Braemar parts with same-day service available across
                            Melbourne for all evaporative systems.
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
                            Braemar Servicing
                          </h3>
                          <p className="cs_fs_15 cs_mb_0">
                            Regular maintenance programs to keep your Braemar
                            evaporative cooling system operating efficiently
                            with pad replacement and water system cleaning.
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
                            Braemar Upgrades
                          </h3>
                          <p className="cs_fs_15 cs_mb_0">
                            Upgrade to latest Braemar models with improved
                            energy efficiency and enhanced cooling pad
                            technology for better performance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ */}
                <div className="cs_faq_section cs_mb_50">
                  <h2 className="cs_fs_32 cs_semibold cs_heading_color cs_mb_30">
                    Frequently Asked Questions - Our Braemar Services
                  </h2>

                  <div className="cs_faq_list">
                    <div className="cs_faq_item cs_white_bg cs_radius_10 cs_shadow_1 p-4 cs_mb_20">
                      <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                        Why are Braemar evaporative coolers perfect for
                        Melbourne?
                      </h3>
                      <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                        Braemar systems are designed specifically for Australian
                        conditions. Melbourne&apos;s dry climate is ideal for
                        evaporative cooling, providing energy- efficient cooling
                        with natural water evaporation.
                      </p>
                    </div>

                    <div className="cs_faq_item cs_white_bg cs_radius_10 cs_shadow_1 p-4 cs_mb_20">
                      <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                        How much can I save with Braemar evaporative cooling?
                      </h3>
                      <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                        Braemar evaporative cooling typically uses up to 80%
                        less electricity than refrigerated air conditioning,
                        providing significant savings on your Melbourne energy
                        bills while delivering effective cooling.
                      </p>
                    </div>

                    <div className="cs_faq_item cs_white_bg cs_radius_10 cs_shadow_1 p-4 cs_mb_20">
                      <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                        How often do Braemar systems need maintenance?
                      </h3>
                      <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                        We recommend annual pre-season service including pad
                        replacement, water system cleaning, and pump inspection
                        to ensure optimal performance throughout
                        Melbourne&apos;s cooling season.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="cs_cta_section cs_accent_bg cs_radius_15 p-4 text-center">
                  <h3 className="cs_fs_28 cs_white_color cs_mb_20">
                    Ready for Professional Braemar Services?
                  </h3>
                  <p className="cs_white_color cs_fs_16 cs_mb_25">
                    Get expert Braemar evaporative cooling installation,
                    emergency repairs, and comprehensive maintenance from
                    certified technicians. Same-day service available across
                    Melbourne with genuine parts and eco-friendly operation.
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
                      Braemar Emergency Service
                    </h3>
                    <div className="cs_card_icon cs_center cs_mb_25 mx-auto">
                      <i className="bi bi-telephone-fill cs_white_color cs_fs_32"></i>
                    </div>
                    <p className="cs_white_color cs_mb_15 cs_fs_16">
                      24/7 Braemar Repairs
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
                      href="/brands/rheem"
                      className="d-flex align-items-center justify-content-between text-decoration-none p-2 rounded transition-all"
                    >
                      <span>Rheem</span>
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>

                {/* Quick Contact Widget */}
                <div className="cs_sidebar_widget cs_accent_bg_light cs_radius_20 p-4">
                  <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_20">
                    Get Braemar Quote
                  </h3>
                  <p className="cs_fs_14 cs_mb_20">
                    Free assessment and competitive pricing for all Braemar
                    evaporative cooling services.
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

export default BraemarPage;
