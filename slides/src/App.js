import React from 'react';
import './App.css';
import SlideDeck from './SlideDeck';
import { introSlides } from './slides/test.js';

function App() {
  return (
    <div className="App">
      <h1>Intro Slides</h1>
      <SlideDeck slides={introSlides} />

    </div>
  );
}

export default App;