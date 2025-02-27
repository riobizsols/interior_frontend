import React, {useState, useEffect} from "react";
import main_banner from '../../assets/Banners_Images/Banner_Home.png'
import assets_banner from '../../assets/Banners_Images/Banner_Assets.png'
import living_banner from '../../assets/Banners_Images/Banner_Livingroom.png'
import bedroom_banner from '../../assets/Banners_Images/Banner_Bedroom.png'
import bathroom_banner from '../../assets/Banners_Images/Banner_Bathroom.png'
import kitchen_banner from '../../assets/Banners_Images/Banner_Kitchen.png'
import homeoffice_banner from '../../assets/Banners_Images/Banner_Home_Office.png'
import blog1_banner from '../../assets/Banners_Images/Banner_Blog1.png'
import blog_banner from '../../assets/Banners_Images/Banner_Blog.png'
import contact_banner from '../../assets/Banners_Images/Banner_contactform.png'
import Navbar from '../Navbar/Navbar'
import '../Banner/Banner.css'
import { Link, useLocation } from "react-router-dom";

const Banner = ({ page }) => {
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const bannerData = [
    { page: "home", title: "Interior Wonders Coimbatore's Design Haven", description: "We believe that every space tells a story. With a passion for blending aesthetics and functionality, our team of expert designers crafts personalized interiors that resonate with your style and vision. From cozy homes to luxurious office spaces, we bring creativity and precision to every project.", image:main_banner, button: "Talk to Our Design Consultant" },
    { page: "assets", title: "Our Assets", description: "Explore our assets.", image:assets_banner , button: "Talk to Our Design Consultant" },
    { page: "livingroom", title: "Living Room", description: "Contact us for more info.", image: living_banner,  button: "Talk to Our Design Consultant" },
    { page: "bedroom", title: "Bed Room", description: "Contact us for more info.", image: bedroom_banner,  button: "Talk to Our Design Consultant" },
    { page: "bathroom", title: "Bath Room", description: "Contact us for more info.", image: bathroom_banner,  button: "Talk to Our Design Consultant" },
    { page: "kitchen", title: "Kitchen", description: "Contact us for more info.", image: kitchen_banner,  button: "Talk to Our Design Consultant" },
    { page: "homeoffice", title: "Home Office", description: "Contact us for more info.", image: homeoffice_banner,  button: "Talk to Our Design Consultant" },
    { page: "blog1", title: "Home Office", description: "Contact us for more info.", image: blog1_banner,  button: "Talk to Our Design Consultant" },
    { page: "blog", title: "Blogs", description: "Contact us for more info.", image: blog_banner,  button: "Talk to Our Design Consultant" },
    { page: "livingroomname", title: "Living Room Name", description: "Contact us for more info.", image: assets_banner,  button: "Talk to Our Design Consultant" },
    { page: "assetsdetails", title: "Assets Details", description: "Contact us for more info.", image: assets_banner,  button: "Talk to Our Design Consultant" },
    { page: "contactform", title: 'ContactPage', description: "Contact us for more info.", image: contact_banner,  button: "Talk to Our Design Consultant" },
  ];
   
  const homeBannerImages = [
    main_banner,
    assets_banner,
    living_banner,
    bathroom_banner,
    bedroom_banner,
    kitchen_banner,
    homeoffice_banner
  ];

  useEffect(() => {
    if (page === "home") {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % homeBannerImages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [page]);

  const currentBanner = bannerData.find((banner) => banner.page === page);
  const bannerImage = page === "home" ? homeBannerImages[currentIndex] : currentBanner.image;
  
    // Breadcrumbs Logic
    const generateBreadcrumbs = () => {
      const paths = location.pathname.split("/").filter(path => path);
      return paths.map((path, index) => {
        const url = `/${paths.slice(0, index + 1).join("/")}`;
        return (
          <span key={url}>
            <Link to={url} className="breadcrumb-link">{path.replace(/-/g, " ")}</Link>
            {index < paths.length - 1 && " / "}
          </span>
        );
      });
    };
  

  return (
    <div id="">
      <img className="banner_img" src={bannerImage} alt="" />
                   
      <Navbar/>

      <div className="banner_content">
         {/* Breadcrumb Section */}
      {location.pathname !== "/" && (
        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link> / {generateBreadcrumbs()}
        </div>
      )}
        <h1 className="bh">{currentBanner.title}</h1>
         <p>{currentBanner.description}</p>
         <Link to="/design/Booking-Design">
         <button className="book">{currentBanner?.button}</button>
         </Link>
       </div>
    </div>
  );
};

export default Banner;
