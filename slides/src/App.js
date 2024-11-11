import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import SlideDeck from './SlideDeck';
import { img } from './slides/vision/img';
import { lossless } from './slides/compression/lossless';

function Navigation() {
  return (
    <>
      <h1>Slide Decks</h1>
      <nav>
        <ul>
          <li>
            <h2>Intro to Computer Vision</h2>
            <ul>
              <li><Link to="/vision/img">Images and Colours</Link></li>
            </ul>
          </li>
          <li>
            <h2>Multimedia Systems</h2>
            <ul>
              <li><Link to="/compression/lossless">Lossless Compression</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
}

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="App">
      {isHome && <Navigation />}
      
      <Routes>
        <Route path="/vision/img" element={<SlideDeck slides={img} />} />
        <Route path="/compression/lossless" element={<SlideDeck slides={lossless} />} />
      </Routes>
    </div>
  );
}

export default App;