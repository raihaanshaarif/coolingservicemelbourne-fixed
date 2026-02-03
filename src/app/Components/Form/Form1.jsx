"use client";
import { useState } from "react";

const Form1 = () => {
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
      const response = await fetch("/api/send-email", {
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

      <form
        className="row cs_row_gap_30 cs_gap_y_30"
        id="cs_form"
        onSubmit={handleSubmit}
      >
        <div className="col-sm-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            className="cs_form_field cs_radius_5"
            required
          />
        </div>
        <div className="col-sm-6">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            className="cs_form_field cs_radius_5"
            required
          />
        </div>
        <div className="col-sm-6">
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number"
            className="cs_form_field cs_radius_5"
          />
        </div>
        <div className="col-sm-6 position-relative">
          <select
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className="form-select cs_form_field cs_radius_5"
            required
          >
            <option value="">Choose Service Type</option>
            <option value="split-system">Split System Service</option>
            <option value="evaporative-cooling">Evaporative Cooling</option>
            <option value="ducted-refrigeration">Ducted Refrigeration</option>
            <option value="emergency-repair">Emergency Repair</option>
            <option value="maintenance">Regular Maintenance</option>
            <option value="installation">New Installation</option>
          </select>
        </div>
        <div className="col-12">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="6"
            placeholder="Describe your cooling system issue or service requirements..."
            className="cs_form_field"
            required
          ></textarea>
        </div>
        <div className="col-12">
          <button
            type="submit"
            className="cs_btn cs_style_1 wow fadeInRight"
            disabled={isSubmitting}
          >
            <span>{isSubmitting ? "Sending..." : "Get Quote"}</span>
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form1;
