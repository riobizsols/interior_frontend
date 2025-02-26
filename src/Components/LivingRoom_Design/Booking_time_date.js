


import React, { useState } from 'react';
import { Heading } from '../Heading';
import backgroundimag from '../../assets/Living_Room_Design/Booking Information.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "../LivingRoom_Design/Booking_time_date.css"
import { FaClock, FaChevronDown } from "react-icons/fa";
import { use } from 'framer-motion/m';
// import { Successfull} from './LivingRoom_Design';
import UsagesDesignRoom from './Usages'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Successfull from './LivingRoom_Design';


const Booking = ({ formData, setFormData }) => {
  const [currentPage, setCurrentPage] = useState("booking");
  // const [formData, setFormData] = useState({
   
  // })

  const handleSection = async (field, value) => {
    setFormData((prev) => ({
      ...prev, [field]: value
    }));
  };
  const goToNextPage =async () => {
    console.log("From data Before Navigation:", formData);
    try{
      const response = await fetch ("http://localhost:5001/booksession", {
        method:"POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({ ...formData})
      });

      const data = await response.json(); 
      if(response.ok){
        setCurrentPage("successfullybooking")
        console.log("Booking Api call Success:", data.message)
      }
      else{
        console.log("API Error:", data.error)
      }
    }catch(error){
      console.log("Error:", error)
    }
    
  }
  const goToPrevPage = () => {
    setCurrentPage("usages"); 
  };

  const renderPage = () => {
    switch (currentPage) {
      case "booking":
        return <Booking_time_date   handleSection = {handleSection} formData={formData} goToNextPage={ goToNextPage}  goToPrevPage={goToPrevPage} selectedImage={formData.image}/>;
      case "successfullybooking":
       return <Successfull formData={formData} setFormData={setFormData}/>
       
        case "usages":
          return <UsagesDesignRoom formData={formData} goToPrevPage={goToPrevPage}/>      
          default:
        return <Booking_time_date handleSection= {handleSection} formData={formData} goToNextPage={goToNextPage} goToPrevPage={goToPrevPage} selectedImage={formData.image}/>;
    }
  };

 
  return <div>{renderPage()}</div>;
}

const Booking_time_date = ({ handleSection, formData, goToNextPage,goToPrevPage }) => {
  const apartmentImg = require("../../assets/Living_Room_Design/Appartment 1.png");
  const villaImg = require("../../assets/Living_Room_Design/Villa 1.png");
  const homeImg = require("../../assets/Living_Room_Design/Booking Information.png")
  const [value, setValue] = useState(new Date());
  

  const onChange = (newDate) => {
    setValue(newDate); 
    handleSection("date", value)
  };

  const [selectTime, setSelectTime] = useState("2:00 am - 4:00 pm");
  const [isOpen, setIsOpen] = useState(false);

  const handleTimeChange = (value) => {
    setSelectTime(value);
    handleSection("timings", value)
    setIsOpen(false); // Close dropdown after selection
  };

  return (
   
      <section>
             <div className="w-full h-auto bg-black bg-cover bg-center  " 
            style={{
              transition: "background 0.5s ease-in-out",
            }}
            >
               <h1 className='text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl  text-center py-6'>
            Booking
         </h1>
             
              <img src={formData.image} alt="HouseType" />

              <div className='absolute top-40 z-10 pt-32 text-white text-center px-4 w-full md:px-8'>
         

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8  w-full ">
             <h2 className='text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl sm:text-center'>
              Timing
             </h2>
            <h2 className='text-lg sm:text-lg md:text-xl lg:text-3xl xl:text-3xl text-center sm:text-left ml-10'>
               Date
           </h2>
           </div>

          {/* Timing Dropdown & Calendar */}
           <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
             <div className="flex justify-center sm:justify-center">
               <div 
                 className=' bg-black flex gap-4 bg-opacity-30 backdrop-blur-lg  
                  w-[300px]  border border-white/25 rounded-full text-[25px]
                  outline-none focus:border-white transition-all pt-3
                  px-8  text-lg sm:text-xl md:text-xl 
                  lg:text-xl xl:text-l h-14 hover:border-gray-400 hover:bg-black/40 text-white'
                  onClick={() => setIsOpen(!isOpen)}>
                <FaClock className="absolute left-3 text-white text-lg top-4 " />
       <div className='mr-2 ml-2'> {selectTime}</div> 
        <FaChevronDown className="text-white text-lg mt-2" />
               </div>
               {isOpen && (
        <div className="absolute left-80 mt-16 w-[300px]   text-center bg-black bg-opacity-20 backdrop-blur-lg border border-white/25 rounded-[43px] shadow-lg overflow-hidden">
          {[
            "11:00 am - 1:00 pm",
            "12:30 am - 2:30 pm",
            "2:00 am - 4:00 pm",
            "3:30 am - 5:30 pm",
            "5:00 am - 7:00 pm",
            "6.00 am - 8.00 pm"
          ].map((time, index) => (
            <div
              key={index}
              className="px-6 py-3 text-white cursor-pointer transition-all duration-300 hover:bg-white/20"
              onClick={() => handleTimeChange(time)}
            >
              {time}
            </div>
          ))}
        </div>
      )}
             </div>

             <div className="flex justify-center sm:justify-start">
              <Calendar
                 onChange={onChange}
                 value={value}
                className="text-black"
               />
           </div>
           </div>
         </div>
        
            
                           <div className='fixed -bottom-8 right-1 md:bottom-20 md:right-40 flex gap-14 z-50'>
                            <button  className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#d9d9d91c] text-[#d5ba94] rounded-full shadow-md transition-all duration-300 hover:bg-[#d9d9d950] focus:outline-none focus:ring-2 focus:ring-[#d5ba94]"
                              onClick={goToPrevPage}
                               aria-label="Go to Next Page"><FaArrowLeftLong className="text-xl sm:text-2xl" /></button>
                            <button className='bg-[#d4d4d44d] w-60 text-[#D5BA94]  border border-white/25 rounded-full'  onClick={goToNextPage}
                               aria-label="Go to Next Page"> Book a free design session</button>
                            
                           </div>
            </div>
                 
    
          </section>
  );
};

export default Booking;


