import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../styles/Home.css";
import TestImage from "../assets/MainPage.webp";

const Home = ({ setCurrentView }) => {
  return (
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
              <button className="home-button" onClick={() => setCurrentView('services')}>
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

            {/* ✅ Column 2 */}
            <div className="home-action-column">
              <button
                className="book-now"
                onClick={() => {
                  // Google Ads conversion tracking
                  window.gtag('event', 'conversion', {
                    'send_to': 'AW-16932486314/xmN0COrWpasaEKr5hIo_'
                  });

                  // Small delay to ensure tracking is recorded before redirection
                  setTimeout(() => {
                    window.open(
                      "https://plus-appointment.com/customer-dashboard?business_name=Momo%20Nail%20%26%20Beauty",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }, 300);
                }}
              >
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
  );
};

export default Home;