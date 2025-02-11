import React, {useState} from 'react'
import '../Home/HomePage.css'
import mask_img_1 from '../../assets/Mask group (1).png'
import mask_img_2 from '../../assets/Mask group (2).png'
import mask_img_3 from '../../assets/Mask group (3).png'
import mask_img from '../../assets/Mask group.png'
import home_banner2 from '../../assets/Header living image 1.png'
import image_18 from '../../assets/image 18.png'
import image_19 from '../../assets/image 19.png'
import dsfffe1 from '../../assets/dsfffe1.png'
import dsfffe2 from '../../assets/dsfffe2.png'
import group_5 from '../../assets/Group5.png'
import our_process_1 from '../../assets/our-process-1.png'
import our_process_2 from '../../assets/our-process-2.png'
import our_process_3 from '../../assets/our-process-3.png'
import back_img from '../../assets/background image3.png'
import back_img_1 from '../../assets/BedRoom 1.png'
// import back_img_2 from '../../assets/.png'
import back_img_3 from '../../assets/Kitchen 1.png'
import isomatric_home from '../../assets/isometric-house.png'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import dvdsv from '../../assets/dvdsv 1.png'
import image1 from "../../assets/dsvfv.png";
import image2 from "../../assets/vfdsvf.png";
import image3 from "../../assets/vyhgv.png";
import image4 from "../../assets/dsvfv.png";
import image5 from "../../assets/vfdsvf.png";
import image6 from "../../assets/vyhgv.png";
import image7 from "../../assets/vfdsvf.png";
import image8 from "../../assets/vyhgv.png";
import image9 from "../../assets/Pngtrer.png"
import image10 from "../../assets/download1.png"
import image11 from "../../assets/Pngtree.png"
import image12 from "../../assets/11444629.png"
import image13 from "../../assets/closed-door-png-transparent-images.png"
import image14 from "../../assets/GoldenBackground.png"
import image15 from "../../assets/pngegg1.png"
import image16 from "../../assets/pngwing.com1.png"
import image17 from "../../assets/scsac1.png"
import image18 from "../../assets/vdsdvd1.png"
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Counter from "../Pages/Counter";
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'


