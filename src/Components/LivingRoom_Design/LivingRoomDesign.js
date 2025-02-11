import React  from 'react'
import { useEffect } from "react";
import '../LivingRoom_Design/LivingRoom_Design.css'
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const LivingRoomDesign = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { image, category, smallImages } = location.state || {};


  useEffect(() => {
    if (!location.state) {
      navigate("/livingroom"); // Redirect to main page if state is missing
    }
  }, [location, navigate]);
  
  return (
    <div>
         <section className="interior_designs">
         <div className='interior_head_desc'>
        <h3>{category} Living Room Design</h3>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
             Etiam ornare tempus aliquet. Pellentesque finibus, est et iaculis suscipit, dolor nulla commodo dui,
             nec ultricies arcu nisl tristique eros. Morbi eros Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet.</p>
        
        
        </div>
        <div className='liv_room_desing_img'>
        {image && <img src={image} alt="Big Design"  style={{width:988, height:738}}/>}
           
            <div>
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
           
            {/* <img src={smallimg} alt="SmallImage" />
            <img src={smallimg} alt="SmallImage" />
            <img src={smallimg} alt="SmallImage"  />
            <img src={smallimg} alt="SmallImage"  /> */}
             
            </div>
            <Link to="/livingroom-design/Booking-Design"><button className='liv_room_button'>Book a free design session</button></Link>
            </div>   
        </div>
       
         </section>
    </div>
  )
}

export default LivingRoomDesign