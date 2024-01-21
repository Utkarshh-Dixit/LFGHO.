import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">TokenFlex</div>
      <ul className="nav-links">
        <li><a href="/about">About</a></li>
        <li><a href="/features">Features</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
