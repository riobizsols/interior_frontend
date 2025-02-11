// import React from "react";
// import main_banner from '../../assets/Head Image Background.png'
// import assets_banner from '../../assets/Assets image1.png'
// import Slider from "react-slick"; // Import react-slick
// import Navbar from '../Navbar/Navbar'
// import '../Banner/Banner.css'
// import { Link } from "react-router-dom";



// const Banner = ({ page }) => {
//   const bannerData = [
//     { page: "home", title: "Interior Wonders Coimbatore's Design Haven", description: "We believe that every space tells a story. With a passion for blending aesthetics and functionality, our team of expert designers crafts personalized interiors that resonate with your style and vision. From cozy homes to luxurious office spaces, we bring creativity and precision to every project.", images:[main_banner, assets_banner], button: "Talk to Our Design Consultant" },
//     { page: "assets", title: "Our Assets", description: "Explore our assets.", image:assets_banner , button: "Talk to Our Design Consultant" },
//     { page: "contact", title: "Get in Touch", description: "Contact us for more info.", image: "/images/contact-banner.jpg",  button: "Talk to Our Design Consultant" },
//   ];

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//   };

//   const currentBanner = bannerData.find((banner) => banner.page === page);

//   return (
//     <div id="banner">
//       <Navbar />
//       {page === "home" && currentBanner?.images?.length > 0 ? (
//         <Slider {...sliderSettings}>
//           {currentBanner.images.map((img, index) => (
//             <div key={index}>
//               <img
//                 className="banner_img"
//                 src={img}
//                 alt={`Slide ${index + 1}`}
//               />
//             </div>
//           ))}
//         </Slider>
//       ) : (
//         <div
//           className="banner_content">
//           <h1 className="bh">{currentBanner?.title}</h1>
//           <p>{currentBanner?.description}</p>
//           <Link to="">
//             <button className="book">{currentBanner?.button}</button>
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Banner;


import React from "react";
import main_banner from '../../assets/Head Image Background.png'
import assets_banner from '../../assets/Assets image1.png'
import Slider from "react-slick"; // Import react-slick
import Navbar from '../Navbar/Navbar'
import '../Banner/Banner.css'
import { Link } from "react-router-dom";

const Banner = ({ page }) => {
  const bannerData = [
    { page: "home", title: "Interior Wonders Coimbatore's Design Haven", description: "We believe that every space tells a story. With a passion for blending aesthetics and functionality, our team of expert designers crafts personalized interiors that resonate with your style and vision. From cozy homes to luxurious office spaces, we bring creativity and precision to every project.", image:main_banner, button: "Talk to Our Design Consultant" },
    { page: "assets", title: "Our Assets", description: "Explore our assets.", image:assets_banner , button: "Talk to Our Design Consultant" },
    { page: "livingroom", title: "Living Room", description: "Contact us for more info.", image: assets_banner,  button: "Talk to Our Design Consultant" },
    { page: "bedroom", title: "Bed Room", description: "Contact us for more info.", image: assets_banner,  button: "Talk to Our Design Consultant" },
    { page: "bathroom", title: "Bath Room", description: "Contact us for more info.", image: assets_banner,  button: "Talk to Our Design Consultant" },
    { page: "kitchen", title: "Kitchen", description: "Contact us for more info.", image: assets_banner,  button: "Talk to Our Design Consultant" },
    { page: "homeoffice", title: "Home Office", description: "Contact us for more info.", image: assets_banner,  button: "Talk to Our Design Consultant" },
    { page: "livingroomname", title: "Living Room Name", description: "Contact us for more info.", image: assets_banner,  button: "Talk to Our Design Consultant" },
    { page: "assetsdetails", title: "Assets Details", description: "Contact us for more info.", image: assets_banner,  button: "Talk to Our Design Consultant" },
    { page: "livingroom-design", title: "Living Room Design", description: "Contact us for more info.", image: assets_banner,  button: "Talk to Our Design Consultant" },
  ];

  

  const currentBanner = bannerData.find((banner) => banner.page === page);
  console.log(currentBanner.image);
  return (
    <div id="">
      <img className="banner_img" src={currentBanner.image} alt="" />
                   
      <Navbar/>

      <div className="banner_content">
        <h1 className="bh">{currentBanner.title}</h1>
         <p>{currentBanner.description}</p>
         <Link to="">
         <button className="book">{currentBanner?.button}</button>
         </Link>
       </div>
    </div>
  );
};

export default Banner;

// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import '../Banner/Banner.css'
//  import main_banner from '../../assets/Head Image Background.png'
// import Navbar from './../Navbar/Navbar';


// const Banner = ({ banners }) => {
//   const location = useLocation();
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [currentBanner, setCurrentBanner] = useState(null);

//   // Determine which banner to display based on the route
//   useEffect(() => {
//     if (banners && banners.length > 0) {
//       setCurrentBanner(banners[currentIndex]);
//     } else {
//       setCurrentBanner({
//         title: 'Welcome',
//         description: 'Default banner description.',
//         imageUrl:main_banner,
//       });
//     }
//   }, [banners, currentIndex]);

//   // Sliding effect for cycling through banners on specific pages
//   useEffect(() => {
//     if (location.pathname === '/' && banners && banners.length > 1) {
//       const interval = setInterval(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
//       }, 3000);

//       return () => clearInterval(interval);
//     }
//   }, [location.pathname, banners]);

//   if (!currentBanner) return null;

//   return (
//     <div id="banner">
//       <motion.div
//         key={currentBanner.imageUrl}
//         initial={{ opacity: 0, x: 50 }}
//         animate={{ opacity: 1, x: 0 }}
//         exit={{ opacity: 0, x: -50 }}
//         transition={{ duration: 0.8 }}
//         className="absolute inset-0 flex items-center justify-center bg-cover bg-center"
//         style={{ backgroundImage: `url(${currentBanner.imageUrl})` }}
//       >
//         <Navbar/>
//         <div className="banner_content">
//           <h1 className="text-3xl font-bold mb-4">{currentBanner.title}</h1>
//           <p className="text-lg">{currentBanner.description}</p>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Banner;