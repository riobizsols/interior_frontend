import React, { useState,  useEffect} from "react";
import "../LivingRoom_Design/Basic_Infor.css";
import '../LivingRoom_Design/Usages.css'
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { TbBuildings } from "react-icons/tb";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Moveicon from '../../assets/Living_Room_Design/Movein_icon.png'
import Renticon from '../../assets/Living_Room_Design/Rentout_icon.png'
import Renovate from '../../assets/Living_Room_Design/Renovate_icon.png'
import { AiFillCaretDown } from "react-icons/ai";

import individualhome from "../../assets/Living_Room_Design/Booking Information.png";
import Budget from "../LivingRoom/Budget";
import Booking_time_date from "./Booking_time_date";
import { FaChevronDown } from "react-icons/fa";
import Basic_Info from "./Basic_Infor";


const Usages = ({ formData, setFormData }) => {

 
  const [currentPage, setCurrentPage] = useState("usages");
  

  useEffect(() => {
    console.log("Usages: Received formData ->", formData);
  }, [formData]);

  const handleSection =async(field, value) => {
    setFormData((prev) => ({
      ...prev, [field]: value
      
    }));
  };

  const goToNextPage = async () => {
    console.log("From Data Before Navigation:", formData);
    try{
      const response = await fetch("http://localhost:5001/booksession", {
        method:"POST",
        header:{"Content-Type":"application/json"},
        body: JSON.stringify({ ...formData}),
      });

      const data = await response.json();
      if(response.ok){
        setCurrentPage("booking")
        console.log("Usage Api call Success:", data.message)
      }
      else{
        console.log("API Error:", data.error)
      }
    }catch(error) {
      console.log("Error:", error)
    }
    
  }
  
  const goToPrevPage = () => {
    setCurrentPage("basicinfo"); // Or set to the previous page you want to go to
  };

  const renderPage = () => {
    switch (currentPage) {
      case "usages":
        return <UsagesDesignRoom   handleSection = {handleSection} formData={formData} goToNextPage={ goToNextPage}  goToPrevPage={goToPrevPage} selectedImage={formData.image}/>;
      case "booking":
        return <Booking_time_date  formData={formData}  setFormData={setFormData}/>;
        case "basicinfo":
          return <Basic_Info formData={formData} goToPrevPage={goToPrevPage}/>      
          default:
        return <UsagesDesignRoom handleSection= {handleSection} formData={formData} goToNextPage={goToNextPage} goToPrevPage={goToPrevPage} selectedImage={formData.image}/>;
        
      }
  };

 
  return <div>{renderPage()}</div>;
};




