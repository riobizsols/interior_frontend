
import React, { useState } from "react";
import "../LivingRoom_Design/Booking_Design.css";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { TbBuildings } from "react-icons/tb";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import individualhome from "../../assets/Living_Room_Design/Booking Information.png";
import Usages from "./Usages";

const Booking_Design = () => {
  const [currentPage, setCurrentPage] = useState("basicInfo");

  // The renderPage function should only return the JSX for the current page.
  const renderPage = () => {
    switch (currentPage) {
      case "basicInfo":
        return <BookingDesignRoom goToNextPage={() => setCurrentPage("usages")} />;
      case "usages":
        return <Usages />;
      default:
        return <BookingDesignRoom goToNextPage={() => setCurrentPage("usages")} />;
    }
  };

  // Render the output of the renderPage function.
  return <div>{renderPage()}</div>;
};

const BookingDesignRoom = ({ goToNextPage }) => {
  return (
    <div>
      <section>
        <div className="book_header">
          <h1>Basic Information</h1>
          <img src={individualhome} alt="" />
          <p>I own a</p>
        </div>
        <div className="book_house">
          <div className=" book_house_para flex">
            <TbBuildings className="py-1 size-10"/>
            <p className="book_house_sele">Apartment</p>
            
          </div>
         
          <div className="book_house_para1 flex">
            <HiOutlineBuildingOffice className="py-1 size-10" />
            <p className="book_house_sele"> Villa</p> 
          </div>
          <div className="book_house_para2 flex">
            <GoHomeFill className="py-1 size-10"  /> 
            <p className="book_house_sele">Individual House</p>
          </div>
        </div>
        <div>
          <p className="book_location_header">My locality is</p>
          <input
            type="text"
            name="Location"
            className="book_location"
            placeholder="Enter your city"
          />
          <span className="input-location-icon">
            <FaLocationDot />
          </span>
        </div>
        <div>
          <p className="book_house_type">My Houseplan type is…</p>
          <div className="book_house_type_room">
            <p className="book_house_room">1BHK</p>
            <p className="book_house_room1">2BHK</p>
            <p className="book_house_room2">3BHK</p>
            <p className="book_house_room3">4BHK</p>
          </div>

          <div className="book_next">
            <p className="book_next_p1">
              <FaArrowLeftLong />
            </p>
            <p className="book_next_p2" onClick={goToNextPage}>
              <FaArrowRightLong />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking_Design;

