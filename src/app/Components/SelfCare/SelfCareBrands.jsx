"use client";
import Image from "next/image";
import Link from "next/link";

const SelfCareBrands = () => {
  const brands = [
    { name: "Daikin", slug: "daikin", logo: "/assets/img/brand1.png" },
    {
      name: "Mitsubishi Electric",
      slug: "mitsubishi",
      logo: "/assets/img/brand2.png",
    },
    { name: "Panasonic", slug: "panasonic", logo: "/assets/img/brand4.png" },
    { name: "Samsung", slug: "samsung", logo: "/assets/img/brand5.png" },
    { name: "Fujitsu", slug: "fujitsu", logo: "/assets/img/brand1.png" },
    { name: "Carrier", slug: "carrier", logo: "/assets/img/brand2.png" },
    { name: "Toshiba", slug: "toshiba", logo: "/assets/img/brand3.png" },
    { name: "Kelvinator", slug: "kelvinator", logo: "/assets/img/brand4.png" },
    { name: "Rheem", slug: "rheem", logo: "/assets/img/brand5.png" },
    { name: "Braemar", slug: "braemar", logo: "/assets/img/brand1.png" },
    { name: "Bonaire", slug: "bonaire", logo: "/assets/img/brand2.png" },
  ];

  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="cs_self_care_content">
              <div className="cs_section_heading cs_style_1 cs_mb_40">
                <h2 className="cs_section_title cs_fs_50 cs_semibold cs_heading_color cs_mb_25">
                  Error Codes & Troubleshooting
                </h2>
                <h3 className="cs_fs_24 cs_semibold cs_heading_color cs_mb_20">
                  Find Solutions for Your Air Conditioning Issues
                </h3>
                <p className="cs_fs_18 cs_mb_25">
                  Having trouble with your air conditioning system? Find error
                  codes and troubleshooting guides for all major brands below.
                </p>
                <p className="cs_fs_16 cs_mb_30 line-height-1-7">
                  Our comprehensive error code database covers all popular air
                  conditioning brands. Each brand page contains detailed error
                  code listings, explanations, and step-by-step troubleshooting
                  instructions. If you&apos;re unable to resolve the issue
                  yourself, our licensed technicians are available 24/7 for
                  professional assistance.
                </p>
                <div className="alert alert-info cs_mb_40">
                  <div className="d-flex align-items-start">
                    <i className="bi bi-info-circle-fill cs_fs_20 me-3 mt-1"></i>
                    <div>
                      <h5 className="cs_fs_16 cs_semibold cs_mb_10">
                        Important Safety Notice
                      </h5>
                      <p className="cs_fs_14 cs_mb_0">
                        Always turn off your air conditioning system before
                        attempting any troubleshooting. If you&apos;re unsure
                        about any procedure, contact a licensed technician
                        immediately.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Brands Grid */}
              <div className="cs_brands_grid">
                <div className="row cs_row_gap_30 cs_gap_y_30">
                  {brands.map((brand, index) => (
                    <div
                      key={index}
                      className="col-lg-4 col-md-6 col-sm-6 cs_mb_30"
                    >
                      <div className="cs_brand_card cs_style_1">
                        <Link
                          href={`/self-care/${brand.slug}`}
                          className="cs_brand_link"
                        >
                          <div className="cs_brand_card_inner text-center p-4">
                            <div className="cs_brand_logo cs_mb_20">
                              {/* <Image
                                src={brand.logo}
                                alt={`${brand.name} Error Codes`}
                                width={80}
                                height={80}
                                className="mx-auto"
                              /> */}
                            </div>
                            <h4 className="cs_brand_name cs_fs_18 cs_semibold cs_heading_color cs_mb_15">
                              {brand.name}
                            </h4>
                            <p className="cs_fs_14 cs_mb_20 text-muted">
                              View error codes & troubleshooting guide
                            </p>
                            <div className="cs_brand_action">
                              <span className="cs_btn cs_style_1 cs_fs_14 cs_semibold">
                                View Error Codes
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Help Section */}
              <div className="cs_professional_help cs_mt_60">
                <div className="cs_card cs_style_contact cs_radius_20">
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      <h3 className="cs_fs_28 cs_semibold cs_heading_color cs_mb_20">
                        Need Professional Help?
                      </h3>
                      <p className="cs_fs_16 cs_mb_20">
                        Can&apos;t find your error code or unable to fix the
                        issue? Our licensed technicians are available 24/7 for
                        emergency repairs and maintenance.
                      </p>
                      <div className="cs_contact_info">
                        <div className="cs_contact_item d-flex align-items-center">
                          <div className="cs_contact_icon">
                            <i className="bi bi-telephone-fill"></i>
                          </div>
                          <div>
                            <p className="cs_fs_16 cs_semibold cs_mb_0">
                              Emergency:{" "}
                              <a
                                href="tel:0405133761"
                                className="cs_accent_color"
                              >
                                0405 133 761
                              </a>
                            </p>
                          </div>
                        </div>
                        <div className="cs_contact_item d-flex align-items-center">
                          <div className="cs_contact_icon">
                            <i className="bi bi-tools"></i>
                          </div>
                          <div>
                            <p className="cs_fs_16 cs_semibold cs_mb_0">
                              Same-Day Service - Licensed Technicians
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 text-center">
                      <div className="cs_service_badge">
                        <div className="cs_badge_icon">
                          <i className="bi bi-wrench-adjustable-circle cs_fs_32"></i>
                        </div>
                        <h4 className="cs_fs_18 cs_semibold cs_heading_color">
                          24/7 Emergency Service
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="cs_self_care_sidebar">
              {/* Quick Help Widget */}
              <div className="cs_sidebar_widget cs_mb_40">
                <div className="cs_card cs_style_6 text-center">
                  <h3 className="cs_fs_20 cs_white_color cs_mb_25">
                    Quick Help Guide
                  </h3>
                  <div className="cs_quick_help_steps text-start">
                    <div className="cs_help_step cs_mb_15">
                      <span className="cs_step_number">1</span>
                      <span className="cs_step_text cs_white_color cs_fs_14">
                        Turn off your AC system
                      </span>
                    </div>
                    <div className="cs_help_step cs_mb_15">
                      <span className="cs_step_number">2</span>
                      <span className="cs_step_text cs_white_color cs_fs_14">
                        Note the error code displayed
                      </span>
                    </div>
                    <div className="cs_help_step cs_mb_15">
                      <span className="cs_step_number">3</span>
                      <span className="cs_step_text cs_white_color cs_fs_14">
                        Find your brand below
                      </span>
                    </div>
                    <div className="cs_help_step cs_mb_15">
                      <span className="cs_step_number">4</span>
                      <span className="cs_step_text cs_white_color cs_fs_14">
                        Follow troubleshooting steps
                      </span>
                    </div>
                    <div className="cs_help_step">
                      <span className="cs_step_number">5</span>
                      <span className="cs_step_text cs_white_color cs_fs_14">
                        Call us if problem persists
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact Widget */}
              <div className="cs_sidebar_widget cs_mb_40">
                <div className="cs_emergency_contact bg-danger text-white p-4 rounded">
                  <h4 className="cs_fs_18 cs_semibold cs_mb_20">
                    <i className="bi bi-exclamation-triangle-fill me-2"></i>
                    Emergency Service
                  </h4>
                  <p className="cs_fs_14 cs_mb_15">
                    System completely down? Refrigerant leak? Strange noises or
                    burning smell?
                  </p>
                  <a
                    href="tel:0405133761"
                    className="cs_btn cs_style_1 cs_white_bg cs_accent_color cs_fs_14 cs_semibold w-100 text-center"
                  >
                    Call Now: 0405 133 761
                  </a>
                </div>
              </div>

              {/* Popular Error Codes */}
              <div className="cs_sidebar_widget">
                <div className="cs_accent_bg_light cs_radius_20 p-4">
                  <h4 className="cs_fs_18 cs_semibold cs_heading_color cs_mb_20">
                    Most Common Error Codes
                  </h4>
                  <div className="cs_popular_codes">
                    <div className="cs_code_item cs_mb_15">
                      <span className="cs_code_number cs_fs_14 cs_semibold">
                        E1/E2
                      </span>
                      <span className="cs_code_desc cs_fs_14 text-muted">
                        Temperature sensor issues
                      </span>
                    </div>
                    <div className="cs_code_item cs_mb_15">
                      <span className="cs_code_number cs_fs_14 cs_semibold">
                        E3/E4
                      </span>
                      <span className="cs_code_desc cs_fs_14 text-muted">
                        Fan motor problems
                      </span>
                    </div>
                    <div className="cs_code_item cs_mb_15">
                      <span className="cs_code_number cs_fs_14 cs_semibold">
                        E5/E6
                      </span>
                      <span className="cs_code_desc cs_fs_14 text-muted">
                        Compressor issues
                      </span>
                    </div>
                    <div className="cs_code_item cs_mb_15">
                      <span className="cs_code_number cs_fs_14 cs_semibold">
                        F1/F2
                      </span>
                      <span className="cs_code_desc cs_fs_14 text-muted">
                        Communication errors
                      </span>
                    </div>
                    <div className="cs_code_item">
                      <span className="cs_code_number cs_fs_14 cs_semibold">
                        L3/L4
                      </span>
                      <span className="cs_code_desc cs_fs_14 text-muted">
                        Power supply issues
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default SelfCareBrands;
