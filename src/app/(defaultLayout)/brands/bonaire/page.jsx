import BreadCumb from "@/app/Components/Common/BreadCumb";
import Link from "next/link";

export const metadata = {
  title:
    "Bonaire Ducted Air Conditioning Melbourne | Installation, Repair & Service | 0405 133 761",
  description:
    "Expert Bonaire ducted air conditioning installation, repair & service in Melbourne. Australian manufacturer, whole-home heating & cooling, zone control systems. Licensed technicians, same-day service. Call 0405 133 761.",
  keywords: [
    "Bonaire ducted air conditioning Melbourne",
    "Bonaire installation Melbourne",
    "Bonaire repair Melbourne",
    "Bonaire service Melbourne",
    "Bonaire ducted heating Melbourne",
    "Bonaire ducted cooling Melbourne",
    "Bonaire zone control Melbourne",
    "Bonaire technician Melbourne",
    "Bonaire warranty Melbourne",
    "Bonaire whole home Melbourne",
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
      "Bonaire Ducted Air Conditioning Melbourne | Professional Installation & Service",
    description:
      "Expert Bonaire ducted air conditioning services in Melbourne. Installation, repair, maintenance. Licensed technicians, same-day service available.",
    url: "https://www.coolingservicemelbourne.com.au/brands/bonaire",
    siteName: "Cooling Service Melbourne",
    images: [{ url: "/openGraphImage.jpg", width: 800, height: 600 }],
    locale: "en_AU",
    type: "website",
  },
  alternates: {
    canonical: "https://www.coolingservicemelbourne.com.au/brands/bonaire",
  },
};

