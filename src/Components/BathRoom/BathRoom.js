import React, { useState } from 'react';
import '../LivingRoom/LivingRoom.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import Navbar from './Navbar/Navbar';
import { IoSearch } from "react-icons/io5";
import B_Mask1 from '../../assets/Bathroom/Mask group-1.png';
import B_Mask2 from '../../assets/Bathroom/Mask group-2.png';
import B_Mask3 from '../../assets/Bathroom/Mask group-3.png';
import B_Mask4 from '../../assets/Bathroom/Mask group-4.png';
import B_Mask5 from '../../assets/Bathroom/Mask group-5.png';
import B_Mask6 from '../../assets/Bathroom/Mask group-6.png';
import B_Mask7 from '../../assets/Bathroom/Mask group-7.png';
import B_Mask8 from '../../assets/Bathroom/Mask group-8.png';
import B_Mask9 from '../../assets/Bathroom/Mask group-9.png';
import B_Mask10 from '../../assets/Bathroom/Mask group-10.png';
import B_Mask11 from '../../assets/Bathroom/Mask group-11.png';
import B_Mask12 from '../../assets/Bathroom/Mask group-12.png';
import B_Mask13 from '../../assets/Bathroom/Mask group-13.png';
import B_Mask14 from '../../assets/Bathroom/Mask group-14.png';
import B_Mask15 from '../../assets/Bathroom/Mask group.png';
import { AiFillCaretDown } from "react-icons/ai";


const BathRoom = () => {
  
const designs = [
  { id: 1, image: B_Mask1, category: 'Modern', RelatedPage:'BathRoom',  smallImages: [B_Mask4, B_Mask7, B_Mask10 ]},
  { id: 2, image: B_Mask2, category: 'Classic', RelatedPage:'BathRoom', smallImages: [B_Mask4, B_Mask7, B_Mask10] },
  { id: 3, image: B_Mask3, category: 'Trendy', RelatedPage:'BathRoom', smallImages: [B_Mask4, B_Mask7, B_Mask10, ] },
  { id: 4, image: B_Mask4, category: 'Modern', RelatedPage:'BathRoom', smallImages: [B_Mask4, B_Mask7, B_Mask10, ] },
  { id: 5, image: B_Mask5, category: 'Classic', RelatedPage:'BathRoom', smallImages: [B_Mask4, B_Mask7, B_Mask10,] },
  { id: 6, image: B_Mask6, category: 'Trendy', RelatedPage:'BathRoom', smallImages: [B_Mask4, B_Mask7, B_Mask10, ] },
  { id: 7, image: B_Mask12, category: 'Modern', RelatedPage:'BathRoom', smallImages: [B_Mask4, B_Mask7, B_Mask10,]  },
  { id: 8, image: B_Mask7, category: 'Classic', RelatedPage:'BathRoom', smallImages: [B_Mask4, B_Mask7, B_Mask10,] },
  { id: 9, image: B_Mask8, category: 'Trendy', RelatedPage:'BathRoom', smallImages: [B_Mask4, B_Mask7, B_Mask10, ] },
  { id: 10, image: B_Mask9, category: 'Modern', RelatedPage:'BathRoom', smallImages: [B_Mask4, B_Mask7, B_Mask10,] },
  { id: 11, image: B_Mask10, category: 'Classic', RelatedPage:'BathRoom', smallImages: [B_Mask4, B_Mask7, B_Mask10,] },
  { id: 12, image: B_Mask11, category: 'Trendy', RelatedPage:'BathRoom', smallImages: [B_Mask4, B_Mask7, B_Mask10,] },
  { id: 13, image: B_Mask15, category: 'Modern', RelatedPage:'BathRoom', smallImages: [B_Mask4, B_Mask7, B_Mask10,]  },
  { id: 14, image: B_Mask13, category: 'Classic', RelatedPage:'BathRoom', smallImages: [B_Mask4, B_Mask7, B_Mask10,] },
  { id: 15, image: B_Mask14, category: 'Trendy', RelatedPage:'BathRoom', smallImages: [B_Mask4, B_Mask7, B_Mask10,] },

];

const discription = "Upgrade your bathroom with sleek fixtures, spa-like elements, and smart storage solutions. From elegant vanities to rainfall showers, a well-designed bathroom can offer both luxury and functionality, turning daily routines into rejuvenating experiences."

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
        <h3>BathRoom Interior <br/>Designs</h3>
        <p>{discription}</p>
          
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

export default BathRoom;
