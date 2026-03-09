import React, { useEffect, useRef } from "react";
import "../styles/BookingModal.css";

const BookingModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  const handleBookingRedirect = (bookingUrl) => {
    window.gtag("event", "conversion", {
      send_to: "AW-16932486314/xmN0COrWpasaEKr5hIo_",
    });

    setTimeout(() => {
      window.open(bookingUrl, "_blank", "noopener,noreferrer");
      onClose();
    }, 300);
  };

  useEffect(() => {
    const handleModalOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleModalOutsideClick);
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleModalOutsideClick);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleModalOutsideClick);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="booking-modal-overlay">
      <div className="booking-modal" ref={modalRef}>
        <button className="booking-modal-close" onClick={onClose}>
          ×
        </button>

        <h2>Wählen Sie einen Standort</h2>
        <p className="booking-modal-subtitle">
          Bitte wählen Sie den Salon aus, bei dem Sie Ihren Termin buchen möchten.
        </p>

        <div className="booking-location-list">
          <button
            className="booking-location-card"
            onClick={() =>
              handleBookingRedirect(
                "https://plus-appointment.com/customer-dashboard?business_name=Teea%20Nails%20Millenium%20City"
              )
            }
          >
            <h3>MILLENIUM CITY</h3>
            <p>Handelskai 94-96/E/11, 1200 Wien</p>
            <span>Jetzt buchen</span>
          </button>

          <button
            className="booking-location-card"
            onClick={() =>
              handleBookingRedirect(
                "https://plus-appointment.com/customer-dashboard?business_name=Teea%20Nails%20Donau%20Zentrum"
              )
            }
          >
            <h3>DONAU ZENTRUM</h3>
            <p>Wagramerstrasse 94, Top Nr. 707</p>
            <span>Jetzt buchen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;