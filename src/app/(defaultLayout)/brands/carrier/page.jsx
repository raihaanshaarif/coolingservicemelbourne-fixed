import BreadCumb from "@/app/Components/Common/BreadCumb";
import Link from "next/link";

export const metadata = {
  title:
    "Carrier Air Conditioning Melbourne | Installation, Repair & Service | 0405 133 761",
  description:
    "Expert Carrier air conditioning installation, repair & service in Melbourne. Global innovation leader, ducted systems, smart home integration. Licensed technicians, same-day service. Call 0405 133 761.",
  keywords: [
    "Carrier air conditioning Melbourne",
    "Carrier installation Melbourne",
    "Carrier repair Melbourne",
    "Carrier service Melbourne",
    "Carrier ducted Melbourne",
    "Carrier smart home Melbourne",
    "Carrier technician Melbourne",
    "Carrier warranty Melbourne",
    "Carrier VRV Melbourne",
    "Carrier inverter Melbourne",
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
      "Carrier Air Conditioning Melbourne | Professional Installation & Service",
    description:
      "Expert Carrier air conditioning services in Melbourne. Installation, repair, maintenance. Licensed technicians, same-day service available.",
    url: "https://www.coolingservicemelbourne.com.au/brands/carrier",
    siteName: "Cooling Service Melbourne",
    images: [{ url: "/openGraphImage.jpg", width: 800, height: 600 }],
    locale: "en_AU",
    type: "website",
  },
  alternates: {
    canonical: "https://www.coolingservicemelbourne.com.au/brands/carrier",
  },
};

