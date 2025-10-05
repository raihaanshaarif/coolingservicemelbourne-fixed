import BreadCumb from "@/app/Components/Common/BreadCumb";
import Link from "next/link";

export const metadata = {
  title:
    "Rheem Air Conditioning Melbourne | Installation, Repair & Service | 0405 133 761",
  description:
    "Expert Rheem air conditioning installation, repair & service in Melbourne. Premium American quality, energy efficient models, quiet operation. Licensed technicians, same-day service. Call 0405 133 761.",
  keywords: [
    "Rheem air conditioning Melbourne",
    "Rheem installation Melbourne",
    "Rheem repair Melbourne",
    "Rheem service Melbourne",
    "Rheem split system Melbourne",
    "Rheem ducted Melbourne",
    "Rheem technician Melbourne",
    "Rheem warranty Melbourne",
    "Rheem energy efficient Melbourne",
    "Rheem quiet operation Melbourne",
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
      "Rheem Air Conditioning Melbourne | Professional Installation & Service",
    description:
      "Expert Rheem air conditioning services in Melbourne. Installation, repair, maintenance. Licensed technicians, same-day service available.",
    url: "https://coolingservicemelbourne.com.au/brands/rheem",
    siteName: "Cooling Service Melbourne",
    images: [{ url: "/openGraphImage.jpg", width: 800, height: 600 }],
    locale: "en_AU",
    type: "website",
  },
  alternates: {
    canonical: "https://coolingservicemelbourne.com.au/brands/rheem",
  },
};

