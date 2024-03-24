import React, { useState } from "react";
import "./Slides.css";

const Slides = () => {
  const slides = [
    {
      title: "Slide 1",
      content: "This is the content for slide 1.",
      data: {
        // Add any data you want to hold for this slide here
      }
    },
    {
      title: "Slide 2",
      content: "This is the content for slide 2.",
      data: {
        // Add any data you want to hold for this slide here
      }
    }
    // Add as many slides as you want to the array
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = () => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  return (
    <div className="slides">
      <h1 className="slide-title">{slides[currentSlideIndex].title}</h1>
      <p className="slide-content">{slides[currentSlideIndex].content}</p>
      <button onClick={prevSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Slides;