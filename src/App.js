import { Route, Routes, useLocation } from "react-router-dom";
import React, { useState } from "react";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import '../src/assets/styles/base.css'
import HomePage from './Components/Home/HomePage';
import Assets from './Components/AssetsPage/Assets';
import Banner from './Components/Banner/Banner';
import Livingroom from "./Components/LivingRoom/LivingRoom";
// import BookingDesign from './Components/LivingRoom_Design/Booking_Design'
import Footer from "./Components/Footer/Footer";
import Bathroom from './Components/BathRoom/BathRoom';
import DesignSession from "./Components/LivingRoom_Design/DesignSession";
import BedRoom from "./Components/BedRoom/BedRoom";
import Kitchen from "./Components/Kitchen/Kitchen";
import HomeOffice from "./Components/HomeOffice/HomeOffice";
import Blog1 from './Components/Blogs/Blog1';
import Blogpage from './Components/Blogs/Blogpage';
import Basic_Info from "./Components/LivingRoom_Design/Basic_Infor";
import Booking_time_date from "./Components/LivingRoom_Design/Booking_time_date";
import AssetsDetails from "./Components/AssetsDetails/AssetsDetails";
import MainContact from "./Components/Contactform/MainContact";


function App() {
  const [formData, setFormData] = useState({});
  const location = useLocation();
  const page = location.pathname.replace("/", "") || "home";

  // Define pages where the banner should NOT be shown
  const noBannerPaths = [ "login", "signup", "design", "Booking-Design", "assets-details"]; // Add more pages as needed
  const noFooterPaths = [ "login", "signup", "design", "Booking-Design", "assets-details", "contactform"]; // Add more pages as needed

  // Check if the current path includes any restricted patterns
  const hideBanner = noBannerPaths.some((path) => location.pathname.includes(path));
  const hideFooter = noFooterPaths.some((path) => location.pathname.includes(path));


  return (
    <div className="App">
      {/* Render Banner only if the current path doesn't match restricted patterns */}
      {!hideBanner && <Banner page={page} />}
      <ScrollToTop/> 
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/assets' element={<Assets/>}/>
        <Route path='/livingroom' element={<Livingroom/>}/>
        <Route path='/design' element={<DesignSession/>}/>
        {/* <Route path='/design/Booking-Design' element={<BookingDesign/>}/> */}
        <Route path='/bathroom' element={<Bathroom/>}></Route>
        <Route path='/bedroom' element={<BedRoom/>}></Route>
        <Route path='/kitchen' element={<Kitchen/>}></Route>
        <Route path='/homeoffice' element={<HomeOffice/>}></Route>
        <Route path='/blog1' element={<Blog1/>}></Route>
        <Route path='/blog' element={<Blogpage/>}></Route>
        <Route path='/design/Booking-Design' element={<Basic_Info/>}/>
        <Route path="/BookingDesign" element={<Basic_Info formData={formData} setFormData={setFormData}/>}/> 
       <Route path="/assets-details" element={<AssetsDetails/>}/>
       <Route path="/contactform" element={<MainContact/>}/>

      </Routes>
      {!hideFooter && <Footer page={page}/>}
    </div>
  );
}

export default App;
