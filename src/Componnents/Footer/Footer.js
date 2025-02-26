import React from 'react'
import { Link } from 'react-router-dom'
// import dsfffe3 from '../../Assets/dsfffe3.png'
import { FaFacebook } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <div>
    <section class="support-section">
    <div class="support-content">
      <p class="support-title">Our Support</p>
      <h1 class="main-title">Lorem ipsum is dolor sit amet, sit amet</h1>
      <p class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet.
      </p>
      <form class="subscribe-form">
        <input type="text" class="input-field" placeholder="Enter your email" />
        <button type="button" class="subscribe-button">Subscribe</button>
      </form>
    </div>
    <div class="water_mark_4">
    {/* <img src={dsfffe3} alt="dsfffe3" /> */}
    </div>
  </section>

    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-about">
          <h2 className='footer_logo'>IWD</h2>
          <p className='footer_logo2'>Interior Web Design</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet. Pellentesque finibus, est et iaculis suscipit, dolor nulla commodo dui.
          </p>
          <div className="footer-social">
            <span>Follow us on</span>
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
            <li><Link to="#">Our Clients</Link></li>
            <li><Link to="#">Contact</Link></li>
            <li><Link to="#">Blogs</Link></li>
          </ul>
        </div>

        <div className="footer-section footer-quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="#">Projects</Link></li>
            <li><Link to="#">Assets</Link></li>
            <li><Link to="#">Login</Link></li>
            <li><Link to="#">Sign Up</Link></li>
          </ul>
        </div>

        <div className="footer-section footer-contact">
          <h4>Contact</h4>
          <p className='footer_p'>
            <span>Address</span><br />
            15/7, Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit -15
          </p>
          <p> <span>Call</span> <br /> +91 12345 67890</p>
          <p><span>Mail ID</span> <br /> <Link to="mailto:info@riobizsols.com">info@riobizsols.com</Link></p>
        </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>All Right Reserved © 2024 by <Link to="#">RIO BizSols PVT LTD</Link></p>
        <p><Link to="#">Privacy Policy</Link> | <Link to="#">Terms And Condition</Link></p>
      </div>
    </footer>
    </div>
  )
}

export default Footer