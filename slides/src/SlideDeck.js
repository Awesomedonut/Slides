import React, { useState } from 'react';

function SlideDeck({ slides }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) => 
      prevIndex < slides.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  const currentSlide = slides[currentSlideIndex];

  return (
    <div className="slide-deck">
      <div className="slide">
        <h2>{currentSlide.title}</h2>
        <div style={{ whiteSpace: 'pre-line' }}>{currentSlide.content}</div>
        {currentSlide.image && (
          <img 
            src={`/images/${currentSlide.image}`} 
            alt={currentSlide.title}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        )}
      </div>
      <div className="controls">
        <button onClick={prevSlide} disabled={currentSlideIndex === 0}>Previous</button>
        <button onClick={nextSlide} disabled={currentSlideIndex === slides.length - 1}>Next</button>
      </div>
    </div>
  );
}

export default SlideDeck;