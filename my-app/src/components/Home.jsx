import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../styles/Home.css";
import TestImage from "../assets/MainPage.webp";
import BookingModal from "./BookingModal";

const Home = ({ setCurrentView }) => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const openBookingModal = () => {
    setBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setBookingModalOpen(false);
  };

  return (
    <>
      <div className="home-container">
        {/* Background Image */}
        <div className="home-background"></div>

        {/* Content */}
        <div className="home-content">
          {/* Left Side - Image */}
          <div className="home-left">
            <img src={TestImage} alt="Nail Studio" className="home-image" />
          </div>

          {/* Right Side - Introduction Text */}
          <div className="home-right">
            <h1>Dein Nagelstudio in Wien</h1>
            <p>
              Willkommen in unserem modernen Nagelstudio in Wien.
              Mit hochwertigen Produkten, viel Liebe zum Detail und langjähriger Erfahrung
              verwandeln wir Ihre Nägel in kleine Kunstwerke.
              Genießen Sie eine entspannte Auszeit und lassen Sie sich von unserem Team verwöhnen.
            </p>

            {/* Two-column Layout for Buttons & Contact Info */}
            <div className="home-action-grid">
              {/* Column 1 */}
              <div className="home-action-column">
                <button className="home-button" onClick={() => setCurrentView("services")}>
                  DIENSTLEISTUNGEN
                </button>
                <div className="contact-item">
                  <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                  <div>
                    <p>Für weitere Informationen</p>
                    <strong>+43 681 843 13928</strong>
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="home-action-column">
                <button className="book-now" onClick={openBookingModal}>
                  BUCHEN
                </button>

                <div className="contact-item">
                  <FontAwesomeIcon icon={faInstagram} className="contact-icon" />
                  <div>
                    <p>Unser Instagram</p>
                    <strong>
                      <a
                        href="https://www.instagram.com/teea.nails.wien/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        @teea.nails.wien
                      </a>
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookingModal isOpen={bookingModalOpen} onClose={closeBookingModal} />
    </>
  );
};

export default Home;