import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../styles/InstagramFollow.css";
import Image1 from "../assets/Instagram1.webp";
import Image2 from "../assets/Instagram2.webp";
import Image3 from "../assets/Instagram3.webp";
import Image4 from "../assets/Instagram4.webp";

const InstagramFollow = () => {
  const leftImages = [Image1, Image2];
  const rightImages = [Image3, Image4];

  return (
    <div className="instagram-follow-container">
      {/* Left Images */}
      <div className="instagram-images left">
        {leftImages.map((image, index) => (
          <img
            key={`left-${index}`}
            src={image}
            alt={`Instagram post ${index + 1}`}
            className="instagram-image"
          />
        ))}
      </div>

      {/* Text Section */}
      <div className="instagram-text">
        <h1>
          <FontAwesomeIcon icon={faInstagram} className="instagram-icon" /> Folge uns auf Instagram
        </h1>
        <button
          className="instagram-button"
          onClick={() => {
            window.open(
              "https://www.instagram.com/teea.nails.wien/",
              "_blank",
              "noopener,noreferrer"
            );
          }}>UNSER INSTAGRAM</button>
      </div>

      {/* Right Images */}
      <div className="instagram-images right">
        {rightImages.map((image, index) => (
          <img
            key={`right-${index}`}
            src={image}
            alt={`Instagram post ${index + 1}`}
            className="instagram-image"
          />
        ))}
      </div>
    </div>
  );
};

export default InstagramFollow;