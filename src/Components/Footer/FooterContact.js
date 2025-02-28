import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { HashLink } from 'react-router-hash-link';

const FooterContact = () => {
 
  return (
    <div>
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-about">
          <h2 className='footer_logo'>IWD</h2>
          <p className='footer_logo2'>Interior Web Design</p>
          <p>
          Transforming spaces with creativity and innovation. We specialize in crafting visually stunning and functional web designs tailored for the interior design industry.      
          </p>
          <div className="footer-social">
            <p>Follow us on</p>
            <div className="social-icons">
              <Link to="#"><FaFacebook/></Link>
              <Link to="#"><SiInstagram/></Link>
              <Link to="#"><FaLinkedin/></Link>
              <Link to="#"><IoLogoYoutube/></Link>
            </div>
          </div>
        </div>

        <div className="footer_g2">
        <div className="footer-section footer-company">
          <h4>Company</h4>
          <ul>
            <li><HashLink to="/#template-container">Our Clients</HashLink></li>
            <li><Link to="/contactform">Contact</Link></li>
            <li><Link to="/blog">Blogs</Link></li>
          </ul>
        </div>

        <div className="footer-section footer-quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><HashLink to="/#features-container">Designs</HashLink></li>
            <li><Link to="/assets">Assets</Link></li>
            <li><Link to="#">Login</Link></li>
            <li><Link to="#">Sign Up</Link></li>
          </ul>
        </div>

        <div className="footer-section footer-contact">
          <h4>Contact</h4>
          <p className='footer_p'>
            <span>Address</span><br />
            15/7, XYZ Street, Main Road,<br /> Bengaluru, Karnataka - 560001
          </p>
          <p> <span>Call</span> <br /> +91 12345 67890</p>
          <p className='email'><span>Mail ID</span> <br /> <Link to="mailto:info@riobizsols.com">info@riobizsols.com</Link></p>
        </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>All Right Reserved © 2025 by <Link to="#">RIO BizSols PVT LTD</Link></p>
        <p><Link to="#">Privacy Policy</Link> | <Link to="#">Terms And Condition</Link></p>
      </div>
    </footer>
    </div>
  )
}

export default FooterContact