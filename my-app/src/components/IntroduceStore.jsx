import React, { useState, useEffect, useRef } from "react";
import "../styles/IntroduceStore.css";
import Image2 from "../assets/introduceStore2.webp";
import Image3 from "../assets/introduceStore3.webp";

const IntroduceStore = React.forwardRef((props, ref) => {
    const images = [Image2, Image3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div ref={ref} className="introduce-store-container"> {/* Add ref here */}
            <div className="store-text">
                <h1>Luxuriöses Ambiente, ein großzügiger</h1>
                <div className="underline"></div>
                <p>
                    Bei TeeA Nails sorgen wir dafür, dass sich jeder Besuch besonders anfühlt.
                    Ob Erstbesuch oder langjährige Stammkundschaft – wir bieten Ihnen exzellenten Service,
                    hochwertige Pflege und ein rundum verwöhnendes Erlebnis.
                </p>
                <button className="about-button">ÜBER UNS</button>
            </div>
            <div className="store-carousel">
                <div className="carousel">
                    <img
                        src={images[currentImageIndex]}
                        alt={`Carousel ${currentImageIndex + 1}`}
                        className="carousel-image"
                    />
                </div>
                <div className="carousel-dots">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentImageIndex ? "active" : ""}`}
                            onClick={() => setCurrentImageIndex(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
});

export default IntroduceStore;