const UsagesDesignRoom = ({ handleSection, formData, goToNextPage,goToPrevPage, selectedImage}) => {
  const apartmentImg = require("../../assets/Living_Room_Design/Appartment 1.png");
  const villaImg = require("../../assets/Living_Room_Design/Villa 1.png");
  const homeImg = require("../../assets/Living_Room_Design/Booking Information.png")

  const [selectBudget, setSelectBudget] = useState("Select Budget");
  const [selectPossession, setSelectPossession] = useState("Select Possession")
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenposs, setIsOpenposs] = useState(false);

  const handleBudget = (value) => {
    setSelectBudget(value);
    setIsOpen(false); 
    handleSection("budget", value);
  }; 

  const handlePossession =(value) => {
    setSelectPossession(value);
    setIsOpenposs(false);
    handleSection("possession", value);
  }

  return (
    <div>
      <section>
        <div className="w-full min-w-full min-h-screen bg-black flex flex-col items-center justify-start relative">
        <div className="text-white text-center px-4 md:px-8 mb-4 z-10 pt-10">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold mb-4 font-[Georgia]">
                         Usages
                        </h1>
                        <p className="text-lg sm:text-xl mt-14 md:text-2xl lg:text-3xl font-normal text-white font-[Georgia]">I’m planning to</p>
                      </div>
                      <div className="absolute top-0 left-0 w-full h-full">
                              {/* <img src={formData.own === "Apartment" ? apartmentImg :
    formData.own === "Villa" ? villaImg :
    homeImg} alt="HouseType" className="object-cover w-full h-full"/> */}
    <img src={formData.image} alt="HouseType" className="object-cover w-full h-full"/>
   

                            </div>
          
                                  <div className="flex gap-10 mb-4 ml-0 mt-4  justify-center items-center flex-wrap px-4 sm:w-[600px] lg:w-[800px] w-full">
                                      {[
                                        { type: "Move in", image: Moveicon },
                                        { type: "Rent Out", image: Renticon },
                                        { type: "Renovate", image: Renovate },
                                      ].map(({type, image}) => (
                                        <button
                                          key={type}
                                          onClick={() => handleSection("planning", type)}
                                          className="flex items-center gap-2 text-white text-sm sm:text-base lg:text-lg font-medium rounded-md cursor-pointer transition-all duration-300 "
                                          // style={{
                                          //   backgroundColor: formData.own === type ? "#12583581" : "#ffffff0c",
                                          // }}
                                          style={{
                                            filter: "blur(10px)",
                                            backdropFilter: "blur(20px)",
                                            WebkitFilter: "blur(0.1px)",
                                            backgroundColor: formData.planning === type ? "#12583581" : "#ffffff0c",
                                            fontFamily: "Montserrat",
                                            fontWeight: "500",
                                            fontSize:"24px",
                                            padding: "15px 60px 15px 20px",
                                            border: "0.1px solid #ffffff3d",
                                            borderRadius: "30px",
                                            flex: 1,
                                          }}
                                        >
                                          <img src={image} alt={type} className="w-7 h-5" /> <span>{type}</span>
                                        </button>
                                      ))}
                                    </div>

                                    <p className="text-lg sm:text-xl mt-14 mb-4 md:text-2xl lg:text-3xl font-normal text-white font-[Georgia] ">My locality is</p>
                                  

                                    <div className="flex gap-10 mb-4 ml-0 mt-4  justify-center items-center flex-wrap px-4 sm:w-[800px] lg:w-[1200px] w-full">
                                      {[
                                        { type: "End-to-End Interiors" },
                                        { type: "Kitchen & Wardrobe"},
                                        { type: "Only Kitchen"},
                                      ].map(({type}) => (
                                        <button
                                          key={type}
                                          onClick={() => handleSection("lookingFor", type)}
                                          className="flex items-center gap-2 text-white  font-medium rounded-md cursor-pointer transition-all duration-300 "
                                          
                                          style={{
                                            filter: "blur(10px)",
                                            backdropFilter: "blur(20px)",
                                            WebkitFilter: "blur(0.1px)",
                                            backgroundColor: formData.lookingFor === type ? "#12583581" : "#ffffff0c",
                                            fontFamily: "Montserrat",
                                            fontWeight: "500",
                                            fontSize:"22px",
                                            padding: "15px 10px 15px 20px",
                                            border: "0.1px solid #ffffff3d",
                                            borderRadius: "30px",
                                            flex: 1,
                                          }}
                                        >
                                         {type}
                                        </button>
                                      ))}
                                    </div>
        </div>
       
        <div>
        
        </div>
         <div className='absolute top-[30rem]  z-10 pt-32 text-white text-center px-4 w-[90%] md:px-8'>
         
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8  w-full ">
             <h2 className='text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl sm:text-right'>
             I have a budget of
             </h2>
            <h2 className='text-lg  sm:text-lg  md:text-xl lg:text-3xl xl:text-3xl text-center sm:text-center'>
            Possession in 
           </h2>
           </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 w-full ">
              <div className="bg-black flex gap-4 bg-opacity-30 backdrop-blur-lg  
                  w-[300px] ml-[550px] border border-white/25 rounded-full text-[25px]
                  outline-none focus:border-white transition-all pt-3
                  px-8  text-lg sm:text-xl md:text-xl 
                  lg:text-xl xl:text-l h-14 hover:border-gray-400 hover:bg-black/40 text-white"
                  onClick={() => setIsOpen(!isOpen)}>
                    <div>{selectBudget}</div>
                    <ion-icon name="caret-down-outline" className="text-white text-lg mt-2 ml-5"></ion-icon>
                     <FaChevronDown  />
              </div>
               {isOpen && (
      
        <div className="absolute left-[570px] mt-16 w-[300px]  max-h-[150px] overflow-y-auto text-center bg-black bg-opacity-40 backdrop-blur-lg border border-white/25 rounded-[43px] shadow-lg scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-black">
        {[
          "Upto ₹ 1.5 Lakhs",
          "₹ 1.5 - ₹ 4 Lakhs",
          "₹ 4 - ₹ 8 Lakhs",
          "₹ 8 - ₹ 12 Lakhs"
        ].map((budget, index) => (
          <div
            key={index}
            className="relative px-6 py-3 text-white cursor-pointer transition-all duration-300 hover:bg-white/20 after:content-[''] after:absolute after:left-1/4 after:bottom-0 after:w-1/2 after:border-b after:border-white/25 last:after:border-b-0"
            onClick={() => handleBudget(budget)}
          >
            {budget}
          </div>
        ))}
      </div>
      

      )}
             <div className="bg-black flex gap-4 bg-opacity-30 backdrop-blur-lg  
                  w-[300px] ml-[250px] border border-white/25 rounded-full text-[25px]
                  outline-none focus:border-white transition-all pt-3
                  px-8  text-lg sm:text-xl md:text-xl 
                  lg:text-xl xl:text-l h-14 hover:border-gray-400 hover:bg-black/40 text-white"
                  onClick={() => setIsOpenposs(!isOpen)}>
                    <div>{selectPossession}</div>
                    {/* <ion-icon name="caret-down-outline" className="text-white text-lg mt-2 ml-5"></ion-icon> */}
                     <FaChevronDown  />
              </div>
               {isOpenposs && (
      
        <div className="absolute left-[1120px] mt-16 w-[300px]  text-center bg-black bg-opacity-40 backdrop-blur-lg border border-white/25 rounded-[43px] shadow-lg ">
        {[
          "Already in possession",
          "0-3 Months",
          "3-6 Months"
          
        ].map((possession, index) => (
          <div
            key={index}
            className="relative px-6 py-3 text-white cursor-pointer transition-all duration-300 hover:bg-white/20 after:content-[''] after:absolute after:left-1/4 after:bottom-0 after:w-1/2 after:border-b after:border-white/25 last:after:border-b-0"
            onClick={() => handlePossession(possession)}
          >
            {possession}
          </div>
        ))}
      </div>
      

      )}
            </div>
           </div>
         
       
        <div>
         
          {/* <div className="book_next">
            <p className="book_usages_next_p1">
              <FaArrowLeftLong />
            </p>
            <p className="book_usages_next_p2" onClick={goToNextPage}>
              <FaArrowRightLong />
            </p>
          </div>  */}
          
          <div className="fixed -bottom-8 right-1 md:bottom-20 md:right-40 flex gap-14 z-50">
               
                <button
                  className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#d9d9d91c] text-[#d5ba94] rounded-full shadow-md transition-all duration-300 hover:bg-[#d9d9d950] focus:outline-none focus:ring-2 focus:ring-[#d5ba94]"
                 onClick={goToPrevPage}
                  aria-label="Go to Next Page"
                >
                  <FaArrowLeftLong className="text-xl sm:text-2xl" />
                </button>
          
               
                <button
                  className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#d9d9d975] text-[#d5ba94] rounded-full shadow-md transition-all duration-300 hover:bg-[#d9d9d9a0] focus:outline-none focus:ring-2 focus:ring-[#d5ba94]"
                  onClick={goToNextPage}
                  aria-label="Go to Next Page"
                >
                  <FaArrowRightLong className="text-xl sm:text-2xl" />
                </button>
              </div>
          
        </div>
      </section>
    </div>
  );
};

export default Usages;
