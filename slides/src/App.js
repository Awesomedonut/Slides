import React, { useState, useEffect } from 'react';
import './App.css';

const slides = [
  <div><h1>Slide 1</h1><p>This is the first slide</p></div>,
  <div><h1>Slide 2</h1><p>This is the second slide</p></div>,
  <div><h1>Slide 3</h1><p>This is the third slide</p></div>,
  // Add more slides as needed
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="App">
      <div className="slide-container">
        {slides[currentSlide]}
      </div>
      <div className="controls">
        <button onClick={prevSlide}>←</button>
        <button onClick={nextSlide}>→</button>
      </div>
    </div>
  );
}

export default App;