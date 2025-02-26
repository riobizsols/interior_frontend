import React  from 'react'
import { useEffect } from "react";
import '../LivingRoom_Design/LivingRoom_Design.css'
import { useLocation, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from 'react-router-dom';
import days from '../../assets/45daysicon.png'
import homeicon from '../../assets/homeicon.png'
import staricon from '../../assets/staricon.png'
import certificate from '../../assets/certificateicon.png'

const DesignSession = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { image, category, RelatedPage, smallImages } = location.state || {};


  // useEffect(() => {
  //   if (!location.state) {
  //     navigate("/livingroom"); // Redirect to main page if state is missing
  //   }
  // }, [location, navigate]);
  
  return (
    <div style={{background:'black'}}>
         <section className="interior_designs_session">
         <div className='interior_head_desc'>
      <h3>{category} {RelatedPage} Design</h3>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
             Etiam ornare tempus aliquet. Pellentesque finibus, est et iaculis suscipit, dolor nulla commodo dui,
             nec ultricies arcu nisl tristique eros. Morbi eros Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet.</p>
        
        
        </div>

        <div className='liv_room_desing_img'>
          <div className="design_main_session">
        {image && <img src={image} alt="Big Design" />}
        </div> 
        <div className='design_sub_session'>
        <div className="icon_session">
        <div className='icons'>
          <img src={days} alt="" />
          <p className="text-sm">45 days or we <br />pay you rent</p>
        </div>
        <div className='icons'>
        <img src={homeicon} alt="" />
          <p className="text-sm">25,000+ happy <br />customers</p>
        </div>
        <div className='icons'>
        <img src={staricon} alt="" />
          <p className="text-sm">600+ design <br/>experts</p>
        </div>
        <div className='icons'>
        <img src={certificate} alt="" />
          <p className="text-sm">Up to 10-years <br />material warranty</p>
        </div>
      </div>
      {/* Buttons */}
      <div className="double_btn">
      <Link to="/design/Booking-Design"><button className='liv_room_button'>Book a free design session</button></Link>
        <button className=" flex items-center py-2 px-6 rounded-lg wishlist_btn ">
          <FaHeart className="heart" /> Wishlist
        </button>
      </div>
      <div className="design-social">
            <p>Share this Design</p>
            <div className="design-social-icons">
              <Link to="#"><FaFacebook/></Link>
              <Link to="#"><SiInstagram/></Link>
              <Link to="#"><IoLogoYoutube/></Link>
              <Link to="#"><FaLinkedin/></Link>
            </div>
          </div>
          <div className="related_img">
          <p>Related Designs</p>
            <div className='liv_room_desing_subimg'>
            {smallImages &&
                  smallImages.map((smallImg, index) => (
                    <img
                      key={index}
                      src={smallImg}
                      alt={`Small Design ${index}`}
                      style={{ width: 233, height: 174, margin: '10px' }}
                    />
                  ))}  
            </div>
            <button className='see_more_button' onClick={() => navigate(-1)}>See More..</button>
            </div>
            </div>   
        </div>
       
         </section>
    </div>
  )
}

export default DesignSession