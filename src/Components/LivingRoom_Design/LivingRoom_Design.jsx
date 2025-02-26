import React, {useState} from "react";
import arrow6 from "../../assets/Living_Room_Design/arrow-6.svg";

import group202 from "../../assets/Living_Room_Design/group-202.png";
import group203 from "../../assets/Living_Room_Design/group-203.png";
import group from "../../assets/Living_Room_Design/group.png";
import indivualHouseImage from "../../assets/Living_Room_Design/Booking Information.png";
import Basic_Info from "./Basic_Infor";
import Booking from "./Booking_time_date"

const Successfull = ({ formData, setFormData }) => {
   const [currentPage, setCurrentPage] = useState("successfullybooking");

   const goToPrevPage = () => {
    setCurrentPage("booking"); 
  };
  const goToNextPage = () => {
    setCurrentPage("basicinfo"); 
  };
  const renderPage = () => {
    switch (currentPage){
      case "successfullybooking" :
        return <SuccessfullyBooking  formData={formData} goToNextPage={ goToNextPage}  goToPrevPage={goToPrevPage} selectedImage={formData.image} />
      case "booking" :
        return <Booking goToNextPage={ goToNextPage}  goToPrevPage={goToPrevPage} formData={formData} setFormData={setFormData}/>
      case "basicinfo":
        return <Basic_Info goToNextPage={goToNextPage} goToPrevPage={goToPrevPage} formData={formData} setFormData={setFormData}/>
        default:
      return <SuccessfullyBooking  goToNextPage={ goToNextPage}  goToPrevPage={goToPrevPage} selectedImage={formData.image}/> 

      }
  };
  return <div>{renderPage()}</div>;
}

 const SuccessfullyBooking = ({goToPrevPage, goToNextPage, formData}) => {
  return (
    <div className="bg-black flex justify-center items-center min-h-screen w-full">
      <div className="relative w-[1980px] h-[1145px]">
        {/* Background Image */}
        <img
          className="absolute w-full h-[1050px] top-[83px] left-0 object-cover"
          alt="Individual house"
          src={formData.image}
        />

        {/* Success Message */}
        <div className="absolute top-[300px] left-1/2 transform -translate-x-1/2 text-center">
          <img
            className="mx-auto w-[105px] h-[111px] mb-4"
            alt="Success Icon"
            src={group202}
          />
          <h1 className="text-white text-5xl font-bold w-full">
            Your meeting is successfully booked!
          </h1>
        </div>

        {/* Information Box */}
        <div className="absolute top-[520px] left-1/2 transform -translate-x-1/2 w-[600px] bg-black/10 rounded-[43px] border border-white/20 shadow-lg backdrop-blur-lg p-8 text-center">
          <p className="text-white text-2xl font-bold">
            Next, connect with an expert for a quick 2-minute call to:
          </p>

          <div className="flex justify-center gap-16 mt-8">
            <div className="flex flex-col items-center">
              <img className="w-[71px] h-[71px]" alt="Discuss" src={group203} />
              <p className="text-white text-xl font-bold mt-2">
                Discuss your requirements
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img className="w-[66px] h-[66px]" alt="Clarity" src={group} />
              <p className="text-white text-xl font-bold mt-2">
                Get clarity on next steps
              </p>
            </div>
          </div>
        </div>

        {/* Reschedule Button */}
        <div className="absolute bottom-[50px] left-3/4 transform -translate-x-1/2 flex items-center gap-4">
          <button className="w-[68px] h-[68px] flex items-center justify-center bg-gray-500/30 rounded-full backdrop-blur-lg"
           onClick={goToPrevPage}
                  aria-label="Go to Next Page"
          >
            <img className="w-6 h-[18px]" alt="Arrow" src={arrow6} />
          </button>

          <button className="w-[383px] h-[68px] flex items-center justify-center bg-gray-400/30 rounded-full border border-white/50 backdrop-blur-lg text-[#d5ba94] text-xl font-medium"
          onClick={goToNextPage}
                  aria-label="Go to Next Page"
          >
            Reschedule your meeting
          </button>
        </div>
      </div>
     
    </div>
  );
};
export default Successfull;