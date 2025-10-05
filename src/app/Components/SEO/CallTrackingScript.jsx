"use client";
import { useEffect } from "react";

export default function CallTrackingScript() {
  useEffect(() => {
    // Google Analytics 4 Event Tracking for Phone Calls
    if (typeof window !== "undefined" && window.gtag) {
      // Track phone number clicks
      document.addEventListener("click", function (e) {
        const target = e.target.closest('a[href^="tel:"]');
        if (target) {
          const phoneNumber = target.href.replace("tel:", "");
          window.gtag("event", "phone_call", {
            event_category: "engagement",
            event_label: phoneNumber,
            value: 1,
          });
        }
      });

      // Track form submissions
      document.addEventListener("submit", function (e) {
        const form = e.target;
        if (form.tagName === "FORM") {
          window.gtag("event", "form_submit", {
            event_category: "conversion",
            event_label: window.location.pathname,
            value: 1,
          });
        }
      });

      // Track email clicks
      document.addEventListener("click", function (e) {
        const target = e.target.closest('a[href^="mailto:"]');
        if (target) {
          window.gtag("event", "email_click", {
            event_category: "engagement",
            event_label: target.href,
            value: 1,
          });
        }
      });

      // Track scroll depth for engagement
      let maxScroll = 0;
      window.addEventListener("scroll", function () {
        const scrollPercent = Math.round(
          (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
            100
        );
        if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
          maxScroll = scrollPercent;
          window.gtag("event", "scroll", {
            event_category: "engagement",
            event_label: `${scrollPercent}%`,
            value: scrollPercent,
          });
        }
      });
    }

    // Add click-to-call functionality enhancement
    const phoneNumbers = document.querySelectorAll('a[href^="tel:"]');
    phoneNumbers.forEach((phone) => {
      phone.setAttribute(
        "onclick",
        'gtag("event", "phone_call_click", { "event_category": "conversion", "event_label": "' +
          phone.href +
          '" });'
      );
    });
  }, []);

  return null;
}
