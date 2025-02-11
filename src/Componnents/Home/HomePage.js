import React, {useRef} from 'react'
import '../Home/HomePage.css'
import main_banner from '../../Assets/Head Image Background.png'
import mask_img_1 from '../../Assets/Mask group (1).png'
import mask_img_2 from '../../Assets/Mask group (2).png'
import mask_img_3 from '../../Assets/Mask group (3).png'
import mask_img from '../../Assets/Mask group.png'
import image_18 from '../../Assets/image 18.png'
import image_19 from '../../Assets/image 19.png'
import dsfffe1 from '../../Assets/dsfffe1.png'
import dsfffe2 from '../../Assets/dsfffe2.png'
import group_5 from '../../Assets/Group5.png'
import back_img from '../../Assets/background image3.png'
import isomatric_home from '../../Assets/isometric-house.png'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import dvdsv from '../../Assets/dvdsv 1.png'
import image1 from "../../Assets/dsvfv.png";
import image2 from "../../Assets/vfdsvf.png";
import image3 from "../../Assets/vyhgv.png";
import image4 from "../../Assets/dsvfv.png";
import image5 from "../../Assets/vfdsvf.png";
import image6 from "../../Assets/vyhgv.png";
import image7 from "../../Assets/vfdsvf.png";
import image8 from "../../Assets/vyhgv.png";
import image9 from "../../Assets/Pngtrer.png"
import image10 from "../../Assets/download1.png"
import image11 from "../../Assets/Pngtree.png"
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'


