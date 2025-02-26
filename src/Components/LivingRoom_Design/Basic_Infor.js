
import React, { useState } from "react";
import "../LivingRoom_Design/Basic_Infor.css"
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { TbBuildings } from "react-icons/tb";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import apartmentImg from "../../assets/Living_Room_Design/Appartment 1.png";
import villaImg from "../../assets/Living_Room_Design/Villa 1.png";
import homeImg from "../../assets/Living_Room_Design/Booking Information.png";
import Usages from "./Usages";



const Basic_Info = () => {
  

  
  const [currentPage, setCurrentPage] = useState("basicInfo");
  const [formData, setFormData] = useState({
    own: "",
    locality: "",
    housePlan: "",
    image:"",
    planning:"",
    lookingFor:"",
    budget:"",
    possession:"",
    timings: "",
    date:"",
        
   
  })

  const [selectedBgImage, setSelectedBgImage] = useState(apartmentImg);
  


  const handleSelection = async(field, value) => {
    setFormData((prev) => ({
      ...prev, [field]: value
    }));
   
    if(field === "own"){
      let image;
      switch(value){
        case "Apartment":
          image=apartmentImg
          // setSelectedBgImage(apartmentImg);
        break;
        case "Villa":
          image=villaImg
          // setSelectedBgImage(villaImg);
        break;
        case "Individual House":
          // image=homeImg
          // setSelectedBgImage(homeImg);
        default:
          image=homeImg
          // setSelectedBgImage(homeImg);
          break;
      }

      setSelectedBgImage(image);
      setFormData((prev) => ({
        ...prev,
        image: image,
      }))
      console.log("Selected Image:", image); 
      console.log("Basic_Info: Updated formData ->", formData);
    }
  }

  const goToNextPage = async () => {
    console.log("Form Data Before Navigation:", formData); 
    try{
      const response = await fetch("http://localhost:5001/booksession", {
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({ ...formData}),
      });

        const data = await response.json();
        if(response.ok){
          setCurrentPage("usages");
          console.log("API Call Success:", data.message);
        }
        else{
          console.log("API Error:", data.error);
        }
    }catch(error) {
      console.log("Error:", error);

    }

  }


  

 
  const renderPage = () => {
    switch (currentPage) {
      case "basicInfo":
        return <BasicInformation handleSelection={handleSelection} formData={formData} goToNextPage={goToNextPage} selectedBgImage={selectedBgImage} setSelectedBgImage={setSelectedBgImage} />;
      case "usages":
        return <Usages  formData={formData} setFormData={setFormData} />;
      default:
        return <BasicInformation handleSelection={handleSelection} formData={formData} goToNextPage={goToNextPage} selectedImage={selectedBgImage} setSelectedBgImage={setSelectedBgImage}  />;
    }
  };

  
  return <div>{renderPage()}</div>;
};

const BasicInformation = ({ handleSelection, formData, goToNextPage, selectedBgImage }) => {

  return (
    <div>
      <section>
        <div className="w-full min-h-screen bg-black flex flex-col items-center justify-start relative">
        <div className="text-white text-center px-4 md:px-8 mb-4 z-10 pt-10">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold mb-4 font-[Georgia]">
                          Basic Information
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-white font-[Georgia]">I own a</p>
                      </div>
                            <div className="absolute top-0 left-0 w-full h-full">
                              <img src={selectedBgImage} alt="HouseType" className="object-cover w-full h-full"/>
                            </div>
                            <div className="flex gap-10 mb-4 ml-0 mt-4  justify-center items-center flex-wrap px-4 sm:w-[800px] lg:w-[1000px] w-full">
                            {[
                              { type: "Apartment", icon: <TbBuildings size={20} /> },
                              { type: "Villa", icon: <HiOutlineBuildingOffice size={20} /> },
                              { type: "Individual House", icon: <GoHomeFill size={20} /> },
                            ].map(({type, icon}) => (
                              <button
                                key={type}
                                onClick={() => handleSelection("own", type)}
                                className="flex items-center gap-2 text-white text-sm sm:text-base lg:text-lg font-medium rounded-md cursor-pointer transition-all duration-300 "
                                
                                style={{
                                  filter: "blur(10px)",
                                  backdropFilter: "blur(20px)",
                                  WebkitFilter: "blur(0.1px)",
                                  backgroundColor: formData.own === type ? "#12583581" : "#ffffff0c",
                                  fontFamily: "Montserrat",
                                  fontWeight: "500",
                                  padding: "15px 60px 15px 20px",
                                  border: "0.1px solid #ffffff3d",
                                  borderRadius: "30px",
                                  flex: 1,
                                }}
                              >
                                {icon} <span>{type}</span>
                              </button>
                            ))}
                          </div>
                          <div>
                                  <p className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-[Georgia] font-normal mt-16 mb-14">My locality is</p>
                                    <input
                                        type="text"
                                        name="Location"
                                        className="w-full  text-white text-sm sm:text-base lg:text-lg font-medium rounded-md transition-all duration-300 pl-12 pr-4 py-2"
                                          style={{
                                            filter: "blur(10px)",
                                            backdropFilter: "blur(20px)",
                                            WebkitFilter: "blur(0.1px)",
                                            backgroundColor: "#ffffff0c",
                                            fontFamily: "Montserrat",
                                            fontWeight: "500",
                                            
border: "0.1px solid #ffffff3d",
                                            borderRadius: "30px",
                                          }}
                                        onChange={(e) => handleSelection("locality", e.target.value)}
                                        placeholder="Enter your city" />
                                          <div className="relative">
                                                  <FaLocationDot className="absolute left-4 -top-6 transform -translate-y-1/2 w-5 h- text-white-400" />
                                            </div>
                           </div>
                                  <div>
                                      <p className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-[Georgia] font-normal mt-16 mb-14">My Houseplan type is…</p>
                                          <div className="flex gap-10 mb-9 ml-0 mt-4  ext-center flex-wrap px-4 sm:w-[800px] lg:w-[1000px] w-full">
                                                              {["1BHK", "2BHK", "3BHK", "4BHK"].map((type) => (
                                                                      <button
                                                                          key={type}
                                                                          onClick={() => handleSelection("housePlan", type)}
                                                                          className="gap-2 text-white text-sm sm:text-base lg:text-lg font-medium rounded-md cursor-pointer transition-all duration-300 "
                                                                          style={{
                                                                          filter: "blur(10px)",
                                                                          backdropFilter: "blur(20px)",
                                                                          WebkitFilter: "blur(0.1px)",
                                                                          backgroundColor: formData.housePlan === type ? "#12583581" : "#ffffff0c",
                                                                          fontFamily: "Montserrat",
                                                                          fontWeight: "500",
                                                                          padding: "15px 60px 15px 20px",
                                                                          border: "0.1px solid #ffffff3d",
                                                                          borderRadius: "30px",
                                                                          flex: 1}}>
                                                                                    {type}
                                                                        </button>
                                                                ))}
                                            </div>
                                      </div>
                                    
<div className="fixed -bottom-8 right-1 md:bottom-20 md:right-40 flex gap-14 z-50">
      {/* Left Arrow */}
      <button
        className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#d9d9d91c] text-[#d5ba94] rounded-full shadow-md transition-all duration-300 hover:bg-[#d9d9d950] focus:outline-none focus:ring-2 focus:ring-[#d5ba94]"
       
      >
        <FaArrowLeftLong className="text-xl sm:text-2xl" />
      </button>

      {/* Right Arrow */}
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

export default Basic_Info;

