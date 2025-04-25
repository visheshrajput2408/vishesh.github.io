import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo or Site Name */}
      <div className="navbar-logo">
        Vishesh Rajput
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#publication">Publication</a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