const BonairePage = () => {
  return (
    <div>
      <BreadCumb
        bgImg="/assets/img/page_heading_1.jpg"
        Title="Bonaire Ducted Air Conditioning Melbourne"
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
                          BONAIRE
                        </span>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <h1 className="cs_fs_36 cs_semibold cs_heading_color cs_mb_15">
                        Bonaire Ducted Air Conditioning Melbourne
                      </h1>
                      <p className="cs_fs_18 cs_accent_color cs_mb_15 cs_semibold">
                        Expert Bonaire Installation, Repair & Service
                      </p>
                      <p className="cs_fs_16 cs_mb_20 line-height-1-7">
                        As certified Bonaire specialists in Melbourne, we
                        provide professional installation, emergency repairs,
                        and comprehensive maintenance for all Bonaire ducted air
                        conditioning systems. Leading Australian manufacturer,
                        whole-home heating & cooling, zone control systems with
                        energy efficient operation.
                      </p>
                      <a
                        href="tel:0405133761"
                        className="cs_btn cs_style_1 cs_accent_bg cs_white_color cs_fs_16 cs_rounded_5 cs_pl_25 cs_pr_25 cs_pt_12 cs_pb_12 text-decoration-none"
                      >
                        <i className="bi bi-telephone-fill me-2"></i>
                        Call for Bonaire Service: 0405 133 761
                      </a>
                    </div>
                  </div>
                </div>

                {/* Our Bonaire Expertise */}
                <div className="cs_brand_features cs_mb_50">
                  <h2 className="cs_fs_32 cs_semibold cs_heading_color cs_mb_30">
                    Why Choose Our Bonaire Services?
                  </h2>

                  <div className="row cs_row_gap_30 cs_gap_y_30">
                    <div className="col-md-6">
                      <div className="cs_feature_item cs_white_bg cs_radius_10 p-4 cs_shadow_1">
                        <div
                          className="cs_feature_icon cs_accent_bg cs_white_color cs_radius_50 d-inline-flex align-items-center justify-content-center cs_mb_20"
                          style={{ width: "60px", height: "60px" }}
                        >
                          <i className="bi bi-building cs_fs_24"></i>
                        </div>
                        <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                          Australian Manufacturer
                        </h3>
                        <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                          Our technicians are trained in Bonaire&apos;s leading
                          Australian manufacturing standards, ensuring expert
                          installation and service of systems designed
                          specifically for local conditions.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="cs_feature_item cs_white_bg cs_radius_10 p-4 cs_shadow_1">
                        <div
                          className="cs_feature_icon cs_accent_bg cs_white_color cs_radius_50 d-inline-flex align-items-center justify-content-center cs_mb_20"
                          style={{ width: "60px", height: "60px" }}
                        >
                          <i className="bi bi-house-fill cs_fs_24"></i>
                        </div>
                        <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                          Whole-Home Comfort
                        </h3>
                        <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                          We install and service Bonaire&apos;s comprehensive
                          ducted systems that provide year-round heating and
                          cooling for your entire Melbourne home with consistent
                          comfort.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="cs_feature_item cs_white_bg cs_radius_10 p-4 cs_shadow_1">
                        <div
                          className="cs_feature_icon cs_accent_bg cs_white_color cs_radius_50 d-inline-flex align-items-center justify-content-center cs_mb_20"
                          style={{ width: "60px", height: "60px" }}
                        >
                          <i className="bi bi-layers cs_fs_24"></i>
                        </div>
                        <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                          Zone Control Systems
                        </h3>
                        <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                          We configure Bonaire systems with advanced zone
                          control technology, allowing independent temperature
                          control in different areas of your Melbourne property.
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
                          Energy Efficient Design
                        </h3>
                        <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                          Our certified technicians provide professional Bonaire
                          installation with optimal settings for maximum energy
                          efficiency and reduced operating costs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bonaire Systems We Service */}
                <div className="cs_product_range cs_mb_50">
                  <h2 className="cs_fs_32 cs_semibold cs_heading_color cs_mb_30">
                    Bonaire Systems We Install & Service in Melbourne
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
                            Bonaire Ducted Refrigerated
                          </h3>
                          <p className="cs_fs_14 cs_accent_color cs_mb_0">
                            Ducted Air Conditioning Systems
                          </p>
                        </div>
                      </div>
                      <p className="cs_fs_16 cs_mb_20 line-height-1-7">
                        We install, repair, and service all Bonaire ducted
                        refrigerated air conditioning systems designed for
                        whole-home cooling and heating in Melbourne properties.
                      </p>
                      <div className="row">
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>Compact Series - Space saving</li>
                            <li>Classic Series - Standard ducted</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>Whole-home climate control</li>
                            <li>Zone control compatibility</li>
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
                            Bonaire Gas Ducted Heating
                          </h3>
                          <p className="cs_fs_14 cs_accent_color cs_mb_0">
                            Efficient Gas Heating Systems
                          </p>
                        </div>
                      </div>
                      <p className="cs_fs_16 cs_mb_20 line-height-1-7">
                        Professional installation and maintenance for Bonaire
                        gas ducted heating systems providing efficient whole-
                        home warmth during Melbourne&apos;s winter months.
                      </p>
                      <div className="row">
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>MyClimate Series - Smart control</li>
                            <li>Navigator Series - Premium gas</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>Energy efficient operation</li>
                            <li>Zone control integration</li>
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
                            Bonaire Zone Control
                          </h3>
                          <p className="cs_fs_14 cs_accent_color cs_mb_0">
                            Advanced Zone Management
                          </p>
                        </div>
                      </div>
                      <p className="cs_fs_16 cs_mb_20 line-height-1-7">
                        Expert installation and programming of Bonaire zone
                        control systems allowing independent temperature
                        management in different areas of your Melbourne home.
                      </p>
                      <div className="row">
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>MyZone Controllers - Smart zones</li>
                            <li>Temperature sensors</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>Energy saving automation</li>
                            <li>Individual room control</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Our Bonaire Services */}
                <div className="cs_services_section cs_white_bg cs_radius_15 p-4 cs_shadow_1 cs_mb_50">
                  <h2 className="cs_fs_32 cs_semibold cs_heading_color cs_mb_30 text-center">
                    Our Bonaire Ducted Air Conditioning Services in Melbourne
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
                            Bonaire Installation
                          </h3>
                          <p className="cs_fs_15 cs_mb_0">
                            Professional installation by Bonaire-certified
                            technicians with ducted system setup, zone control
                            configuration, and comprehensive warranty
                            compliance.
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
                            Bonaire Repairs
                          </h3>
                          <p className="cs_fs_15 cs_mb_0">
                            Emergency and scheduled repairs using genuine
                            Bonaire parts with same-day service available across
                            Melbourne for all ducted systems.
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
                            Bonaire Servicing
                          </h3>
                          <p className="cs_fs_15 cs_mb_0">
                            Regular maintenance programs to keep your Bonaire
                            ducted system operating efficiently with filter
                            replacement and zone control optimization.
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
                            Bonaire Upgrades
                          </h3>
                          <p className="cs_fs_15 cs_mb_0">
                            Upgrade to latest Bonaire models with advanced zone
                            control technology and improved energy efficiency
                            for better whole-home comfort.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ */}
                <div className="cs_faq_section cs_mb_50">
                  <h2 className="cs_fs_32 cs_semibold cs_heading_color cs_mb_30">
                    Frequently Asked Questions - Our Bonaire Services
                  </h2>

                  <div className="cs_faq_list">
                    <div className="cs_faq_item cs_white_bg cs_radius_10 cs_shadow_1 p-4 cs_mb_20">
                      <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                        What makes Bonaire ducted systems ideal for Melbourne
                        homes?
                      </h3>
                      <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                        Bonaire ducted systems are manufactured in Australia
                        specifically for local climate conditions. They provide
                        comprehensive whole-home heating and cooling with
                        advanced zone control for maximum comfort and
                        efficiency.
                      </p>
                    </div>

                    <div className="cs_faq_item cs_white_bg cs_radius_10 cs_shadow_1 p-4 cs_mb_20">
                      <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                        How does Bonaire zone control save energy costs?
                      </h3>
                      <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                        Bonaire zone control allows you to heat or cool only the
                        areas you&apos;re using, reducing energy consumption by
                        up to 40%. Each zone can be independently controlled for
                        optimal comfort and efficiency.
                      </p>
                    </div>

                    <div className="cs_faq_item cs_white_bg cs_radius_10 cs_shadow_1 p-4 cs_mb_20">
                      <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                        What warranty does Bonaire provide on their systems?
                      </h3>
                      <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                        Bonaire offers comprehensive warranties including up to
                        7 years on parts and systems. As certified installers,
                        we handle all warranty claims and provide ongoing
                        support throughout the coverage period.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="cs_cta_section cs_accent_bg cs_radius_15 p-4 text-center">
                  <h3 className="cs_fs_28 cs_white_color cs_mb_20">
                    Ready for Professional Bonaire Services?
                  </h3>
                  <p className="cs_white_color cs_fs_16 cs_mb_25">
                    Get expert Bonaire ducted air conditioning installation,
                    emergency repairs, and comprehensive maintenance from
                    certified technicians. Same-day service available across
                    Melbourne with genuine parts and zone control expertise.
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
                      Bonaire Emergency Service
                    </h3>
                    <div className="cs_card_icon cs_center cs_mb_25 mx-auto">
                      <i className="bi bi-telephone-fill cs_white_color cs_fs_32"></i>
                    </div>
                    <p className="cs_white_color cs_mb_15 cs_fs_16">
                      24/7 Bonaire Repairs
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
                      href="/brands/braemar"
                      className="d-flex align-items-center justify-content-between text-decoration-none cs_mb_10 p-2 rounded transition-all"
                    >
                      <span>Braemar</span>
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
                    Get Bonaire Quote
                  </h3>
                  <p className="cs_fs_14 cs_mb_20">
                    Free assessment and competitive pricing for all Bonaire
                    ducted air conditioning services.
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

export default BonairePage;
