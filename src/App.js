import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AboutUs from './AboutUs';
import Blogs from './Blogs';
import Placements from './Placements';
import logo from './download.png'; // Adjust the path if your image is in a subfolder
import './App.css';

function App() {
  // State to keep track of dark mode status
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Toggle the state
    document.body.classList.toggle('dark-mode'); // Toggle the class on body
  };

  return (
    <Router>
      <nav className="navbar">
        <div className="navbar-brand">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <span className="logo-text">ChEA</span>
        </div>
        <div className="navbar-links">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about-us">About Us</Link>
          <Link className="nav-link" to="/blogs">Blogs</Link>
          <Link className="nav-link" to="/placements">Placements</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/" element={
        <div>
          <h1>Chemical Engineering Association</h1>
          <h1>BITS Pilani</h1>
          <div className="register-box">
              <p>
                <a href="https://www.google.com/" className="register-link">Click Here </a> 
                to register for EXTROPY!
              </p>
            </div>

          </div>} />
        
      </Routes>
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </Router>
  );
}

export default App;
