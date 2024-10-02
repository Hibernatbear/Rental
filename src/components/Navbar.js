// components/Navbar.js
import React from 'react';
import './Navbar.css';
import { FaUserCircle, FaBars, FaGlobe } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="navbar-brand">AirRenterz</h1>
      </div>
      <div className="navbar-right">
        <FaGlobe className="icon" />
        <FaBars className="icon" />
        <FaUserCircle className="profile-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
