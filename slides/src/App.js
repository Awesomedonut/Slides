import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import SlideDeck from './SlideDeck';
import { img } from './slides/vision/img';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Slide Decks</h1>
        <nav>
          <ul>
            <li>
              <h2>Intro to Computer Vision</h2>
              <ul>
                <li><Link to="/vision/img">Images and Colours</Link></li>
              </ul>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/vision/img" element={<SlideDeck slides={img} />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;