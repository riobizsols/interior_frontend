import React, { useState, useEffect} from 'react';
import {useCart} from '../Page/CartContext'
import assetsdetail from '../Assets/Assets_design/dvnfjvvf 1.png' 
import '../Page/AssetsDetails.css'
import greychair from '../Assets/Assets_design/assetschair.png'
import redchair from '../Assets/Assets_design/red_chair.png'
import bluechair from '../Assets/Assets_design/bluechair.png'
import goldchair from '../Assets/Assets_design/goldchair.png'
import pinkchair from '../Assets/Assets_design/pinkchair.png'
import redsmallchair from '../Assets/Assets_design/red.png'
import goldsmallchair from '../Assets/Assets_design/gold.png'
import bluesmallchair from '../Assets/Assets_design/blue.png'
import pinksmallchair from '../Assets/Assets_design/pink.png'
import greysmallchair from '../Assets/Assets_design/grey.png'
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import chair from '../Assets/Assets_design/assetschair.png'
import grey from '../Assets/Assets_design/Maskgroup1.png'
import brown from '../Assets/Assets_design/Maskgroup2.png'
import lightgrey from '../Assets/Assets_design/Maskgroup3.png'
import drakbrown from '../Assets/Assets_design/Maskgroup4.png'
import puple from '../Assets/Assets_design/Maskgroup5.png'
import gold from '../Assets/Assets_design/Maskgroup6.png'
import { Link } from 'react-router-dom'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { SiInstagram } from 'react-icons/si'
import { IoLogoYoutube } from 'react-icons/io'
import AssetsTrace from '../Assets/Assets_design/AssetTraced.png'
import trace from '../Assets/Assets_design/Traced.png'

const products = [
  { id: 1,  image: redsmallchair, bigImage: redchair, price:4999,  quantity:0},
  { id: 2,  image: greysmallchair, bigImage: greychair, price:5999, quantity:0},
  { id: 3,  image: bluesmallchair, bigImage: bluechair, price:6999, quantity:0 },
  { id: 4,  image: goldsmallchair, bigImage: goldchair, price:7999, quantity:0 },
  { id: 5,  image: pinksmallchair, bigImage: pinkchair, price:8999, quantity:0 },
];


const AssetsDetails = () => {

  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const { addToCart } = useCart(); 

 

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % products.length;
    setCurrentIndex(newIndex);
    setSelectedProduct(products[newIndex]);
  };

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + products.length) % products.length;
    setCurrentIndex(newIndex);
    setSelectedProduct(products[newIndex]);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // const handleBuyNow = () => {
  //   addToCart(selectedProduct); // Add the selected product to the cart
  //   console.log("Product added to cart:", selectedProduct);
  // };

  return(
    <div className='flex assetsdetails_container'>
       <div className=' px-16 assest_col1'>
            <h4>Company Name</h4>
            <h3>Assets Name</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet. Pellentesque finibus, est et iaculis suscipit, dolor nulla commodo dui, nec ultricies arcu nisl tristique eros. Morbi eros Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet.</p>
            {/* <img src={AssetsTrace} alt=""/> */}
           </div>
           <div className='assest_col2' >
           <div className="carousel-container">   
      <div className="big-image-container">
        
         <img
          src={selectedProduct.bigImage}
          alt={selectedProduct.name}
          className="big-image"
        /> 
        <h2>{selectedProduct.name}</h2>
      </div>
      <div className="controls">
      {/* <button className='control-prev'>
          <span className='arrow-prev'><FiArrowLeft  onClick={handlePrev} /></span>
        </button> */}
        {/* <button onClick={handleNext}>Next</button> */}
      
      <div className="carousel-assets-dt">
        {products.map((product) => (
          <div
            key={product.id}
            className={`carousel-assets-item ${
              selectedProduct.id === product.id ? 'active' : ''
            }`}
            onClick={() => handleProductClick(product)}
          >
            <img src={product.image} alt={product.name} className="small-image" />
          </div>
        ))}
      </div>
      {/* <button className="control-next">
      <FiArrowRight onClick={handleNext} className='arrow'/>
        </button> */}
      </div>
    </div>

           </div>
           <div className='assets_col3'>
            <p>Available Materials</p>
            <div id='assets_col3_color'>
            <div className='color'>
          <img src={grey} alt="" />
        </div>
        <div className='color'>
          <img src={brown} alt="" />
        </div>
        <div className='color'>
          <img src={lightgrey} alt="" />
        </div>
        <div className='color'>
          <img src={drakbrown} alt="" />
        </div>
        
            </div>
            <div id='assets_col3_color1'>
            <div className='color'>
          <img src={puple} alt="" />
        </div>
        <div className='color'>
          <img src={gold} alt="" />
        </div>
       
        
            </div>
            <h6 style={{color:"white", fontSize:"20"}}>Share on Social Media</h6>
            <div className='assets_social'>
            <div className="social-icons">
               <Link to="#" className='socialicon'><FaFacebook/></Link>
           
            <Link to="#"  className='socialicon'><SiInstagram/></Link>
            <Link to="#"  className='socialicon'><FaLinkedin/></Link>
            <Link to="#"  className='socialicon'><IoLogoYoutube/></Link>
             
            </div> 
            </div>
            <div className='assets_price'>
            <p >Price</p>
            <h2>{selectedProduct.price}/- <span>only</span></h2>
            </div>
            {/* <Link to="/your-cart" style={{textDecoration:'none', color:"#000"}}><button className="assets_button1"  onClick={handleBuyNow}>Buy Now</button>
            </Link> */}

<button className="assets_button1" >Buy Now</button>
            {/* <div> <button className="assets_button2">Customize</button></div> */}
           </div>
    </div>
  )

