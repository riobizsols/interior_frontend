import { Route, Routes, useLocation } from "react-router-dom";
import React, { useState } from "react";
import '../src/assets/styles/base.css'
import HomePage from './Components/Home/HomePage';
import Assets from './Components/AssetsPage/Assets';
import Banner from './Components/Banner/Banner';
import Livingroom from "./Components/LivingRoom/LivingRoom";
import LivingRoomDesign from './Components/LivingRoom_Design/LivingRoomDesign'
import BookingDesign from './Components/LivingRoom_Design/Basic_Infor'
import Booking_time_date from "./Components/LivingRoom_Design/Booking_time_date";
import Basic_Info from "./Components/LivingRoom_Design/Basic_Infor";
import { Successfull } from "./Components/LivingRoom_Design/LivingRoom_Design";
import AssetsDetails from "./Page/AssetsDetails";



function App() {
  const [formData, setFormData] = useState({});
  const location = useLocation();
  const page = location.pathname.replace("/", "") || "home";

  return (
    <div className="App">
      {/* <Banner page={page} /> */}
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/assets' element={<Assets/>}/>
        <Route path='/livingroom' element={<Livingroom/>}/>
        <Route path='/livingroom-design' element={<LivingRoomDesign/>}/>
        <Route path='/livingroom-design/Booking-Design' element={<Basic_Info/>}/>
        <Route path="/BookingDesign" element={<Basic_Info formData={formData} setFormData={setFormData}/>}/>
        {/* <Route path="/SuccessfullBooking" element={<Successfull/>} /> */}
        <Route  path="/BookingTimeDate" element={<Booking_time_date/>}/>
        <Route path="/assets-details" element={<AssetsDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
