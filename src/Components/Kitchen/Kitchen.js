import React, { useState } from 'react';
import '../LivingRoom/LivingRoom.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import Navbar from './Navbar/Navbar';
import { IoSearch } from "react-icons/io5";
import B_Mask1 from '../../assets/Kitchen/Mask group-1.png';
import B_Mask2 from '../../assets/Kitchen/Mask group-2.png';
import B_Mask3 from '../../assets/Kitchen/Mask group-3.png';
import B_Mask4 from '../../assets/Kitchen/Mask group-4.png';
import B_Mask5 from '../../assets/Kitchen/Mask group-5.png';
import B_Mask6 from '../../assets/Kitchen/Mask group-6.png';
import B_Mask7 from '../../assets/Kitchen/Mask group-7.png';
import B_Mask8 from '../../assets/Kitchen/Mask group-8.png';
import B_Mask9 from '../../assets/Kitchen/Mask group-9.png';
import B_Mask10 from '../../assets/Kitchen/Mask group-10.png';
import B_Mask11 from '../../assets/Kitchen/Mask group-11.png';
import B_Mask12 from '../../assets/Kitchen/Mask group-12.png';
import B_Mask13 from '../../assets/Kitchen/Mask group-13.png';
import B_Mask14 from '../../assets/Kitchen/Mask group-14.png';
import B_Mask15 from '../../assets/Kitchen/Mask group-15.png';
import B_Mask16 from '../../assets/Kitchen/Mask group-16.png';
import B_Mask17 from '../../assets/Kitchen/Mask group-17.png';
import B_Mask18 from '../../assets/Kitchen/Mask group-18.png';
import B_Mask19 from '../../assets/Kitchen/Mask group-19.png';
import B_Mask20 from '../../assets/Kitchen/Mask group-20.png';
import B_Mask21 from '../../assets/Kitchen/Mask group-21.png';
import B_Mask22 from '../../assets/Kitchen/Mask group-22.png';
import B_Mask23 from '../../assets/Kitchen/Mask group-23.png';
import B_Mask24 from '../../assets/Kitchen/Mask group-24.png';
import B_Mask25 from '../../assets/Kitchen/Mask group-25.png';
import B_Mask26 from '../../assets/Kitchen/Mask group-26.png';
import B_Mask27 from '../../assets/Kitchen/Mask group-27.png';
import B_Mask28 from '../../assets/Kitchen/Mask group-28.png';
import B_Mask29 from '../../assets/Kitchen/Mask group-29.png';
import B_Mask30 from '../../assets/Kitchen/Mask group-30.png';
import B_Mask31 from '../../assets/Kitchen/Mask group-31.png';
import B_Mask32 from '../../assets/Kitchen/Mask group-32.png';
import B_Mask33 from '../../assets/Kitchen/Mask group-33.png';
import B_Mask34 from '../../assets/Kitchen/Mask group-34.png';
import B_Mask35 from '../../assets/Kitchen/Mask group-35.png';
import B_Mask36 from '../../assets/Kitchen/Mask group.png';
import { AiFillCaretDown } from "react-icons/ai";