//   return (
//     <div style={{background:"#101010"}}>
//           {/* <img src={assetsdetail} alt="" className='home_slider_img' />
//           <div className='assets_slider'>
//           <p>Home - Assets <span>- Assets Details </span></p>
//           <h1>Assets Details</h1>
//           </div> */}
//         <div className='assets_product'>
//            <div className='assest_col1'>
//             <h4>Company Name</h4>
//             <h3>Assets Name</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet. Pellentesque finibus, est et iaculis suscipit, dolor nulla commodo dui, nec ultricies arcu nisl tristique eros. Morbi eros Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet.</p>
//             {/* <img src={AssetsTrace} alt=""/> */}
//            </div>
//            <div className='assest_col2' >
//            <div className="carousel-container">   
//       <div className="big-image-container">
        
//          <img
//           src={selectedProduct.bigImage}
//           alt={selectedProduct.name}
//           className="big-image"
//         /> 
//         <h2>{selectedProduct.name}</h2>
//       </div>
//       <div className="controls">
//       <button className='control-prev'>
//           <span className='arrow'><FiArrowLeft  onClick={handlePrev} /></span>
//         </button>
//         {/* <button onClick={handleNext}>Next</button> */}
      
//       <div className="carousel">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className={`carousel-item ${
//               selectedProduct.id === product.id ? 'active' : ''
//             }`}
//             onClick={() => handleProductClick(product)}
//           >
//             <img src={product.image} alt={product.name} className="small-image" />
//           </div>
//         ))}
//       </div>
//       <button className="control-next">
//       <FiArrowRight onClick={handleNext} className='arrow'/>
//         </button>
//       </div>
//     </div>

//            </div>
//            <div className='assets_col3'>
//             <p>Available Materials</p>
//             <div id='assets_col3_color'>
//             <div className='color'>
//           <img src={grey} alt="" />
//         </div>
//         <div className='color'>
//           <img src={brown} alt="" />
//         </div>
//         <div className='color'>
//           <img src={lightgrey} alt="" />
//         </div>
//         <div className='color'>
//           <img src={drakbrown} alt="" />
//         </div>
        
//             </div>
//             <div id='assets_col3_color1'>
//             <div className='color'>
//           <img src={puple} alt="" />
//         </div>
//         <div className='color'>
//           <img src={gold} alt="" />
//         </div>
       
        
//             </div>
//             <h6 style={{color:"white"}}>Share on Social Media</h6>
//             <div className='assets_social'>
//             <div className="social-icons">
//                <Link to="#" className='socialicon'><FaFacebook/></Link>
           
//             <Link to="#"  className='socialicon'><SiInstagram/></Link>
//             <Link to="#"  className='socialicon'><FaLinkedin/></Link>
//             <Link to="#"  className='socialicon'><IoLogoYoutube/></Link>
             
//             </div> 
//             </div>
//             <div className='assets_price'>
//             <p >Price</p>
//             <h2>{selectedProduct.price}/- <span>only</span></h2>
//             </div>
//             {/* <Link to="/your-cart" style={{textDecoration:'none', color:"#000"}}><button className="assets_button1"  onClick={handleBuyNow}>Buy Now</button>
//             </Link> */}

// <button className="assets_button1" >Buy Now</button>
//             <div> <button className="assets_button2">Customize</button></div>
//            </div>
//         </div>
//           <div  className='assets_product'>
//             <img src={AssetsTrace} alt="" width={300} style={{marginTop:-150}}/>
//           </div>
//         <div className='project_product2'>
//     <div className='project_product3_left'>
//           <h3>Our Support</h3>
//           <h2>Lorem ipsum is dolor sit amet, sit amet</h2>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet.</p>
//           <div className='project_product3_left_button'>
//           <button className='project_product3_left_button1'>Subscribe</button>
//           </div>
         
//           </div>
//       <div className='project_product3_right'>
//         <img src={trace} alt="" />
//       </div>

//     </div>
    
         
//     </div>
//   )
}

export default AssetsDetails