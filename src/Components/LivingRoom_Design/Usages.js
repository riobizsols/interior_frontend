import React, { use, useState } from "react";
import "../LivingRoom_Design/Booking_Design.css";
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


const Usages = () => {
  // const [budgetData, setBudgetData] = useState(["Select One"]);

  // const handelBudgetChange = (event) =>{
  //   setBudgetData (event.target.value)
  // }

  const [currentPage, setCurrentPage] = useState("basicInfo");

  // The renderPage function should only return the JSX for the current page.
  const renderPage = () => {
    switch (currentPage) {
      case "basicInfo":
        return <UsagesDesignRoom goToNextPage={() => setCurrentPage("usages")} />;
      case "usages":
        return <Usages />;
      default:
        return <UsagesDesignRoom goToNextPage={() => setCurrentPage("usages")} />;
    }
  };

  // Render the output of the renderPage function.
  return <div>{renderPage()}</div>;
};

const UsagesDesignRoom = ({ goToNextPage }) => {
  return (
    <div>
      <section>
        <div className="book_Usages">
          <h1>Usage</h1>
          <img src={individualhome} alt="" />
          {/* <p>I’m planning to</p> */}
        </div>
        <div className="book_house">
          <div  className="book_usages_para flex">
          <img src={Moveicon} alt="Move" className="py-1 size-8" />
                      <p className="book_house_sele"> Move in</p> 
                    </div>
         
          <div className="book_usages_para1 flex">
         
          <img src={Renticon} alt="rent"   className="py-1 size-8"/>
            
          <p className="book_house_sele">Rent out</p>
          </div>

          <div className="book_usages_para2 flex">
         
          <img src={Renovate} alt="rent"   className="py-1 size-8"/>
            
          <p className="book_house_sele">Renovate</p>
          </div>
          {/* <p className="book_usages_para2">
             <img src={Renovate} alt="" className="book_house_para_icon"/>
             Renovate
          </p> */}
        </div>
        <div>
          <p className="book_location_header">I’m looking for</p>
          <div className="book_house">
          <p className="book_usages_interior">
          End to End Interiors
          </p>
          <p className="book_usages_interior1">
         
          Kitchen and Wardrobes
          </p>
          <p className="book_usages_interior2">
          Only Kitchen
          </p>
        </div>
        
        </div>
        <div className="book_cost">
            <p className="book_budget_p">I have a budget of </p>
               
            <select >
                <option value="Upto  ₹1.5 Lakhs">Upto  ₹1.5 Lakhs</option>
        <option value="">₹ 1.5 - ₹ 4 Lakhs</option>
        <option value="">₹ 4 - ₹ 8 Lakhs</option>
        <option value="">₹ 8 - ₹ 12 Lakhs</option>
                </select>
        </div>
        <div>
         
          <div className="book_next">
            <p className="book_usages_next_p1">
              <FaArrowLeftLong />
            </p>
            <p className="book_usages_next_p2" onClick={goToNextPage}>
              <FaArrowRightLong />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Usages;
