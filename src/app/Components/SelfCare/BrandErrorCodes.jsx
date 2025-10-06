"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const BrandErrorCodes = ({ brand }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [severityFilter, setSeverityFilter] = useState("all");

  const filteredErrorCodes = brand.errorCodes.filter((error) => {
    const matchesSearch =
      error.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      error.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeverity =
      severityFilter === "all" || error.severity === severityFilter;
    return matchesSearch && matchesSeverity;
  });

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "critical":
        return "text-danger";
      case "high":
        return "text-warning";
      case "medium":
        return "text-info";
      case "low":
        return "text-success";
      default:
        return "text-secondary";
    }
  };

  const getSeverityBadge = (severity) => {
    switch (severity) {
      case "critical":
        return "badge bg-danger";
      case "high":
        return "badge bg-warning text-dark";
      case "medium":
        return "badge bg-info";
      case "low":
        return "badge bg-success";
      default:
        return "badge bg-secondary";
    }
  };

  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="cs_brand_error_codes">
              {/* Brand Header */}
              <div className="cs_brand_header cs_mb_40">
                <div className="row align-items-center">
                  <div className="col-md-3 text-center">
                    <Image
                      src="/assets/img/brand1.png"
                      alt={`${brand.name} Logo`}
                      width={120}
                      height={120}
                      className="cs_brand_logo_large"
                    />
                  </div>
                  <div className="col-md-9">
                    <h1 className="cs_fs_36 cs_semibold cs_heading_color cs_mb_20">
                      {brand.name} Error Codes & Troubleshooting
                    </h1>
                    <p className="cs_fs_16 cs_mb_20 line-height-1-7">
                      {brand.description}
                    </p>
                    <div className="cs_error_stats">
                      <span className="cs_stat_item me-4">
                        <strong>{brand.errorCodes.length}</strong> Error Codes
                        Listed
                      </span>
                      <span className="cs_stat_item">
                        <strong>
                          {
                            brand.errorCodes.filter(
                              (e) => e.severity === "critical"
                            ).length
                          }
                        </strong>{" "}
                        Critical Issues
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Search and Filter */}
              <div className="cs_search_filter cs_mb_40">
                <div className="row">
                  <div className="col-md-6">
                    <div className="cs_search_box">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search error codes or descriptions..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <i className="bi bi-search"></i>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <select
                      className="form-select"
                      value={severityFilter}
                      onChange={(e) => setSeverityFilter(e.target.value)}
                    >
                      <option value="all">All Severities</option>
                      <option value="critical">Critical</option>
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Error Codes Grid */}
              <div className="cs_error_codes_grid">
                {filteredErrorCodes.length > 0 ? (
                  <div className="row">
                    {filteredErrorCodes.map((error, index) => (
                      <div key={index} className="col-12 cs_mb_30">
                        <div className="cs_error_code_card">
                          <div className="cs_error_card_header">
                            <div className="d-flex justify-content-between align-items-start">
                              <div className="cs_error_code_info">
                                <h3 className="cs_error_code cs_fs_24 cs_semibold cs_heading_color cs_mb_10">
                                  Error Code: {error.code}
                                </h3>
                                <h4 className="cs_error_description cs_fs_18 cs_mb_15">
                                  {error.description}
                                </h4>
                              </div>
                              <div className="cs_severity_badge">
                                <span
                                  className={getSeverityBadge(error.severity)}
                                >
                                  {error.severity.toUpperCase()}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="cs_error_card_body">
                            <div className="cs_error_details">
                              <h5 className="cs_fs_16 cs_semibold cs_mb_15">
                                <i className="bi bi-gear-fill me-2"></i>
                                Troubleshooting Steps:
                              </h5>
                              <p className="cs_fs_15 cs_mb_20 line-height-1-6">
                                {error.details}
                              </p>

                              {/* Action Buttons */}
                              <div className="cs_error_actions">
                                <div className="row">
                                  <div className="col-md-8">
                                    {error.severity === "critical" && (
                                      <div className="alert alert-danger cs_mb_15">
                                        <i className="bi bi-exclamation-triangle-fill me-2"></i>
                                        <strong>Critical Issue:</strong> Turn
                                        off your system immediately and contact
                                        a professional technician.
                                      </div>
                                    )}
                                    {error.severity === "high" && (
                                      <div className="alert alert-warning cs_mb_15">
                                        <i className="bi bi-exclamation-circle-fill me-2"></i>
                                        <strong>High Priority:</strong>{" "}
                                        Professional attention recommended to
                                        prevent damage.
                                      </div>
                                    )}
                                  </div>
                                  <div className="col-md-4 text-end">
                                    <a
                                      href="tel:0405133761"
                                      className="cs_btn cs_style_1 cs_fs_14 cs_semibold"
                                    >
                                      Call for Help
                                      <i className="bi bi-telephone ms-2"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="cs_no_results text-center cs_py_60">
                    <i className="bi bi-search cs_fs_48 text-muted cs_mb_20"></i>
                    <h3 className="cs_fs_24 cs_mb_15">No Error Codes Found</h3>
                    <p className="cs_fs_16 text-muted">
                      Try adjusting your search terms or filter settings.
                    </p>
                  </div>
                )}
              </div>

              {/* Professional Help CTA */}
              <div className="cs_professional_cta cs_mt_60">
                <div className="cs_card cs_style_contact cs_radius_20">
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      <h3 className="cs_fs_24 cs_semibold cs_heading_color cs_mb_20">
                        Still Having Issues with Your {brand.name} System?
                      </h3>
                      <p className="cs_fs_16 cs_mb_20">
                        Our certified technicians are experts in {brand.name}{" "}
                        air conditioning systems. We provide professional
                        diagnosis, repair, and maintenance services across
                        Melbourne.
                      </p>
                      <div className="cs_contact_points">
                        <div className="cs_contact_point d-flex align-items-center cs_mb_10">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          <span className="cs_fs_14">
                            Licensed {brand.name} technicians
                          </span>
                        </div>
                        <div className="cs_contact_point d-flex align-items-center cs_mb_10">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          <span className="cs_fs_14">
                            Same-day service available
                          </span>
                        </div>
                        <div className="cs_contact_point d-flex align-items-center cs_mb_10">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          <span className="cs_fs_14">
                            Genuine parts and warranty
                          </span>
                        </div>
                        <div className="cs_contact_point d-flex align-items-center">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          <span className="cs_fs_14">
                            24/7 emergency service
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 text-center">
                      <div className="cs_cta_contact">
                        <a
                          href="tel:0405133761"
                          className="cs_btn cs_style_1 cs_fs_16 cs_semibold cs_mb_15 w-100"
                        >
                          Call 0405 133 761
                        </a>
                        <p className="cs_fs_14 text-muted cs_mb_0">
                          Available 24/7 for emergencies
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="cs_error_codes_sidebar">
              {/* Quick Actions */}
              <div className="cs_sidebar_widget cs_mb_40">
                <div className="cs_card cs_style_6 text-center">
                  <h3 className="cs_fs_18 cs_white_color cs_mb_25">
                    Quick Actions
                  </h3>
                  <div className="cs_quick_actions">
                    <a
                      href="tel:0405133761"
                      className="cs_btn cs_style_1 cs_white_bg cs_accent_color cs_fs_14 cs_semibold w-100 cs_mb_15"
                    >
                      Emergency Call
                    </a>
                    <Link
                      href="/contact"
                      className="cs_btn cs_style_outline cs_white_color cs_fs_14 cs_semibold w-100 cs_mb_15"
                    >
                      Book Service
                    </Link>
                    <Link
                      href="/self-care"
                      className="cs_btn cs_style_outline cs_white_color cs_fs_14 cs_semibold w-100"
                    >
                      Other Brands
                    </Link>
                  </div>
                </div>
              </div>

              {/* Severity Legend */}
              <div className="cs_sidebar_widget cs_mb_40">
                <div className="cs_severity_legend p-4 bg-light rounded">
                  <h4 className="cs_fs_16 cs_semibold cs_heading_color cs_mb_20">
                    Error Severity Guide
                  </h4>
                  <div className="cs_severity_item d-flex align-items-center cs_mb_15">
                    <span className="badge bg-danger me-3">CRITICAL</span>
                    <span className="cs_fs_13">
                      Turn off system immediately
                    </span>
                  </div>
                  <div className="cs_severity_item d-flex align-items-center cs_mb_15">
                    <span className="badge bg-warning text-dark me-3">
                      HIGH
                    </span>
                    <span className="cs_fs_13">
                      Professional attention needed
                    </span>
                  </div>
                  <div className="cs_severity_item d-flex align-items-center cs_mb_15">
                    <span className="badge bg-info me-3">MEDIUM</span>
                    <span className="cs_fs_13">Schedule service soon</span>
                  </div>
                  <div className="cs_severity_item d-flex align-items-center">
                    <span className="badge bg-success me-3">LOW</span>
                    <span className="cs_fs_13">Monitor and maintain</span>
                  </div>
                </div>
              </div>

              {/* Safety Tips */}
              <div className="cs_sidebar_widget">
                <div className="cs_safety_tips p-4 border rounded">
                  <h4 className="cs_fs_16 cs_semibold cs_heading_color cs_mb_20">
                    <i className="bi bi-shield-check me-2"></i>
                    Safety First
                  </h4>
                  <ul className="cs_safety_list list-unstyled">
                    <li className="cs_mb_10">
                      <i className="bi bi-check-circle text-success me-2"></i>
                      Always turn off power before inspection
                    </li>
                    <li className="cs_mb_10">
                      <i className="bi bi-check-circle text-success me-2"></i>
                      Never attempt electrical repairs yourself
                    </li>
                    <li className="cs_mb_10">
                      <i className="bi bi-check-circle text-success me-2"></i>
                      Check for gas leaks if you smell refrigerant
                    </li>
                    <li className="cs_mb_10">
                      <i className="bi bi-check-circle text-success me-2"></i>
                      Call professionals for critical errors
                    </li>
                    <li>
                      <i className="bi bi-check-circle text-success me-2"></i>
                      Regular maintenance prevents problems
                    </li>
                  </ul>
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

export default BrandErrorCodes;