const RheemPage = () => {
  return (
    <div>
      <BreadCumb
        bgImg="/assets/img/page_heading_1.jpg"
        Title="Rheem Air Conditioning Melbourne"
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
                          RHEEM
                        </span>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <h1 className="cs_fs_36 cs_semibold cs_heading_color cs_mb_15">
                        Rheem Air Conditioning Melbourne
                      </h1>
                      <p className="cs_fs_18 cs_accent_color cs_mb_15 cs_semibold">
                        Expert Rheem Installation, Repair & Service
                      </p>
                      <p className="cs_fs_16 cs_mb_20 line-height-1-7">
                        As certified Rheem specialists in Melbourne, we provide
                        professional installation, emergency repairs, and
                        comprehensive maintenance for all Rheem air conditioning
                        systems. Premium American quality, energy efficient,
                        genuine parts, warranty compliance.
                      </p>
                      <a
                        href="tel:0405133761"
                        className="cs_btn cs_style_1 cs_accent_bg cs_white_color cs_fs_16 cs_rounded_5 cs_pl_25 cs_pr_25 cs_pt_12 cs_pb_12 text-decoration-none"
                      >
                        <i className="bi bi-telephone-fill me-2"></i>
                        Call for Rheem Service: 0405 133 761
                      </a>
                    </div>
                  </div>
                </div>

                {/* Our Rheem Expertise */}
                <div className="cs_brand_features cs_mb_50">
                  <h2 className="cs_fs_32 cs_semibold cs_heading_color cs_mb_30">
                    Why Choose Our Rheem Services?
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
                          Premium Build Quality
                        </h3>
                        <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                          Our technicians are trained in Rheem&apos;s premium
                          American manufacturing standards, ensuring superior
                          build quality and long-lasting performance in
                          Melbourne&apos;s climate.
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
                          Energy Efficient Models
                        </h3>
                        <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                          We install and service Rheem&apos;s energy-efficient
                          air conditioning models that reduce electricity bills
                          while providing superior cooling performance.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="cs_feature_item cs_white_bg cs_radius_10 p-4 cs_shadow_1">
                        <div
                          className="cs_feature_icon cs_accent_bg cs_white_color cs_radius_50 d-inline-flex align-items-center justify-content-center cs_mb_20"
                          style={{ width: "60px", height: "60px" }}
                        >
                          <i className="bi bi-volume-off cs_fs_24"></i>
                        </div>
                        <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                          Quiet Operation Technology
                        </h3>
                        <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                          We configure Rheem systems for whisper-quiet
                          operation, ensuring peaceful indoor environments
                          without compromising cooling performance.
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
                          Professional Installation
                        </h3>
                        <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                          Our certified technicians provide professional Rheem
                          installation with proper sizing, placement, and
                          configuration for optimal performance and warranty
                          compliance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rheem Systems We Service */}
                <div className="cs_product_range cs_mb_50">
                  <h2 className="cs_fs_32 cs_semibold cs_heading_color cs_mb_30">
                    Rheem Systems We Install & Service in Melbourne
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
                            Rheem Split Systems
                          </h3>
                          <p className="cs_fs_14 cs_accent_color cs_mb_0">
                            Premium Split System Solutions
                          </p>
                        </div>
                      </div>
                      <p className="cs_fs_16 cs_mb_20 line-height-1-7">
                        We install, repair, and service all Rheem split systems
                        including inverter models with quiet operation and
                        energy efficient performance for Melbourne homes.
                      </p>
                      <div className="row">
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>Classic Series - Standard models</li>
                            <li>Evolve Series - Inverter models</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>Quiet operation technology</li>
                            <li>Energy efficient design</li>
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
                            Rheem Ducted System Services
                          </h3>
                          <p className="cs_fs_14 cs_accent_color cs_mb_0">
                            Whole-Home Comfort Solutions
                          </p>
                        </div>
                      </div>
                      <p className="cs_fs_16 cs_mb_20 line-height-1-7">
                        Professional ducted system installation and maintenance
                        for Rheem whole-home cooling solutions with zone control
                        and premium performance.
                      </p>
                      <div className="row">
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>RMHA Series - Standard ducted</li>
                            <li>RMHB Series - Premium ducted</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>Zone control systems</li>
                            <li>Premium build quality</li>
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
                            Rheem Commercial Systems
                          </h3>
                          <p className="cs_fs_14 cs_accent_color cs_mb_0">
                            Heavy-Duty Commercial Solutions
                          </p>
                        </div>
                      </div>
                      <p className="cs_fs_16 cs_mb_20 line-height-1-7">
                        Expert installation and service for Rheem commercial air
                        conditioning systems designed for larger Melbourne
                        properties and business applications.
                      </p>
                      <div className="row">
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>RLKL Series - Light commercial</li>
                            <li>RLNL Series - Heavy commercial</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="cs_list cs_style_1 cs_fs_14 cs_mb_0">
                            <li>Commercial grade durability</li>
                            <li>Professional installation</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Our Rheem Services */}
                <div className="cs_services_section cs_white_bg cs_radius_15 p-4 cs_shadow_1 cs_mb_50">
                  <h2 className="cs_fs_32 cs_semibold cs_heading_color cs_mb_30 text-center">
                    Our Rheem Air Conditioning Services in Melbourne
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
                            Rheem Installation
                          </h3>
                          <p className="cs_fs_15 cs_mb_0">
                            Professional installation by Rheem-certified
                            technicians with premium setup, proper sizing, and
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
                            Rheem Repairs
                          </h3>
                          <p className="cs_fs_15 cs_mb_0">
                            Emergency and scheduled repairs using genuine Rheem
                            parts with same-day service available across
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
                            Rheem Servicing
                          </h3>
                          <p className="cs_fs_15 cs_mb_0">
                            Regular maintenance programs to keep your Rheem
                            system operating quietly and efficiently with
                            premium performance standards.
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
                            Rheem Upgrades
                          </h3>
                          <p className="cs_fs_15 cs_mb_0">
                            Upgrade to latest Rheem models with improved energy
                            efficiency and enhanced quiet operation technology.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ */}
                <div className="cs_faq_section cs_mb_50">
                  <h2 className="cs_fs_32 cs_semibold cs_heading_color cs_mb_30">
                    Frequently Asked Questions - Our Rheem Services
                  </h2>

                  <div className="cs_faq_list">
                    <div className="cs_faq_item cs_white_bg cs_radius_10 cs_shadow_1 p-4 cs_mb_20">
                      <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                        What makes Rheem air conditioning systems special?
                      </h3>
                      <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                        Rheem systems are known for premium American build
                        quality, energy efficiency, and quiet operation. They
                        offer superior performance and durability, making them
                        ideal for Melbourne&apos;s climate conditions.
                      </p>
                    </div>

                    <div className="cs_faq_item cs_white_bg cs_radius_10 cs_shadow_1 p-4 cs_mb_20">
                      <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                        How long is the Rheem warranty and what do you cover?
                      </h3>
                      <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                        Rheem offers comprehensive warranties including up to 7
                        years on parts and compressor. As certified installers,
                        we handle all warranty claims and provide ongoing
                        support throughout the coverage period.
                      </p>
                    </div>

                    <div className="cs_faq_item cs_white_bg cs_radius_10 cs_shadow_1 p-4 cs_mb_20">
                      <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_15">
                        Are Rheem systems really quieter than other brands?
                      </h3>
                      <p className="cs_fs_16 cs_mb_0 line-height-1-7">
                        Yes! Rheem incorporates advanced noise-reduction
                        technology and premium components that significantly
                        reduce operating noise levels compared to many other air
                        conditioning brands.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="cs_cta_section cs_accent_bg cs_radius_15 p-4 text-center">
                  <h3 className="cs_fs_28 cs_white_color cs_mb_20">
                    Ready for Professional Rheem Services?
                  </h3>
                  <p className="cs_white_color cs_fs_16 cs_mb_25">
                    Get expert Rheem installation, emergency repairs, and
                    comprehensive maintenance from certified technicians.
                    Same-day service available across Melbourne with genuine
                    parts and premium warranty protection.
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
                      Rheem Emergency Service
                    </h3>
                    <div className="cs_card_icon cs_center cs_mb_25 mx-auto">
                      <i className="bi bi-telephone-fill cs_white_color cs_fs_32"></i>
                    </div>
                    <p className="cs_white_color cs_mb_15 cs_fs_16">
                      24/7 Rheem Repairs
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
                      href="/brands/carrier"
                      className="d-flex align-items-center justify-content-between text-decoration-none p-2 rounded transition-all"
                    >
                      <span>Carrier</span>
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>

                {/* Quick Contact Widget */}
                <div className="cs_sidebar_widget cs_accent_bg_light cs_radius_20 p-4">
                  <h3 className="cs_fs_20 cs_semibold cs_heading_color cs_mb_20">
                    Get Rheem Quote
                  </h3>
                  <p className="cs_fs_14 cs_mb_20">
                    Free assessment and competitive pricing for all Rheem air
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

export default RheemPage;
