import React, { useState, useEffect } from "react";
import "../styles/LookBook.css";
import Image1 from "../assets/LookBook1.webp";
import Image2 from "../assets/LookBook2.webp";
import Image3 from "../assets/LookBook3.webp";
import Image4 from "../assets/LookBook4.webp";
import Image5 from "../assets/LookBook5.webp";
import Image6 from "../assets/LookBook6.webp";

const LookBook = () => {
    const slides = [
        [Image1, Image2, Image3],
        [Image4, Image5, Image6],
    ];
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="lookbook-container">
            {/* Carousel Section */}
            <div className="lookbook-carousel">
                <div className="lookbook-carousel-container">
                    <div className="lookbook-carousel-slide">
                        {slides[currentSlideIndex].map((image, index) => (
                            <div key={index} className="lookbook-image-box">
                                <img
                                    src={image}
                                    alt={`Slide ${currentSlideIndex + 1} - Image ${index + 1}`}
                                    className="lookbook-carousel-image"
                                />
                            </div>
                        ))}
                    </div>
                    <button
                        className="lookbook-carousel-prev"
                        onClick={() =>
                            setCurrentSlideIndex(
                                (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
                            )
                        }
                    >
                        &lt;
                    </button>
                    <button
                        className="lookbook-carousel-next"
                        onClick={() =>
                            setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length)
                        }
                    >
                        &gt;
                    </button>
                </div>
                <div className="lookbook-carousel-dots">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`lookbook-dot ${index === currentSlideIndex ? "lookbook-active" : ""
                                }`}
                            onClick={() => setCurrentSlideIndex(index)}
                        ></span>
                    ))}
                </div>
            </div>
            {/* Text Section */}
            <div className="lookbook-text">
                <h1>Besondere Designs, große Farbauswahl</h1>
                <div className="lookbook-underline"></div>
                <p>
                    Kommen Sie in unser Studio und genießen Sie eine entspannende Pediküre und Nagelbehandlung mit besonderen Designs oder einer großen Farbauswahl.
                </p>
                <button className="lookbook-button">LOOK BOOK</button>
            </div>
        </div>
    );
};

export default LookBook;