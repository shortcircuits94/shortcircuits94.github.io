import React, { useState, useEffect } from "react";
import "./ImageCarousel.scss";

const ImageCarousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate carousel every `interval` milliseconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, [images, interval]);

  // Navigate manually to a specific index
  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  // Navigate to previous and next slides
  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="carousel">
      <div className="carousel__slides">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel__slide ${
              index === currentIndex ? "carousel__slide--active" : ""
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="carousel__image"
            />
          </div>
        ))}
      </div>
      <button
        className="carousel__control carousel__control--prev"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="carousel__control carousel__control--next"
        onClick={nextSlide}
      >
        &#10095;
      </button>
      <div className="carousel__indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel__indicator ${
              index === currentIndex ? "carousel__indicator--active" : ""
            }`}
            onClick={() => goToIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
