import './App.css';
import React from 'react';
import Home from './home';
import Unknown from './unknown';
import { Route, Routes } from 'react-router-dom';
import Navbar from './navBar';
import Game from './game';
import Scoreboard from './scoreboard';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/scoreboard" element={<Scoreboard />} />
        <Route path="*" element={<Unknown />} />
      </Routes>
    </Router>
    </div>
  );
}

var

export default App;