const CarrierPage = () => {
  return (
    <div>
      <BreadCumb
        bgImg="/assets/img/page_heading_1.jpg"
        Title="Carrier Air Conditioning Melbourne"
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
                          CARRIER
                        </span>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <h1 className="cs_fs_36 cs_semibold cs_heading_color cs_mb_15">
                        Carrier Air Conditioning Melbourne
                      </h1>
                      <p className="cs_fs_18 cs_accent_color cs_mb_15 cs_semibold">
                        Expert Carrier Installation, Repair & Service
                      </p>
                      <p className="cs_fs_16 cs_mb_20 line-height-1-7">
                        As certified Carrier specialists in Melbourne, we
                        provide professional installation, emergency repairs,
                        and comprehensive maintenance for all Carrier air
                        conditioning systems. Global innovation leader,
                        commercial grade quality, genuine parts, warranty
                        compliance.
                      </p>
                      <a
                        href="tel:0405133761"
                        className="cs_btn cs_style_1 cs_accent_bg cs_white_color cs_fs_16 cs_rounded_5 cs_pl_25 cs_pr_25 cs_pt_12 cs_pb_12 text-decoration-none"
                      >
                        <i className="bi bi-telephone-fill me-2"></i>
                        Call for Carrier Service: 0405 133 761
                      </a>
                    </div>
                  </div>
                </div>

                {/* Our Carrier Expertise */}
                <div className="cs_brand_features cs_mb_50">
                  <h2 className="cs_fs_32 cs_semibold cs_heading_color cs_mb_30">
                    Why Choose Our Carrier Services?
                  </h2>

                  <div className="row cs_row_gap_30 cs_gap_y_30">
                    <div className="col-md-6">
                      <div className="cs_feature_item cs_white_bg cs_radius_10 p-4 cs_shadow_1">
                        <div
                          className="cs_feature_icon cs_accent_bg cs_white_color cs_radius_50 d-inline-flex align-items-center justify-content-center cs_mb_20"
                          style={{ width: "60px", height: "60px" }}
                        >
                          <i className="bi bi-award cs_fs_24"></i>
                        </div>
                        <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                          Global Innovation Leadership
                        </h3>
                        <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                          Our technicians are trained in Carrier&apos;s
                          cutting-edge HVAC technologies backed by over 100
                          years of innovation in climate control solutions
                          worldwide.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="cs_feature_item cs_white_bg cs_radius_10 p-4 cs_shadow_1">
                        <div
                          className="cs_feature_icon cs_accent_bg cs_white_color cs_radius_50 d-inline-flex align-items-center justify-content-center cs_mb_20"
                          style={{ width: "60px", height: "60px" }}
                        >
                          <i className="bi bi-building cs_fs_24"></i>
                        </div>
                        <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                          Commercial Grade Quality
                        </h3>
                        <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                          We install and service Carrier systems built to
                          commercial standards, providing superior reliability,
                          durability, and performance for Melbourne properties.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="cs_feature_item cs_white_bg cs_radius_10 p-4 cs_shadow_1">
                        <div
                          className="cs_feature_icon cs_accent_bg cs_white_color cs_radius_50 d-inline-flex align-items-center justify-content-center cs_mb_20"
                          style={{ width: "60px", height: "60px" }}
                        >
                          <i className="bi bi-house-gear cs_fs_24"></i>
                        </div>
                        <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                          Smart Home Integration
                        </h3>
                        <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                          We configure Carrier systems with advanced smart home
                          connectivity, allowing seamless integration with home
                          automation systems and mobile control.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="cs_feature_item cs_white_bg cs_radius_10 p-4 cs_shadow_1">
                        <div
                          className="cs_feature_icon cs_accent_bg cs_white_color cs_radius_50 d-inline-flex align-items-center justify-content-center cs_mb_20"
                          style={{ width: "60px", height: "60px" }}
                        >
                          <i className="bi bi-shield-check cs_fs_24"></i>
                        </div>
                        <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                          Extended Warranty Options
                        </h3>
                        <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                          Our certified installations qualify for Carrier&apos;s
                          comprehensive warranty programs with extended coverage
                          options for complete peace of mind.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carrier Systems We Service */}
                <div className="cs_product_range cs_mb_50">
                  <h2 className="cs_fs_32 cs_semibold cs_heading_color cs_mb_30">
                    Carrier Systems We Install & Service in Melbourne
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
                          <i className="bi bi-diagram-3 cs_fs_24"></i>
                        </div>
                        <div>
                          <h3 className="cs_fs_24 cs_semibold cs_heading_color cs_mb_5">
                            Carrier Ducted System Specialists
                          </h3>
                          <p className="cs_fs_14 cs_accent_color cs_mb_0">
                            Premium Ducted Solutions
                          </p>
                        </div>
                      </div>
                      <p className="cs_fs_16 cs_mb_20 line-height-1-7">
                        We install, repair, and service all Carrier ducted
                        systems including commercial-grade units, zone control
                        setup, and smart thermostat integration for whole-home
                        comfort.
                      </p>
                      <div className="row">
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>42QHC Series - High efficiency</li>
                            <li>42CKV Series - Commercial grade</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>Zone control systems</li>
                            <li>Smart integration ready</li>
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
                          <i className="bi bi-house-gear cs_fs_24"></i>
                        </div>
                        <div>
                          <h3 className="cs_fs_24 cs_semibold cs_heading_color cs_mb_5">
                            Carrier VRV/VRF Systems
                          </h3>
                          <p className="cs_fs_14 cs_accent_color cs_mb_0">
                            Variable Refrigerant Solutions
                          </p>
                        </div>
                      </div>
                      <p className="cs_fs_16 cs_mb_20 line-height-1-7">
                        Professional Variable Refrigerant Volume system
                        installation for maximum energy efficiency and
                        individual zone control in larger Melbourne properties.
                      </p>
                      <div className="row">
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>38HZ Series - Multi-zone VRV</li>
                            <li>38AUQ Series - Heat pump VRV</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>Individual room control</li>
                            <li>Maximum energy efficiency</li>
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
                            Carrier Split Systems
                          </h3>
                          <p className="cs_fs_14 cs_accent_color cs_mb_0">
                            High-Performance Split Solutions
                          </p>
                        </div>
                      </div>
                      <p className="cs_fs_16 cs_mb_20 line-height-1-7">
                        Expert installation and service for Carrier split
                        systems featuring advanced inverter technology and
                        commercial-grade components for Melbourne homes.
                      </p>
                      <div className="row">
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>42QHG Series - Premium splits</li>
                            <li>53QHV Series - Wall mounted</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>Smart connectivity options</li>
                            <li>Commercial grade quality</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Our Carrier Services */}
                <div className="cs_services_section cs_white_bg cs_radius_15 p-4 cs_shadow_1 cs_mb_50">
                  <h2 className="cs_fs_32 cs_semibold cs_heading_color cs_mb_30 text-center">
                    Our Carrier Air Conditioning Services in Melbourne
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
                            Carrier Installation
                          </h3>
                          <p className="cs_fs_15 cs_mb_0">
                            Professional installation by Carrier-certified
                            technicians with VRV setup, smart integration, and
                            comprehensive warranty compliance.
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
                            Carrier Repairs
                          </h3>
                          <p className="cs_fs_15 cs_mb_0">
                            Emergency and scheduled repairs using genuine
                            Carrier parts with same-day service available across
                            Melbourne.
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
                            Carrier Servicing
                          </h3>
                          <p className="cs_fs_15 cs_mb_0">
                            Regular maintenance programs including VRV system
                            optimization and smart control calibration to
                            maintain peak performance.
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
                            Carrier Upgrades
                          </h3>
                          <p className="cs_fs_15 cs_mb_0">
                            Upgrade to latest Carrier models with advanced smart
                            home integration and improved energy efficiency
                            technologies.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ */}
                <div className="cs_faq_section cs_mb_50">
                  <h2 className="cs_fs_32 cs_semibold cs_heading_color cs_mb_30">
                    Frequently Asked Questions - Our Carrier Services
                  </h2>

                  <div className="cs_faq_list">
                    <div className="cs_faq_item cs_white_bg cs_radius_10 cs_shadow_1 p-4 cs_mb_20">
                      <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                        What makes Carrier VRV systems special for large homes?
                      </h3>
                      <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                        Carrier VRV systems provide individual temperature
                        control for each room while using a single outdoor unit.
                        This technology offers maximum energy efficiency and
                        personalized comfort throughout large Melbourne
                        properties.
                      </p>
                    </div>

                    <div className="cs_faq_item cs_white_bg cs_radius_10 cs_shadow_1 p-4 cs_mb_20">
                      <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                        How long is the Carrier warranty and what do you cover?
                      </h3>
                      <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                        Carrier offers comprehensive warranties including up to
                        10 years on compressors and extended warranty options.
                        As certified installers, we handle all warranty claims
                        and provide ongoing support throughout the coverage
                        period.
                      </p>
                    </div>

                    <div className="cs_faq_item cs_white_bg cs_radius_10 cs_shadow_1 p-4 cs_mb_20">
                      <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                        Can Carrier systems integrate with smart home platforms?
                      </h3>
                      <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                        Yes! We configure Carrier systems with smart home
                        integration capabilities, allowing control through
                        popular platforms, smartphone apps, and voice commands
                        for ultimate convenience and energy management.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="cs_cta_section cs_accent_bg cs_radius_15 p-4 text-center">
                  <h3 className="cs_fs_28 cs_white_color cs_mb_20">
                    Ready for Professional Carrier Services?
                  </h3>
                  <p className="cs_white_color cs_fs_16 cs_mb_25">
                    Get expert Carrier installation, emergency repairs, and
                    comprehensive maintenance from certified technicians.
                    Same-day service available across Melbourne with genuine
                    parts and extended warranty protection.
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
                      Carrier Emergency Service
                    </h3>
                    <div className="cs_card_icon cs_center cs_mb_25 mx-auto">
                      <i className="bi bi-telephone-fill cs_white_color cs_fs_32"></i>
                    </div>
                    <p className="cs_white_color cs_mb_15 cs_fs_16">
                      24/7 Carrier Repairs
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
                    Get Carrier Quote
                  </h3>
                  <p className="cs_fs_14 cs_mb_20">
                    Free assessment and competitive pricing for all Carrier air
                    conditioning services.
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

export default CarrierPage;
