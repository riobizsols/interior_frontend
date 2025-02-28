import React, {useState, useEffect} from 'react'
import '../Home/HomePage.css'
import mask_img_1 from '../../assets/Mask group (1).png'
import mask_img_2 from '../../assets/Mask group (2).png'
import mask_img_3 from '../../assets/Mask group (3).png'
import mask_img from '../../assets/Mask group.png'
import image_18 from '../../assets/image 18.png'
import image_19 from '../../assets/image 19.png'
import dsfffe1 from '../../assets/dsfffe1.png'
import dsfffe2 from '../../assets/dsfffe2.png'
import our_process_1 from '../../assets/our-process-1.png'
import our_process_2 from '../../assets/our-process-2.png'
import our_process_3 from '../../assets/our-process-3.png'
import livingroom_1 from '../../assets/Homepage_images/Ideas/Living Room/1.jpg'
import livingroom_2 from '../../assets/Homepage_images/Ideas/Living Room/2.jpeg'
import livingroom_3 from '../../assets/Homepage_images/Ideas/Living Room/3.jpg'
import livingroom_4 from '../../assets/Homepage_images/Ideas/Living Room/4.jpg'
import livingroom_5 from '../../assets/Homepage_images/Ideas/Living Room/5.jpg'
import bedroom_1 from '../../assets/Homepage_images/Ideas/Bed Room/1.jpeg'
import bedroom_2 from '../../assets/Homepage_images/Ideas/Bed Room/2.jpg'
import bedroom_3 from '../../assets/Homepage_images/Ideas/Bed Room/3.jpg'
import bedroom_4 from '../../assets/Homepage_images/Ideas/Bed Room/4.jpg'
import bedroom_5 from '../../assets/Homepage_images/Ideas/Bed Room/5.jpg'
import bedroom_6 from '../../assets/Homepage_images/Ideas/Bed Room/6.jpg'
import masterbedroom_1 from '../../assets/Homepage_images/Ideas/Master Bed Room/1.jpg'
import masterbedroom_2 from '../../assets/Homepage_images/Ideas/Master Bed Room/2.jpg'
import masterbedroom_3 from '../../assets/Homepage_images/Ideas/Master Bed Room/3.jpg'
import masterbedroom_4 from '../../assets/Homepage_images/Ideas/Master Bed Room/4.jpg'
import masterbedroom_5 from '../../assets/Homepage_images/Ideas/Master Bed Room/5.jpg'
import masterbedroom_6 from '../../assets/Homepage_images/Ideas/Master Bed Room/6.jpg'
import kitchen_1 from '../../assets/Homepage_images/Ideas/Kitchen/1.jpg'
import kitchen_2 from '../../assets/Homepage_images/Ideas/Kitchen/2.jpg'
import kitchen_3 from '../../assets/Homepage_images/Ideas/Kitchen/3.jpg'
import kitchen_4 from '../../assets/Homepage_images/Ideas/Kitchen/4.jpg'
import kitchen_5 from '../../assets/Homepage_images/Ideas/Kitchen/5.jpg'
import kitchen_6 from '../../assets/Homepage_images/Ideas/Kitchen/6.jpg'
import isomatric_home from '../../assets/isometric-house.png'
import isomatric_home_1 from '../../assets/isometric-house_1.png'
import isomatric_home_2 from '../../assets/isometric-house_2.png'
import interior_livingroom from '../../assets/interior_living.png'
import interior_kitchen from '../../assets/interior_kitchen.png'
import interior_homeoffice from '../../assets/interior_hoffice.png'
import interior_bedroom from '../../assets/interior_bedroom.png'
import interior_bathroom from '../../assets/interior_bath.png'
import interior_assets from '../../assets/interior_assets.png'
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
import { IoArrowDownOutline } from "react-icons/io5";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom'
import Counter from "../Pages/Counter";