const HomePage = () => {

  // Use Link reference to control the scroll
  const carouselRef = useRef(null);
  const carouselRef2 = useRef(null);
  const carouselRef3 = useRef(null);


  // Images Array
  const images = [
    { src: image1, title: "Company Name", description: "Lorem ipsum is dolor" },
    { src: image2, title: "Company Name", description: "Lorem ipsum is dolor" },
    { src: image3, title: "Company Name", description: "Lorem ipsum is dolor" },
    { src: image4, title: "Company Name", description: "Lorem ipsum is dolor" },
    { src: image5, title: "Company Name", description: "Lorem ipsum is dolor" },
    { src: image6, title: "Company Name", description: "Lorem ipsum is dolor" },
    { src: image7, title: "Company Name", description: "Lorem ipsum is dolor" },
    { src: image8, title: "Company Name", description: "Lorem ipsum is dolor" },
  ];

  const images2 = [image9, image10, image11];

  const images3 = [
    { src: image1, date:"16th Nov 2024", title: "Lorem ipsum is dolor", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloremque ut, cumque ratione recusandae quae fugiat officiis quasi, dolores similique aliquam," },
    { src: image2, date:"24th sept 2024", title: "Lorem ipsum is dolor", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloremque ut, cumque ratione recusandae quae fugiat officiis quasi, dolores similique aliquam," },
    { src: image3, date:"22th Apr 2024 ", title: "Lorem ipsum is dolor", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloremque ut, cumque ratione recusandae quae fugiat officiis quasi, dolores similique aliquam," },
    { src: image4, date:"19th Mar 2024", title: "Lorem ipsum is dolor", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloremque ut, cumque ratione recusandae quae fugiat officiis quasi, dolores similique aliquam," },
    { src: image5, date:"11th Jun 2024", title: "Lorem ipsum is dolor", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloremque ut, cumque ratione recusandae quae fugiat officiis quasi, dolores similique aliquam," },
    { src: image6, date:"10th Dec 2024", title: "Lorem ipsum is dolor", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloremque ut, cumque ratione recusandae quae fugiat officiis quasi, dolores similique aliquam," },
    { src: image7, date:"27th July 2024", title: "Lorem ipsum is dolor", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloremque ut, cumque ratione recusandae quae fugiat officiis quasi, dolores similique aliquam," },
    { src: image8, date:"18th Feb 2024", title: "Lorem ipsum is dolor", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloremque ut, cumque ratione recusandae quae fugiat officiis quasi, dolores similique aliquam," },
  ];

   // Scroll Left with Loop Logic
   const scrollLeft = () => {
    const carousel = carouselRef.current;
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

    if (carousel.scrollLeft === 0) {
      // Jump to the end
      carousel.scrollLeft = maxScrollLeft;
    } else {
      // Scroll left by one image width
      carousel.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Scroll Right with Loop Logic
  const scrollRight = () => {
    const carousel = carouselRef.current;
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

    if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
      // Jump to the start
      carousel.scrollLeft = 0;
    } else {
      // Scroll right by one image width
      carousel.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
   const scrollLeft2 = () => {
    const carousel = carouselRef2.current;
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

    if (carousel.scrollLeft === 0) {
      // Jump to the end
      carousel.scrollLeft = maxScrollLeft;
    } else {
      // Scroll left by one image width
      carousel.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Scroll Right with Loop Logic
  const scrollRight2 = () => {
    const carousel = carouselRef2.current;
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

    if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
      // Jump to the start
      carousel.scrollLeft = 0;
    } else {
      // Scroll right by one image width
      carousel.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

   // Scroll Left with Loop
   const scrollLeft3 = () => {
    if (carouselRef3.current.scrollLeft === 0) {
      carouselRef3.current.scrollLeft =
        carouselRef3.current.scrollWidth - carouselRef3.current.clientWidth;
    } else {
      carouselRef3.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Scroll Right with Loop
  const scrollRight3 = () => {
    if (
      carouselRef3.current.scrollLeft + carouselRef3.current.clientWidth >=
      carouselRef3.current.scrollWidth
    ) {
      carouselRef3.current.scrollLeft = 0;
    } else {
      carouselRef3.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div>
        <div id="banner">
            <img className='banner_img' src={main_banner} alt="main_banner" />

            <Navbar/>

            <div className="banner_content">
                <h1 className="bh">Lorem ipsum dolor sit amet.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloremque ut, cumque ratione recusandae quae fugiat officiis quasi, dolores similique aliquam,</p>
                <Link to=''>
                <button className="book">Book Now</button></Link>
            </div>
        </div>
    <div id="about-us-container">
      <div className="about-us-left">
        <h3>About Us</h3>
        <h1>Lorem ipsum dolor sit amet, consectetur sit amet, consect</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet. 
          Pellentesque finibus, est et iaculis suscipit, dolor nulla commodo dui, nec ultricies arcu 
          nisl tristique eros. Morbi eros
        </p>
        <div className="water_mark">
        <img src={image_18} alt="image_18" />
        </div>
        <div className="stats">
          <div>
            <h2>100+</h2>
            <p>Lorem ipsum</p>
          </div>
          <div>
            <h2>85+</h2>
            <p>Lorem ipsum</p>
          </div>
          <div>
            <h2>185+</h2>
            <p>Lorem ipsum</p>
          </div>
          <div>
            <h2>255+</h2>
            <p>Lorem ipsum</p>
          </div>
        </div>
        <button className="contact-button">Contact us</button>
      </div>
      <div className="about-us-right">
        <div className="image-grid">
          <div className="large-image">
            <img src={mask_img} alt="Interior 1" />
          </div>
          <div className="small-images">
            <img src={mask_img_1} alt="Interior 2" />
            <div className="under_img">
            <img className='mask_img_2' src={mask_img_2} alt="Interior 3" />
            <img className='mask_img_3' src={mask_img_3} alt="Interior 4" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="our-process-container">
      <div className="process-image">
        <img src={group_5} alt="Interior Design" />
      </div>
      <div className="process-content">
        <h3>Our Process</h3>
        <h1>Lorem ipsum is dolor sit amet, sit amet</h1>
        <div className="steps">
            <div className="line"></div>
            <div className="water_mark_2">
        <img src={image_19} alt="image_19" />
        </div>
          <div className="step">
            <h4>Step 1</h4>
            <h2>Lorem ipsum is dolor</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet. 
              Pellentesque finibus, est et iaculis suscipit, dolor nulla commodo dui, nec ultricies 
              arcu nisl tristique eros. Morbi eros est, pulvinar eget ornare ac, ultrices eget risus.
            </p>
          </div>
          <div className="step">
            <h4>Step 2</h4>
            <h2>Lorem ipsum is dolor</h2>
          </div>
          <div className="step">
            <h4>Step 3</h4>
            <h2>Lorem ipsum is dolor</h2>
          </div>
          <div className="step">
            <h4>Step 4</h4>
            <h2>Lorem ipsum is dolor</h2>
          </div>
        </div>
        <button className="contact-button">Contact Us</button>
      </div>
    </div>

    <div className="room-selector-container">
      <div className="room-image">
      <img src={back_img} alt="Living Room" />
      </div>
      <div className="room-buttons">
        <button className="room-button living-room">Living Room</button>
        <button className="room-button bed-room">Bed Room</button>
        <button className="room-button master-bedroom">Master Bed Room</button>
        <button className="room-button kitchen">Kitchen</button>
      </div>
    </div>

    <div className="features-container">
      <div className="features-text">
        <h2>Features</h2>
        <h1>Lorem ipsum is dolor sit amet, sit amet</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus 
          aliquet. Pellentesque finibus, est et iaculis suscipit, dolor nulla commodo dui, 
          nec ultricies arcu nisl tristique eros. Morbi eros est, pulvinar eget ornare ac, 
          ultrices eget risus.
        </p>
        <div className="features-list">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="feature-item">
              <div className="icon">⭐</div>
              <div>
                <h3>Lorem ipsum is dolor</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus 
                  aliquet. Pellentesque finibus, est et iaculis suscipit, dolor nulla commodo dui, 
                  nec ultricies arcu nisl.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="features-image">
        <img
          src={dvdsv}
          alt="Feature Illustration"
        />
      </div>
    </div>

    <div className="projects-container">
      <div className="main_text">
      <h2>Project</h2>
      <h1>Lorem ipsum is dolor sit amet, sit amet</h1>
      </div>
      <div className="carousel-container">
      {/* Left Arrow */}
      <button className="scroll-button left" onClick={scrollLeft}>
      <IoIosArrowBack />
      </button>
      
      <div className="carousel" ref={carouselRef}>
        {images.map((img, index) => (
          <div key={index} className="carousel-item">
            <img src={img.src} alt={`Image ${index + 1}`} className="carousel-image" />
            <div className="image-text">
              <h3>{img.title}</h3>
              <p>{img.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button className="scroll-button right" onClick={scrollRight}>
      <IoIosArrowForward />
      </button>
    </div>

      <div className="carousel-container">
      {/* Left Arrow */}
      <button className="scroll-button left" onClick={scrollLeft2}>
      <IoIosArrowBack />
      </button>
      
      <div className="carousel" ref={carouselRef2}>
        {images.map((img, index) => (
          <div key={index} className="carousel-item">
            <img src={img.src} alt={`Image ${index + 1}`} className="carousel-image" />
            <div className="image-text">
              <h3>{img.title}</h3>
              <p>{img.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button className="scroll-button right" onClick={scrollRight2}>
      <IoIosArrowForward />
      </button>
    </div>
    <div className="view_btn">
      <button className="view-all-btn">View All Projects</button>
      </div>
    </div>

    <div className="carousel-container-new">
      <div className="carousel-header">
        <div className="carousel_head1">
        <h2>Project</h2>
        <h1>Lorem ipsum is dolor sit amet, sit amet</h1>
        </div>
        <div className="carousel_para">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare
          tempus aliquet. Pellentesque finibus, est et iaculis suscipit, dolor
          nulla commodo dui, nec ultricies arcu nisi tristique eros.
        </p>
        </div>
      </div>
      <div className="carousel-wrapper">
        <button className="carousel-btn left-btn" onClick={scrollLeft3}>
          &#8249;
        </button>
        <div className="carousel-track" ref={carouselRef3}>
          {images2.map((img, index) => (
            <div className="carousel-item2" key={index}>
              <img src={img} alt={`Item ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-btn right-btn" onClick={scrollRight3}>
          &#8250;
        </button>
      </div>
      <button className="view-assets-btn">View All Assets</button>
    </div>

    <div className="template-container">
      <div className="content-section">
        <h3 className="project-title">Project</h3>
        <h1 className="main-heading">Lorem ipsum is dolor sit amet, sit amet</h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare
          tempus aliquet. Pellentesque finibus, est et iaculis suscipit, dolor
          nulla commodo dui, nec ultricies arcu nisi tristique eros. Morbi eros
          est, pulvinar eget ornare ac, ultricies eget risus.
        </p>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare
          tempus aliquet. Pellentesque finibus, est et iaculis suscipit, dolor
          nulla commodo dui, nec ultricies arcu nisi tristique eros. Morbi eros
          est, pulvinar eget ornare ac, ultricies eget risus.
        </p>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare
          tempus aliquet. Pellentesque finibus, est et iaculis suscipit, dolor
          nulla commodo dui, nec ultricies arcu nisi tristique eros. Morbi eros
          est, pulvinar eget ornare ac, ultricies eget risus.
        </p>
        <div className="client-logo-section">
          <h3>Client Logo</h3>
          <p className="client-name">Lorem ipsum is dolor</p>
          <p className="company-name">Company Name</p>
          <button className="view-clients-btn">View All Our Clients</button>
        </div>
      </div>
     
      <div className="image-section">
        <img
          src={isomatric_home}
          alt="Project"
          className="project-image"
        />
      </div>
      <div className="water_mark_3">
        <img className='small' src={dsfffe1} alt="dsfffe1" />
        <img className='big' src={dsfffe2} alt="dsfffe2" />
        </div>
      <div className="arrow-buttons">
        <button className="arrow-btn left-arrow">&#8249;</button>
        <button className="arrow-btn right-arrow">&#8250;</button>
      </div>
    </div>

    <div className="projects-container-2">
      <div className="main_text">
      <h2>Blogs</h2>
      <h1>Lorem ipsum is dolor sit amet, sit amet</h1>
      </div>
      <div className="carousel-container">
      {/* Left Arrow */}
      <button className="scroll-button left" onClick={scrollLeft}>
      <IoIosArrowBack />
      </button>
      
      <div className="carousel" ref={carouselRef}>
        {images3.map((img, index) => (
          <div key={index} className="carousel-item">
            <img src={img.src} alt={`Image ${index + 1}`} className="carousel-image" />
            <div className="date">
              <p>{img.date}</p>
            </div>
            <div className="image-text2">
              <h3>{img.title}</h3>
              <p>{img.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button className="scroll-button right" onClick={scrollRight}>
      <IoIosArrowForward />
      </button>
    </div>

    <div className="view_btn">
      <button className="view-all-btn">View All Blogs</button>
      </div>
    </div>

    <Footer/>

    </div>
  )
}

export default HomePage