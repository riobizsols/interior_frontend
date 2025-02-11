import { Route, Routes, useLocation } from "react-router-dom";

import '../src/assets/styles/base.css'
import HomePage from './Components/Home/HomePage';
import Assets from './Components/AssetsPage/Assets';
import Banner from './Components/Banner/Banner';
import Livingroom from "./Components/LivingRoom/LivingRoom";
import LivingRoomDesign from './Components/LivingRoom_Design/LivingRoomDesign'
import BookingDesign from './Components/LivingRoom_Design/Booking_Design'


function App() {

  const location = useLocation();
  const page = location.pathname.replace("/", "") || "home";

  return (
    <div className="App">
      <Banner page={page} />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/assets' element={<Assets/>}/>
        <Route path='/livingroom' element={<Livingroom/>}/>
        <Route path='/livingroom-design' element={<LivingRoomDesign/>}/>
        <Route path='/livingroom-design/Booking-Design' element={<BookingDesign/>}/>
      </Routes>
    </div>
  );
}

export default App;
