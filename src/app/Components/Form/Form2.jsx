"use client";
import { useState } from "react";
import Image from "next/image";

const Form2 = () => {
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    name: "Quick Service Request",
    email: "",
    phone: "",
    message: "Quick service availability check request",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/sendmail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: "Service availability request sent successfully!",
        });
        setFormData({
          ...formData,
          service: "",
          date: "",
        });
      } else {
        setSubmitStatus({ type: "error", message: result.message });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="cs_newsletter cs_style_1">
      <div className="container">
        <div
          className="cs_newsletter_content_wrapper cs_accent_bg position-relative wow fadeInDown"
          data-wow-delay="0.6s"
        >
          <div className="cs_newsletter_content">
            <h2 className="cs_newsletter_title cs_fs_30 cs_white_color mb-0">
              Get An Free Services <br /> From Us{" "}
            </h2>

            {submitStatus && (
              <div
                className={`alert ${
                  submitStatus.type === "success"
                    ? "alert-success"
                    : "alert-danger"
                } mt-3`}
                style={{
                  color:
                    submitStatus.type === "success" ? "#155724" : "#721c24",
                }}
              >
                {submitStatus.message}
              </div>
            )}

            <form className="cs_newsletter_form" onSubmit={handleSubmit}>
              <div className="cs_form_field_wrapper position-relative">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="form-select cs_form_field"
                  required
                >
                  <option value="">Services Name</option>
                  <option value="split-system">Split System Service</option>
                  <option value="evaporative-cooling">
                    Evaporative Cooling
                  </option>
                  <option value="ducted-refrigeration">
                    Ducted Refrigeration
                  </option>
                  <option value="emergency-repair">Emergency Repair</option>
                  <option value="maintenance">Regular Maintenance</option>
                </select>
                <span className="cs_input_icon cs_white_color position-absolute">
                  <i className="bi bi-chevron-down"></i>
                </span>
              </div>
              <div className="cs_form_field_wrapper position-relative">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="cs_form_field"
                  required
                />
                <span className="cs_input_icon cs_white_color position-absolute">
                  <i className="bi bi-calendar-fill"></i>
                </span>
              </div>
              <button
                type="submit"
                className="cs_text_btn cs_style_1 cs_white_bg cs_heading_color cs_bold"
                disabled={isSubmitting}
              >
                <span className="cs_btn_text text-uppercase">
                  {isSubmitting ? "Checking..." : "Check Availability"}
                </span>
                <span className="cs_btn_icon cs_center">
                  <i className="bi bi-arrow-right"></i>
                  <i className="bi bi-arrow-right"></i>
                </span>
              </button>
            </form>
          </div>
          <div className="cs_newsletter_shape position-absolute">
            <Image
              src="/assets/img/shapes/newsletter_shape_1.svg"
              alt="img"
              width={1236}
              height={218}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form2;