const HomePage = () => {

  const imagess = [image9, image10, image11, image12, image13, image14, image15, image16, image17, image18];
  const [currentIndex, setCurrentIndex] = useState(2); // Center image
  const [activeStep, setActiveStep] = useState(1);
  const [hoveredFeature, setHoveredFeature] = useState(0); // Default to "Living Room"
  const navigate = useNavigate();
  const [currentItem, setCurrentItem] = useState(0);
  const [currentRoom, setCurrentRoom] = useState("LivingRoom");
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    // Start image auto-scrolling when a button is clicked
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % roomImages[currentRoom].length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentRoom]); // Runs when currentRoom changes

  const handleButtonClick = (room) => {
    if (currentRoom !== room) {
      setCurrentRoom(room);
      setImageIndex(0); // Reset index when switching rooms
    }
  };

  const handleNext1 = () => {
    setCurrentItem((prevIndex) => (prevIndex + 1) % feedbacks.length);
  };

  const handlePrev1 = () => {
    setCurrentItem((prevItem) =>
      prevItem === 0 ? feedbacks.length - 1 : prevItem - 1
    );
  };


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

  
     // Define multiple images for each room
  const roomImages = {
    LivingRoom: [livingroom_1,livingroom_2,livingroom_3,livingroom_4,livingroom_5],
    BedRoom: [bedroom_1,bedroom_2,bedroom_3,bedroom_4,bedroom_5,bedroom_6],
    MasterBedroom: [masterbedroom_1,masterbedroom_2,masterbedroom_3,masterbedroom_4,masterbedroom_5,masterbedroom_6],
    Kitchen: [kitchen_1,kitchen_2,kitchen_3,kitchen_4,kitchen_5,kitchen_6],
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

  const featuresData = [
    {
      title: "Living Room",
      description:
        "Elegant and cozy designs to create a stylish, inviting space that reflects your lifestyle.",
      image:interior_livingroom,
      page: "/livingroom",
    },
    {
      title: "Kitchen",
      description:
        "Modern, functional kitchens designed for efficiency, aesthetics, and an enhanced cooking experience.",
      image:interior_kitchen,
      page: "/kitchen",
    },
    {
      title: "Bed Room",
      description:
        "Relax in a serene bedroom with stylish decor, perfect lighting, and a cozy ambiance for restful sleep.",
      image:interior_bedroom,
      page: "/bedroom",
    },
    {
      title: "Bath Room",
      description:
        "Upgrade to a sleek, luxurious bathroom with smart space utilization and a spa-like feel for comfort.",
      image:interior_bathroom,
      page: "/bathroom",
    },
    {
      title: "Home Office",
      description:
        "Boost productivity with a stylish, ergonomic workspace that blends function and modern aesthetics.",
      image:interior_homeoffice,
      page: "/homeoffice",
    },
    {
      title: "Assets",
      description:
        "Premium furniture, lighting, and decor to enhance your home with elegance, quality, and sophistication..",
      image:interior_assets,
      page: "/assets",
    },
    
  ];

  const steps = [
    {
      id: 1,
      title: "Step 1",
      heading: "Discover",
      content:"We begin by understanding your vision and lifestyle, collaborating to explore ideas and ensure every detail reflects your unique style.",
      image:our_process_1 , // Replace with actual image URLs or imports
    },
    {
      id: 2,
      title: "Step 2",
      heading: "Design",
      content: "Our designers create functional, stunning concepts, tailoring everything from layouts to decor for a cohesive result.",
      image:our_process_2,
    },
    {
      id: 3,
      title: "Step 3",
      heading: "Implement",
      content: "We bring designs to life with expert precision, ensuring the final outcome meets your expectations perfectly.",
      image:our_process_3,
      
    },
   
  ];

  const feedbacks = [
    {
      feedback: [
        "Working with Interior Wonders Design was such an amazing experience for us! Right from the beginning, their team took the time to really understand what we wanted and made sure our ideas were part of the plan. It felt like they were as excited about our living room as we were!",
        "What we loved the most was how they paid attention to even the tiniest details. They didn’t just bring our vision to life – they made it better with their creative suggestions. They kept us in the loop every step of the way, which made us feel super confident and involved in the process.",
        "The final result? A living room that’s not just beautiful but also feels like us. It’s cozy, stylish, and perfect for everything from family time to hosting friends. We honestly couldn’t be happier with how it turned out! If you’re thinking about giving your space a makeover, we can’t recommend Interior Wonders Design enough. They went above and beyond, and we’re so glad we chose them",
      ],
      clientDetails:"Anand and Sunita's Feedback",
      clientLogo:"ClientLogo 1",
      clientName: "- Anand & Sunita",
      companyName: "Company One",
      date:"20th March 2024",
      image: isomatric_home, // Replace with actual image path
    },
    {
      feedback: [
        "We couldn't have asked for a better experience than working with Interior Wonders Design! From the initial consultation, their team was professional, patient, and genuinely attentive to our needs.", 
         "They helped us envision a dining area that was both functional and stylish, blending our taste with practical design solutions.One of the highlights was their ability to incorporate modern design trends while maintaining the warmth and comfort we desired.",
         "The entire team went above and beyond to make sure the process was smooth, from start to finish. What stood out was their commitment to ensuring the smallest details were perfect. Every piece of furniture and decor felt carefully chosen, adding to the overall harmony of the space. We couldn't believe how well they captured our vision, and the final look truly exceeded our expectations. If you want a team that listens to your ideas and transforms them into something beyond your imagination, Interior Wonders Design is your go-to choice. We’re so glad we trusted them with our project!",
      ],
      clientDetails:"Ravi and Priya’s Feedback",
      clientLogo:"ClientLogo 2",
      clientName: " Ravi & Priya",
      companyName: "Company Two",
      date:"10th June 2024",
      image: isomatric_home_1, // Replace with actual image path
    },
    {
      feedback: [
        "Partnering with Interior Wonders Design for our office redesign was one of the best decisions we made as a company. Their team understood our need for a professional, yet vibrant work environment that encourages collaboration and creativity.",
        "The process was seamless – from the initial concept to the final installation. We were particularly impressed by how they seamlessly incorporated our brand’s colors and aesthetics into the space while maintaining functionality. The ergonomic designs and creative workspaces they suggested have already boosted employee morale and productivity.",
        "Our employees now love the new office space, and clients are equally impressed when they visit. Interior Wonders Design not only brought our vision to life but elevated it in ways we hadn’t even considered. We highly recommend their services to any business looking to enhance their office space.",
      ],
      clientDetails:"Corporate Client: Tech Innovators Inc.",
      clientLogo:"ClientLogo 3",
      clientName: "Tech Innovators Inc",
      companyName: "Company Three",
      date:"16th Dec 2024",
      image: isomatric_home_2, // Replace with actual image path
    },
    
  ];

  const currentFeedback = feedbacks[currentItem];

  // const handleStepClick = (stepId) => {
  //   setActiveStep(stepId);
  // };

  const handleButtonClickPage = (page) => {
    navigate(page);
  };
  const handleButtonClickPageProcess = () => {
    navigate("/design/Booking-Design");
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
        <Link to="/contactform">
        <button className="contact-button">Contact us</button>
        </Link>
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
        <h1>Transforming your vision into reality with a seamless and thoughtful approach.</h1>
        <div className="steps">
          {steps.map((step) => (
            <div key={step.id} className="step">
              <h4 onClick={() => toggleStep(step.id)} style={{ cursor: "pointer" }}>
              {step.title}
                <span
                  className={`arrow_home ${
                    activeStep === step.id ? 'down' : 'right'
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
        <button 
        onClick={() => handleButtonClickPageProcess(steps.page)}
        className="contact-button">Book a Free Consultation</button>
      </div>
    </div>


<div className="room-selector-container">
      <div className="room-image">
        <img src={roomImages[currentRoom][imageIndex]} alt="Room" />
      </div>
      <div className="room-buttons">
        {Object.keys(roomImages).map((room) => (
          <button
            key={room}
            className={`room-button ${currentRoom === room ? "active" : ""}`}
            onClick={() => handleButtonClick(room)}
          >
            {room.replace(/([A-Z])/g, " $1").trim()}
          </button>
        ))}
      </div>
    </div>

    
<div id="features-container">
      <div className="features-text">
        <h2>Interior Designs</h2>
        <h1>Transform Your Space with Inspired Interior Designs</h1>
        <p>
        Discover a world of possibilities for your home. From cozy living rooms to stylish home offices, we craft personalized designs tailored to your unique taste and needs. Explore each space to learn how we can turn your vision into reality.
        </p>
        <div className="features-list">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className={`feature-item ${
                hoveredFeature === index ? "hovered" : ""
              } ${index === 0 && hoveredFeature === 0 ? "default-hovered" : ""}`}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(0)} // Revert to default hover
            >
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
              {hoveredFeature === index && (
                <button 
                onClick={() => handleButtonClickPage(feature.page)}
                className="continue-button">Continue</button>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="features-image">
        <img
          src={featuresData[hoveredFeature].image}
          alt="Feature Illustration"
        />
      </div>
    </div>


    <div className="carousel-container-new">
      <div className="carousel-header">
        <div className="carousel_head1">
        <h2>Assets</h2>
        <h1>Premium Assets for Your Interiors</h1>
        </div>
        <div className="carousel_para">
        <p>
        Upgrade your home or office with our carefully curated selection of interior assets. From modern sofas to classic wooden doors, we provide durable and stylish pieces to complement any design aesthetic.
        </p>
        </div>
      </div>

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
    <Link to="/assets">
    <button className="view-assets-btn">View All Assets</button>
        </Link>
      
      <hr className='assets_split' />
    </div>

     <div id="template-container">
      <div className="content-section">
        {/* Feedback Content */}
        <h3 className="project-title">Our Clients Feedback</h3>
        <h1 className="main-heading">{currentFeedback.clientDetails}</h1>
        {currentFeedback.feedback.map((paragraph, index) => (
          <p className="description" key={index}>
            {paragraph}
          </p>
        ))}

        {/* Client Information */}
        <div className="client-logo-section">
          <h3>{currentFeedback.clientLogo}</h3>
          <p className="client-name">{currentFeedback.clientName}</p>
          <p className="company-name">{currentFeedback.companyName}</p>
          {/* <button className="view-clients-btn">View All Our Clients</button> */}
        </div>

         {/* Arrow Buttons */}
      <div className="arrow-buttons">
        <button className="arrow-btn left-arrow" onClick={handlePrev1}>
          &#8249;
        </button>
        <button className="arrow-btn right-arrow" onClick={handleNext1}>
          &#8250;
        </button>
      </div>
      </div>

      {/* Feedback Image */}
      <div className="image-section">
        <p className='feedback_date'>{currentFeedback.date}</p>
        <img
          src={currentFeedback.image}
          alt="Client Feedback"
          className="project-image"
        />
      </div>

      {/* water mark */}
      <div className="water_mark_3">
        <img className='small' src={dsfffe1} alt="dsfffe1" />
        <img className='big' src={dsfffe2} alt="dsfffe2" />
        </div>
    </div>

    <div className="projects-container-2">
      <div className="main_text">
      <h2>Blogs</h2>
      <h1>Lorem ipsum is dolor sit amet, sit amet</h1>
      </div>

      <div className="carousel-container">
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
    </div>

    <div className="view_btn">
    <Link to="/blog">
    <button className="view-all-btn">View All Blogs</button>
    </Link>
      </div>
    </div>
    </div>
  )
}

export default HomePage