const HomePage = () => {

  const imagess = [image9, image10, image11, image12, image13, image14, image15, image16, image17, image18];
  const [currentIndex, setCurrentIndex] = useState(2); // Center image
  const [activeStep, setActiveStep] = useState(1);
  const [currentRoom, setCurrentRoom] = useState("livingRoom");
  const [currentImage, setCurrentImage] = useState(back_img);


  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagess.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imagess.length - 1 ? 0 : prevIndex + 1
    );
  };


  const toggleStep = (step) => {
    setActiveStep((prevStep) => (prevStep === step ? null : step));
  };

  
    // Map each button to its corresponding image
    const roomImages = {
      livingRoom: back_img,
      bedRoom: back_img_1,
      masterBedroom: back_img_1,
      kitchen: back_img_3,
    };


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




  //  // Scroll Left with Loop Logic
  //  const scrollLeft = () => {
  //   const carousel = carouselRef.current;
  //   const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

  //   if (carousel.scrollLeft === 0) {
  //     // Jump to the end
  //     carousel.scrollLeft = maxScrollLeft;
  //   } else {
  //     // Scroll left by one image width
  //     carousel.scrollBy({ left: -300, behavior: "smooth" });
  //   }
  // };

  // // Scroll Right with Loop Logic
  // const scrollRight = () => {
  //   const carousel = carouselRef.current;
  //   const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

  //   if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
  //     // Jump to the start
  //     carousel.scrollLeft = 0;
  //   } else {
  //     // Scroll right by one image width
  //     carousel.scrollBy({ left: 300, behavior: "smooth" });
  //   }
  // };
  //  const scrollLeft2 = () => {
  //   const carousel = carouselRef2.current;
  //   const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

  //   if (carousel.scrollLeft === 0) {
  //     // Jump to the end
  //     carousel.scrollLeft = maxScrollLeft;
  //   } else {
  //     // Scroll left by one image width
  //     carousel.scrollBy({ left: -300, behavior: "smooth" });
  //   }
  // };

  // // Scroll Right with Loop Logic
  // const scrollRight2 = () => {
  //   const carousel = carouselRef2.current;
  //   const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

  //   if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
  //     // Jump to the start
  //     carousel.scrollLeft = 0;
  //   } else {
  //     // Scroll right by one image width
  //     carousel.scrollBy({ left: 300, behavior: "smooth" });
  //   }
  // };

  //  // Scroll Left with Loop
  //  const scrollLeft3 = () => {
  //   if (carouselRef3.current.scrollLeft === 0) {
  //     carouselRef3.current.scrollLeft =
  //       carouselRef3.current.scrollWidth - carouselRef3.current.clientWidth;
  //   } else {
  //     carouselRef3.current.scrollBy({ left: -300, behavior: "smooth" });
  //   }
  // };

  // // Scroll Right with Loop
  // const scrollRight3 = () => {
  //   if (
  //     carouselRef3.current.scrollLeft + carouselRef3.current.clientWidth >=
  //     carouselRef3.current.scrollWidth
  //   ) {
  //     carouselRef3.current.scrollLeft = 0;
  //   } else {
  //     carouselRef3.current.scrollBy({ left: 300, behavior: "smooth" });
  //   }
  // };

  const steps = [
    {
      id: 1,
      title: "Step 1",
      heading: "Discover",
      content:
        "We begin by understanding your vision and lifestyle, collaborating to explore ideas and ensure every detail reflects your unique style.",
      image:our_process_1 , // Replace with actual image URLs or imports
    },
    {
      id: 2,
      title: "Step 2",
      heading: "Get Free Estimate",
      content: "Once the concept is clear, we provide a transparent, no-hidden-charge estimate to help you plan effectively.",
      image:our_process_2,
    },
    {
      id: 3,
      title: "Step 3",
      heading: "Design",
      content: "Our designers create functional, stunning concepts, tailoring everything from layouts to decor for a cohesive result.",
      image:our_process_3,
    },
    {
      id: 4,
      title: "Step 4",
      heading: " Implement",
      content: "We bring designs to life with expert precision, ensuring the final outcome meets your expectations perfectly.",
      image:group_5,
    },
  ];
  // const handleStepClick = (stepId) => {
  //   setActiveStep(stepId);
  // };

  const handleButtonClick = (room) => {
    setCurrentRoom(room);
    setCurrentImage(roomImages[room]);
  };


  return (
    <div>
      {/* <Banner banners={homeBanners} /> */}
      <div id="about-us-container">
      <div className="about-us-left">
        <h3>About Us</h3>
        <h1>Transforming Spaces, Enriching Lives</h1>
        <p>
        At Interior Wonders Design , we specialize in crafting interiors that combine elegance, functionality, and your unique style. With a commitment to excellence, we turn every space into a masterpiece designed to inspire and comfort.
        </p>
        <div className="water_mark">
        <img src={image_18} alt="image_18" />
        </div>
        <div className="stats">
          <div>
          <Counter targetNumber={100} className="counter" />
            <p>Successful Projects Delivered</p>
          </div>
          <div>
          <Counter targetNumber={85} className="counter" />
            <p>Expert Collaborators</p>
          </div>
          <div>
          <Counter targetNumber={185} className="counter" />
            <p>Satisfied Clients Worldwide</p>
          </div>
          <div>
          <Counter targetNumber={255} className="counter" />
            <p>Innovative Designs Created</p>
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
      {/* Grid Layout */}
      <div className="process-image">
        <img
          src={steps.find((step) => step.id === activeStep)?.image}
          alt={`Step ${activeStep}`}
        />
      </div>
      <div className="process-content">
        <h3>Our Process</h3>
        <h1>Lorem ipsum is dolor sit amet, sit amet</h1>
        <div className="steps">
          {steps.map((step) => (
            <div key={step.id} className="step">
              <h4 onClick={() => toggleStep(step.id)} style={{ cursor: "pointer" }}>
              {step.title}
                <span
                  className={`arrow ${
                    activeStep === step.id ? "down" : "right"
                  }`}
                ></span>
              </h4>
              <h2>{step.heading}</h2>
              {activeStep === step.id && <p>{step.content}</p>}
            </div>
          ))}
        </div>
        <div className="water_mark_2">
        <img src={image_19} alt="image_19" />
      </div>
        <button className="contact-button">Book a Free Consultation</button>
      </div>
    </div>

   
<div className="room-selector-container">
      <div className="room-image">
        <img src={currentImage} alt="Room" />
      </div>
      <div className="room-buttons">
        <button
          className={`room-button ${currentRoom === "livingRoom" ? "active" : ""}`}
          onClick={() => handleButtonClick("livingRoom")}
        >
          Living Room
        </button>
        <button
          className={`room-button ${currentRoom === "bedRoom" ? "active" : ""}`}
          onClick={() => handleButtonClick("bedRoom")}
        >
          Bed Room
        </button>
        <button
          className={`room-button ${currentRoom === "masterBedroom" ? "active" : ""}`}
          onClick={() => handleButtonClick("masterBedroom")}
        >
          Master Bed Room
        </button>
        <button
          className={`room-button ${currentRoom === "kitchen" ? "active" : ""}`}
          onClick={() => handleButtonClick("kitchen")}
        >
          Kitchen
        </button>
      </div>
    </div>

    <div className="features-container">
      <div className="features-text">
        <h2>Interior Designs</h2>
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
      {/* <button className="scroll-button left" onClick={scrollLeft}>
      <IoIosArrowBack />
      </button> */}
      
      <div className="carousel">
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
      {/* <button className="scroll-button right" onClick={scrollRight}>
      <IoIosArrowForward />
      </button> */}
    </div>

      <div className="carousel-container">
      {/* Left Arrow */}
      {/* <button className="scroll-button left" onClick={scrollLeft2}>
      <IoIosArrowBack />
      </button> */}
      
      <div className="carousel_1" >
        {images.map((img, index) => (
          <div key={index} className="carousel-item_1">
            <img src={img.src} alt={`Image ${index + 1}`} className="carousel-image_1" />
            <div className="image-text">
              <h3>{img.title}</h3>
              <p>{img.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      {/* <button className="scroll-button right" onClick={scrollRight2}>
      <IoIosArrowForward />
      </button> */}
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

      {/* <div className='project_product'>
      <div className="project_product1">
        <img src={image9} alt="" width={350} height={200} style={{marginTop:170}}/>
      </div>
      <div className="project_product1">
      <img src={image10} alt="" width={400} height={400} />
      </div>
      <div className="project_product1">
      <img src={image11} alt="" width={300} height={200} style={{marginTop:170}}/>
      </div>
      
    </div> */}

      <div className="carousel-container-assets">
      <button className="carousel-btn-assets left-btn-assets" onClick={handlePrev}>
        &#8592;
      </button>
      <div className="carousel-assets">
        {imagess.map((image, index) => {
          const isActive = index === currentIndex;
          const position =
            index === currentIndex
              ? "center"
              : index === (currentIndex - 1 + imagess.length) % imagess.length
              ? "left"
              : index === (currentIndex + 1) % imagess.length
              ? "right"
              : "hidden";

          return (
            <div
              key={index}
              className={`carousel-slide-assets ${position} ${
                isActive ? "highlight" : ""
              }`}
            >
              <img src={image} alt={`Slide-assets ${index + 1}`} />
            </div>
          );
        })}
      </div>
      <button className="carousel-btn-assets right-btn-assets" onClick={handleNext}>
        &#8594;
      </button>
    </div>



      {/* <div className="carousel-wrapper">
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
      </div> */}
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
      <h2>Project</h2>
      <h1>Lorem ipsum is dolor sit amet, sit amet</h1>
      </div>
      <div className="carousel-container">
      {/* Left Arrow */}
      {/* <button className="scroll-button left" onClick={scrollLeft}>
      <IoIosArrowBack />
      </button> */}
      
      <div className="carousel">
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
      {/* <button className="scroll-button right" onClick={scrollRight}>
      <IoIosArrowForward />
      </button> */}
    </div>

    <div className="view_btn">
      <button className="view-all-btn">View All Projects</button>
      </div>
    </div>

    <Footer/>

    </div>
  )
}

export default HomePage