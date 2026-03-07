import React, { useState, useEffect, useRef } from "react";
import { BsList } from "react-icons/bs";
import { Search } from "@mui/icons-material";
import "../styles/Navbar.css";
import Logo from "../assets/logo.webp"; // đổi tên file nếu file của bạn khác

const Navbar = ({ setCurrentView, introduceStoreRef, footerRef }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const menuRef = useRef(null);
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
    setCurrentViewState(view); // Keep track of current view
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && event.target.id !== "menu-icon") {
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

  const handleScrollToSection = (ref, forceHomeView = false) => {
    if (forceHomeView && currentView !== "home") {
      setCurrentView("home");
      setCurrentViewState("home"); // Update local state
      setTimeout(() => {
        if (ref && ref.current) {
          ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300); // Slight delay to allow the home view to load before scrolling
    } else {
      if (ref && ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setMenuOpen(false); // Close menu after clicking
  };

  return (
    <header>
      <a href="#" className="logo" onClick={() => handleNavigation("home")}>
        <img src={Logo} alt="Teea Nails Logo" className="logo-image" />
        <span className="logo-text">Teea Nails</span>
      </a>

      <li>
        <a
          className="book-now-nav"
          //href="https://plus-appointment.com/customer-dashboard?business_name=Momo%20Nail%20%26%20Beauty"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            // Google Ads conversion tracking
            window.gtag("event", "conversion", {
              send_to: "AW-16932486314/xmN0COrWpasaEKr5hIo_",
            });

            // Small delay to ensure tracking registers before navigation
            setTimeout(() => {
              window.open(
                //"https://plus-appointment.com/customer-dashboard?business_name=Momo%20Nail%20%26%20Beauty",
                "_blank",
                "noopener,noreferrer"
              );
            }, 300);

            // Prevent default behavior (since we're handling navigation)
            e.preventDefault();
            setMenuOpen(false);
          }}
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

      <ul ref={menuRef} className={`navbar ${menuOpen ? (closing ? "closing" : "open") : ""}`}>
        <li>
          <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation("services"); }}>
            UNSERE SERVICES
          </a>
        </li>
        <li>
          <a href="#" onClick={(e) => { e.preventDefault(); handleScrollToSection(introduceStoreRef, true); }}>
            ÜBER UNS
          </a>
        </li>
        <li>
          <a href="#" onClick={(e) => { e.preventDefault(); handleScrollToSection(footerRef, true); }}>
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
  );
};

export default Navbar;