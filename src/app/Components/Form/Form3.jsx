"use client";
import { useState } from "react";

const Form3 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
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
        setSubmitStatus({ type: "success", message: result.message });
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setSubmitStatus({ type: "error", message: result.message });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {submitStatus && (
        <div
          className={`alert ${
            submitStatus.type === "success" ? "alert-success" : "alert-danger"
          } mb-4`}
        >
          {submitStatus.message}
        </div>
      )}

      <form className="row cs_row_gap_30 cs_gap_y_30" onSubmit={handleSubmit}>
        <div className="col-sm-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            className="cs_form_field cs_white_bg"
            required
          />
        </div>
        <div className="col-sm-6">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email Address"
            className="cs_form_field cs_white_bg"
            required
          />
        </div>
        <div className="col-sm-6">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number"
            className="cs_form_field cs_white_bg"
          />
        </div>
        <div className="col-sm-6">
          <select
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className="cs_form_field cs_white_bg"
            required
          >
            <option value="">Select Service</option>
            <option value="installation">Air Conditioning Installation</option>
            <option value="repair">Air Conditioning Repair</option>
            <option value="service">Air Conditioning Service</option>
            <option value="maintenance">Regular Maintenance</option>
            <option value="emergency">Emergency Service</option>
            <option value="quote">Free Quote</option>
          </select>
        </div>
        <div className="col-sm-12">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="5"
            placeholder="Message"
            className="cs_form_field cs_white_bg"
            required
          ></textarea>
        </div>
        <div className="col-sm-12">
          <button
            type="submit"
            className="cs_btn cs_style_1 cs_radius_5"
            disabled={isSubmitting}
          >
            <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
            <span>
              <i className="bi bi-arrow-right"></i>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form3;
