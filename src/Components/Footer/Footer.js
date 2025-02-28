import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import dsfffe3 from '../../assets/dsfffe3.png'
import { FaFacebook } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async () => {
    if (!validateEmail(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe. Please try again later.");
      }

      const data = await response.json();
      setMessage("Thank you for subscribing!");
      alert("Thank you for subscribing")
      console.log("Response from server:", data);
    } catch (error) {
      console.error("Error:", error);
      setMessage("There was an error with your subscription.");
      alert("There was an error with your subscription.")
    }
  };
  return (
    <div>
  <section className="support-section">
      <div className="support-content">
        <p className="support-title">Our Support</p>
        <h1 className="main-title">Ready to transform your space?</h1>
        <p className="description">
          Submit your email to begin your customized design journey today.
        </p>
        <form
          className="subscribe-form"
          onSubmit={(e) => e.preventDefault()} // Prevents form reload
        >
          <input
            type="text"
            className="input-field"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="button"
            className="subscribe-button"
            onClick={handleSubscribe}
          >
            Subscribe
          </button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
      <div className="water_mark_4">
        <img src={dsfffe3} alt="watermark" />
      </div>
    </section>

    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-about">
          <h2 className='footer_logo'>IWD</h2>
          <p className='footer_logo2'>Interior Web Design</p>
          <p>
          Transforming spaces with creativity and innovation. We specialize in crafting visually stunning and functional web designs tailored for the interior design industry.          </p>
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

export default Footer