// import React from 'react';
// import yourcart from '../../Assets/Shopping cart 1.png';
// import '../../Componnents/CartPage/Yourcart.css';
// import { FiArrowDown } from "react-icons/fi";
// import chair from '../../Assets/cart_chair.png';
// import chair1 from '../../Assets/cart_chair2.png';
// import chair2 from '../../Assets/cart_chair3.png';
// import CheckoutProduct from './CheckoutProduct';
// import Subtotal from './Subtotal';
// import { useCart } from '../Page/CartContext';
// // import trace from '../../Assets/Traced.png';
// import free from '../../Assets/FreeShipping.png';
// import easy from '../../Assets/easyshop.png';
// import support from '../../Assets/support (2).png';
// import freereturn from '../../Assets/freereturn.png';
// import AssetsTrace from '../../Assets/AssetTraced.png';

// const Yourcart = () => {
//   const { cart, removeFromCart, updateCartQuantity } = useCart();

//   return (
//     <div className='home_container'>
//       {/* Header Image */}
//       <img src={yourcart} alt="Your Cart" className='home_slider_img' />

//       {/* Cart Header Section */}
//       <div className='assets_slider'>
//         <h2>Your Cart</h2>
//         <div className='slider_circle_bt'>
//           <FiArrowDown className='down-arrow' />
//         </div>
//       </div>

//       {/* Cart Table Section */}
//       <div className='price_col'>
//         <div className='price_col1'>
//           <div>
//             <table className='price_table'>
//               <thead className='price_col1_head'>
//                 <tr>
//                   <th>Product</th>
//                   <th className='product_head_em'></th>
//                   <th>Price</th>
//                   <th>Quantity</th>
//                   <th>Total Price</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cart.length === 0 ? (
//                   <tr>
//                     <td colSpan="5" className='cart_empty'>
//                       Your cart is empty. Add some products!
//                     </td>
//                   </tr>
//                 ) : (
//                   cart.map((product, index) => (
//                     <CheckoutProduct
//                       key={index}
//                       product={product}
//                       removeFromCart={removeFromCart}
//                       updateCartQuantity={updateCartQuantity}
//                     />
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Subtotal Section */}
//         <div className='price_col2'>
//           <Subtotal products={cart} />
//         </div>
//       </div>

//       {/* Thumbnail Section for Chairs */}
//       <div className='thumbnail_section'>
//         <div className='thumbnail'>
//           <img src={chair} alt="Chair 1" />
//         </div>
//         <div className='thumbnail'>
//           <img src={chair1} alt="Chair 2" />
//         </div>
//         <div className='thumbnail'>
//           <img src={chair2} alt="Chair 3" />
//         </div>
//       </div>

//       {/* Free Shipping, Support, and Returns Section */}
//       <div className='free_support'>
//         <div className='free_icon'>
//           <img src={free} alt="Fast & Free Shipping" />
//           <h4>Fast & Free Shipping</h4>
//         </div>
//         <div className='free_icon'>
//           <img src={easy} alt="Easy to Shop" />
//           <h4>Easy to <br />Shop</h4>
//         </div>
//         <div className='free_icon'>
//           <img src={support} alt="24/7 Support" />
//           <h4>24/7 <br />Support</h4>
//         </div>
//         <div className='free_icon'>
//           <img src={freereturn} alt="Free Returns" />
//           <h4>Free <br />Returns</h4>
//         </div>
//       </div>

//       {/* Asset Traced Image Section */}
//       <div className='free_support1'>
//         <img src={AssetsTrace} alt="Traced Assets" />
//       </div>

//       {/* Support Section */}
//       <div className='project_product2'>
//         <div className='project_product3_left'>
//           <h3>Our Support</h3>
//           <h2>Lorem ipsum is dolor sit amet, sit amet</h2>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet.</p>
//           <div className='project_product3_left_button'>
//             <button className='project_product3_left_button1'>Subscribe</button>
//           </div>
//         </div>
//         <div className='project_product3_right'>
//           <img src={trace} alt="Support Illustration" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Yourcart;
