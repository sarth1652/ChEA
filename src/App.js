import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AboutUs from './AboutUs';
import Blogs from './Blogs';
import Placements from './Placements';
import './App.css'; // Make sure this path is correct

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/about-us">About Us</Link>
        <Link className="nav-link" to="/blogs">Blogs</Link>
        <Link className="nav-link" to="/placements">Placements</Link>
      </nav>
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/" element={<h1>Welcome to the Chemical Association Website</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
