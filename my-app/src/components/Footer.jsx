import React, { forwardRef, useEffect, useState } from "react";
import "../styles/Footer.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import instagramQr from "../assets/qr_teeanail_ins.png";
import facebookQr from "../assets/qr_teenails_fb.png";

const Footer = forwardRef((props, ref) => {
  const [reviews, setReviews] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedMap, setSelectedMap] = useState("millenium");

  const mapLocations = {
    millenium: {
      title: "Millenium City",
      src: "https://www.google.com/maps?q=Handelskai+94-96,+1200+Wien&output=embed",
    },
    donau: {
      title: "Donau Zentrum",
      src: "https://www.google.com/maps?q=Wagramerstrasse+94,+1220+Wien&output=embed",
    },
  };

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const response = await fetch("data/google-reviews.json");
        const data = await response.json();

        const fiveStarReviews = data.filter((r) => r.rating === 5).slice(0, 10);

        setReviews(fiveStarReviews || []);
      } catch (err) {
        console.error("Error loading static reviews:", err);
      } finally {
        setLoading(false);
      }
    };

    loadReviews();
  }, []);

  return (
    <footer ref={ref} className="custom-footer">
      {/* Google Reviews Display
      <div className="footer-google-reviews">
        <h3 className="review-title">Was unsere Kunden sagen</h3>
        <div className="google-review-summary">
          <div className="summary-left">
            <span className="google-logo">Google</span>
            <span className="review-label">Reviews</span>
            <div className="rating-stars">
              <strong>5.0</strong>
              <span className="stars">★★★★★</span>
              <span className="total-reviews">(28)</span>
            </div>
          </div>
          <a
            href="https://www.google.com/search?q=momo+nail+olten&hl=en"
            className="google-review-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Review us on Google
          </a>
        </div>

        {loading ? (
          <p style={{ textAlign: "center" }}>Lade Bewertungen...</p>
        ) : (
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={3}
            slidesToScroll={1}
            responsive={[
              { breakpoint: 1024, settings: { slidesToShow: 2 } },
              { breakpoint: 768, settings: { slidesToShow: 1 } },
            ]}
            arrows={false}
            autoplay={true}
            autoplaySpeed={5000}
          >
            {reviews.map((review, index) => (
              <div key={index} className="review-slide">
                <div className="review-card">
                  <div className="review-header">
                    <img
                      src={`/avatars/${review.avatar_filename}`}
                      alt={review.author_name}
                      className="review-avatar"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
                      }}
                    />
                    <div>
                      <p className="review-author">{review.author_name}</p>
                      <p className="review-time">{review.relative_time_description}</p>
                    </div>
                  </div>
                  <div className="review-stars">
                    {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                  </div>
                  <p
                    title={expandedIndex === index ? "Click to collapse" : "Click to expand"}
                    className={`review-text ${expandedIndex === index ? "expanded" : ""}`}
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? null : index)
                    }
                  >
                    {review.text}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div> */}

      <div className="footer-container">
        <div className="footer-left">
          <h3>TEEA NAILS</h3>
          <h4>Öffnungszeiten</h4>
          <p>Montag bis Freitag: 9:00 - 19:00 Uhr</p>
          <p>Samstag: 9:00 - 17:00 Uhr</p>
          <h4>Kontakt</h4>
          <p>🏠 Adresse 1: MILLENIUM CITY, Handelskai 94-96/E/11, 1200 Wien</p>
          <p>📞 Telefon: +41 79 809 39 39</p>
          <hr />
          <p>🏠 Adresse 2 <strong>(COMING SOON)</strong>: DONAU ZENTRUM, Wagramerstrasse 94, Top Nr. 707 </p>
          <div className="social-qr-row">
            <a
              href="https://www.instagram.com/teea.nails.wien/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <div>
              <img
                src={instagramQr}
                alt="Instagram QR Code"
                className="social-qr"
              />
            </div>
          </div>

          <div className="social-qr-row">
            <a
              href="https://www.facebook.com/profile.php?id=61582801566346"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>

            <div>
              <img
                src={facebookQr}
                alt="Facebook QR Code"
                className="social-qr"
              />
            </div>
          </div>
        </div>

        <div className="footer-right">
          <div className="map-switch-buttons">
            <button
              className={`map-switch-button ${selectedMap === "millenium" ? "active-map-button" : ""}`}
              onClick={() => setSelectedMap("millenium")}
            >
              Millenium City
            </button>

            <button
              className={`map-switch-button ${selectedMap === "donau" ? "active-map-button" : ""}`}
              onClick={() => setSelectedMap("donau")}
            >
              Donau Zentrum
            </button>
          </div>

          <iframe
            title={mapLocations[selectedMap].title}
            src={mapLocations[selectedMap].src}
            width="100%"
            height="450"
            className="map-frame"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright TeeA Nails 2026 &nbsp;&nbsp; | &nbsp;&nbsp;
          <a href="#privacy-policy">privacy policy</a> &nbsp;&nbsp; | &nbsp;&nbsp;
          <a href="#terms-conditions">AGB - General Terms and Conditions</a>
        </p>
      </div>
    </footer>
  );
});

export default Footer;