const Kitchen = () => {
  
const designs = [
  { id: 1, image: B_Mask1, category: 'Modern', RelatedPage:'Kitchen',  smallImages: [B_Mask4, B_Mask7, B_Mask10 ]},
  { id: 2, image: B_Mask2, category: 'Classic', RelatedPage:'Kitchen', smallImages: [B_Mask4, B_Mask7, B_Mask10] },
  { id: 3, image: B_Mask3, category: 'Trendy', RelatedPage:'Kitchen', smallImages: [B_Mask4, B_Mask7, B_Mask10, ] },
  { id: 4, image: B_Mask4, category: 'Modern', RelatedPage:'Kitchen', smallImages: [B_Mask4, B_Mask7, B_Mask10, ] },
  { id: 5, image: B_Mask5, category: 'Classic', RelatedPage:'Kitchen', smallImages: [B_Mask4, B_Mask7, B_Mask10,] },
  { id: 6, image: B_Mask6, category: 'Trendy', RelatedPage:'Kitchen', smallImages: [B_Mask4, B_Mask7, B_Mask10, ] },
  { id: 7, image: B_Mask12, category: 'Modern', RelatedPage:'Kitchen', smallImages: [B_Mask4, B_Mask7, B_Mask10,]  },
  { id: 8, image: B_Mask7, category: 'Classic', RelatedPage:'Kitchen', smallImages: [B_Mask4, B_Mask7, B_Mask10,] },
  { id: 9, image: B_Mask8, category: 'Trendy', RelatedPage:'Kitchen', smallImages: [B_Mask4, B_Mask7, B_Mask10, ] },
  { id: 10, image: B_Mask9, category: 'Modern', RelatedPage:'Kitchen', smallImages: [B_Mask4, B_Mask7, B_Mask10,] },
  { id: 11, image: B_Mask10, category: 'Classic', RelatedPage:'Kitchen', smallImages: [B_Mask4, B_Mask7, B_Mask10,] },
  { id: 12, image: B_Mask11, category: 'Trendy', RelatedPage:'Kitchen', smallImages: [B_Mask4, B_Mask7, B_Mask10,] },
  { id: 13, image: B_Mask15, category: 'Modern', RelatedPage:'Kitchen', smallImages: [B_Mask4, B_Mask7, B_Mask10,]  },
  { id: 14, image: B_Mask13, category: 'Classic', RelatedPage:'Kitchen', smallImages: [B_Mask4, B_Mask7, B_Mask10,] },
  { id: 15, image: B_Mask15, category: 'Trendy', RelatedPage:'Kitchen', smallImages: [B_Mask4, B_Mask7, B_Mask10,] },
  { id: 16, image: B_Mask16, category: 'Modern', RelatedPage:'Kitchen', smallImages: [B_Mask4, B_Mask7, B_Mask10,] },
  { id: 17, image: B_Mask17, category: 'Classic', RelatedPage:'Kitchen', smallImages: [B_Mask4, B_Mask7, B_Mask10,] },
  { id: 18, image: B_Mask18, category: 'Trendy', RelatedPage:'Kitchen', smallImages: [B_Mask4, B_Mask7, B_Mask10,] },
  { id: 19, image: B_Mask19, category: 'Modern', RelatedPage:'Kitchen', smallImages: [B_Mask4, B_Mask7, B_Mask10,] },
  { id: 20, image: B_Mask20, category: 'Classic', RelatedPage:'Kitchen', smallImages: [B_Mask4, B_Mask7, B_Mask10,] },
  { id: 21, image: B_Mask21, category: 'Trendy', RelatedPage:'Kitchen', smallImages: [B_Mask4, B_Mask7, B_Mask10,] },
  { id: 22, image: B_Mask22, category: 'Modern', RelatedPage:'Kitchen', smallImages: [B_Mask4, B_Mask7, B_Mask10,] },
  { id: 23, image: B_Mask23, category: 'Classic', RelatedPage:'Kitchen', smallImages: [B_Mask4, B_Mask7, B_Mask10,] },
  { id: 24, image: B_Mask24, category: 'Trendy', RelatedPage:'Kitchen', smallImages: [B_Mask4, B_Mask7, B_Mask10,] },
  { id: 25, image: B_Mask25, category: 'Modern', RelatedPage:'Kitchen', smallImages: [B_Mask4, B_Mask7, B_Mask10,] },
  { id: 26, image: B_Mask26, category: 'Classic', RelatedPage:'Kitchen', smallImages: [B_Mask4, B_Mask7, B_Mask10,] },
  { id: 27, image: B_Mask27, category: 'Trendy', RelatedPage:'Kitchen', smallImages: [B_Mask4, B_Mask7, B_Mask10,] },
  { id: 28, image: B_Mask28, category: 'Modern', RelatedPage:'Kitchen', smallImages: [B_Mask4, B_Mask7, B_Mask10,] },
  { id: 29, image: B_Mask29, category: 'Classic', RelatedPage:'Kitchen', smallImages: [B_Mask4, B_Mask7, B_Mask10,] },
  { id: 30, image: B_Mask30, category: 'Trendy', RelatedPage:'Kitchen', smallImages: [B_Mask4, B_Mask7, B_Mask10,] },
  { id: 31, image: B_Mask31, category: 'Modern', RelatedPage:'Kitchen', smallImages: [B_Mask4, B_Mask7, B_Mask10,] },
  { id: 32, image: B_Mask32, category: 'Classic', RelatedPage:'Kitchen', smallImages: [B_Mask4, B_Mask7, B_Mask10,] },
  { id: 33, image: B_Mask33, category: 'Trendy', RelatedPage:'Kitchen', smallImages: [B_Mask4, B_Mask7, B_Mask10,] },
  { id: 34, image: B_Mask34, category: 'Modern', RelatedPage:'Kitchen', smallImages: [B_Mask4, B_Mask7, B_Mask10,] },
  { id: 35, image: B_Mask35, category: 'Classic', RelatedPage:'Kitchen', smallImages: [B_Mask4, B_Mask7, B_Mask10,] },
  { id: 36, image: B_Mask36, category: 'Trendy', RelatedPage:'Kitchen', smallImages: [B_Mask4, B_Mask7, B_Mask10,] },
];

const discription = "Design a functional and stylish kitchen with modern appliances, ample storage, and a welcoming layout. Whether it’s a cozy space or an open-concept culinary haven, the right elements can transform your kitchen into the heart of your home."

  // const handleImageClick = (id) => {
  //   navigate(`/design/${id}`);
  // };

  const [filter, setFilter] = useState('Filter'); // Dropdown filter state
  const [search, setSearch] = useState(''); // Search input state

  // Handle filter dropdown change
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Handle search box input change
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Filtered and searched designs
  const filteredDesigns = designs.filter((design) => {
    const matchesFilter = filter === 'Filter' || design.category === filter;
    const matchesSearch = design.category.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });


  return (
    <div>
    
      <section className="interior_designs">
        <div className='interior_head_desc'>
        <h3>Kitchen Interior <br/>Designs</h3>
        <p> {discription}</p>
          
        </div>
        <div className='filter_sec'>
           <div className='filter_dropdown_container'>
                <select className="filter_dropdown" 
                value={filter} 
                onChange={handleFilterChange}>
                <option value="Filter">Filter</option>
                <option>Trendy</option>
                <option>Modern</option>
                <option>Classic</option>
                </select>
                <AiFillCaretDown className="filter_icon" />   
             </div>
             <div className="search_container">
             < IoSearch  className="search_icon"/>
             {/* <img src={searchicon} alt='Search Icon' className="search_icon" /> */}
            <input 
                type="text" 
                className="search_box" 
                placeholder="Search "
                value={search}
                onChange={handleSearchChange}
              />
             
            </div>
           </div>

           {/* <div className='design_card' >
           {filteredDesigns.length > 0 ? (
            filteredDesigns.map((design) => (
              <div  key={design.id} className="design_item">
                <div className="design_header_container" >
                  <h4 className="overlay_text">{design.category}</h4>
                </div>
                <img src={design.image} alt={`Design ${design.id}`} className="card_imgs"/>
              </div>
            ))
          ) : (
            <p>No designs match your criteria.</p>
          )}

           </div> */}

<div className="livingroom_design_card">
          {filteredDesigns.length > 0 ? (
            filteredDesigns.map((design) => (
              <Link
                key={design.id}
                to="/design"
                state={{ image: design.image, category: design.category, RelatedPage:design.RelatedPage, smallImages: design.smallImages, discription:discription }}
              >
                <div className="livingroom_design_item">
                  <h4 className="overlay_text">{design.category}</h4>
                  <img src={design.image} alt={`Design ${design.id}`} className="card_imgs" />
                </div>
              </Link>
            ))
          ) : (
            <p>No designs match your criteria.</p>
          )}
        </div>
        
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default Kitchen;
