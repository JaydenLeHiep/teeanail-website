import React, { useState, useEffect, useRef } from "react";
import { BsList } from "react-icons/bs";
import { Search } from "@mui/icons-material";
import "../styles/Navbar.css";
import Logo from "../assets/logo.webp"; // đổi tên file nếu file của bạn khác

const Navbar = ({ setCurrentView, introduceStoreRef, footerRef }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const menuRef = useRef(null);
  const modalRef = useRef(null);
  const [currentView, setCurrentViewState] = useState("home");

  const toggleMenu = () => {
    if (menuOpen) {
      setClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setClosing(false);
      }, 300);
    } else {
      setMenuOpen(true);
    }
  };

  const handleNavigation = (view) => {
    setCurrentView(view);
    setCurrentViewState(view);
    setClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setClosing(false);
    }, 300);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
  };

  const openBookingModal = (e) => {
    e.preventDefault();
    setBookingModalOpen(true);
    setMenuOpen(false);
  };

  const closeBookingModal = () => {
    setBookingModalOpen(false);
  };

  const handleBookingRedirect = (bookingUrl) => {
    window.gtag("event", "conversion", {
      send_to: "AW-16932486314/xmN0COrWpasaEKr5hIo_",
    });

    setTimeout(() => {
      window.open(bookingUrl, "_blank", "noopener,noreferrer");
      setBookingModalOpen(false);
    }, 300);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        event.target.id !== "menu-icon"
      ) {
        setClosing(true);
        setTimeout(() => {
          setMenuOpen(false);
          setClosing(false);
        }, 300);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleModalOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setBookingModalOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setBookingModalOpen(false);
      }
    };

    if (bookingModalOpen) {
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
  }, [bookingModalOpen]);

  const handleScrollToSection = (ref, forceHomeView = false) => {
    if (forceHomeView && currentView !== "home") {
      setCurrentView("home");
      setCurrentViewState("home");
      setTimeout(() => {
        if (ref && ref.current) {
          ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    } else {
      if (ref && ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setMenuOpen(false);
  };

  return (
    <>
      <header>
        <a href="#" className="logo" onClick={() => handleNavigation("home")}>
          <img src={Logo} alt="Teea Nails Logo" className="logo-image" />
          <span className="logo-text">Teea Nails</span>
        </a>

        <li>
          <a
            className="book-now-nav"
            target="_blank"
            rel="noopener noreferrer"
            onClick={openBookingModal}
          >
            BUCHEN
          </a>
        </li>

        <div
          className={`navbar-toggle ${menuOpen ? "open" : ""}`}
          id="menu-icon"
          onClick={toggleMenu}
        >
          <BsList />
        </div>

        <ul
          ref={menuRef}
          className={`navbar ${menuOpen ? (closing ? "closing" : "open") : ""}`}
        >
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("services");
              }}
            >
              UNSERE SERVICES
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection(introduceStoreRef, true);
              }}
            >
              ÜBER UNS
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection(footerRef, true);
              }}
            >
              KONTAKT
            </a>
          </li>
          <li className="search-bar">
            <form onSubmit={handleSearchClick}>
              <div className="search-container">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Suchen..."
                />
                <button type="submit" className="search-icon">
                  <Search />
                </button>
              </div>
            </form>
          </li>
          {/*         <li className="language">
          <select>
            <option value="de">Deutsch</option>
            <option value="en">English</option>
          </select>
        </li> */}
        </ul>
      </header>

      {bookingModalOpen && (
        <div className="booking-modal-overlay">
          <div className="booking-modal" ref={modalRef}>
            <button className="booking-modal-close" onClick={closeBookingModal}>
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
                <p>📞 Telefon: +41 79 809 39 39</p>
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
      )}
    </>
  );
};

export default Navbar;