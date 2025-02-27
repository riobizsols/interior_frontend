import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../Navbar/Navbar.css"
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
  };

   // Close the menu when a link is clicked
   const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <div>
    <div className="nav">
    <div className="logo">
        I W D<br /><span>Interior Web Design</span>
    </div>

        <ul  className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><Link to='/' onClick={closeMenu}>Home</Link></li>
            <li><HashLink to="/#features-container" onClick={closeMenu}>Designs</HashLink></li>
            <li><Link to="/assets" onClick={closeMenu}>Assets</Link></li>
            <li><HashLink to="/#template-container" onClick={closeMenu}>Our Clients</HashLink></li>
            <li><Link to="/contactform" onClick={closeMenu}>Contact</Link></li>
            <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
        </ul>
        <div className={`btn ${isMenuOpen ? 'active' : ''}`}>
        <Link to=''>
        <button className="sign" onClick={closeMenu}>Sign Up</button></Link>
        <Link to=''>
        <button className="login" onClick={closeMenu}>Login</button></Link>
        </div>

         {/* Hamburger Menu (Visible on Small Devices) */}
    <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
</div>
</div>
  )
}

export default Navbar