import React, { useState } from 'react';
import '../LivingRoom/LivingRoom.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header1 from '../../assets/LivHeader.png';
// import Navbar from './Navbar/Navbar';
import { IoSearch } from "react-icons/io5";
import Mask1 from '../../assets/Mask group.png';
import Mask2 from '../../assets/Living_Room/Maskgroup(1).png';
import Mask3 from '../../assets/Living_Room/Maskgroup(2).png';
import Mask4 from '../../assets/Living_Room/Maskgroup(3).png';
import Mask5 from '../../assets/Living_Room/Mask group (4).png';
import Mask6 from '../../assets/Living_Room/Mask group (5).png';
import Mask7 from '../../assets/Living_Room/Mask group (6).png';
import Mask8 from '../../assets/Living_Room/Mask group (7).png';
import Mask9 from '../../assets/Living_Room/Mask group (8).png';
import Mask10 from '../../assets/Living_Room/Mask group (9).png';
import Mask11 from '../../assets/Living_Room/Mask group (10).png';
import Mask12 from '../../assets/Living_Room/Mask group (11).png';
import Mask13 from '../../assets/Living_Room/Mask group (12).png';
import Mask14 from '../../assets/Living_Room/Mask group (13).png';
import Mask15 from '../../assets/Living_Room/Mask group (14).png';
import Mask16 from '../../assets/Living_Room/Mask group (15).png';
import Mask17 from '../../assets/Living_Room/Mask group (16).png';
import Mask18 from '../../assets/Living_Room/Mask group (17).png';
import Mask19 from '../../assets/Living_Room/Mask group (18).png';
import Mask20 from '../../assets/Living_Room/Mask group (19).png';
import Mask21 from '../../assets/Living_Room/Mask group (20).png';
import Mask22 from '../../assets/Living_Room/Mask group (21).png';
import Mask23 from '../../assets/Living_Room/Mask group (22).png';
import Mask24 from '../../assets/Living_Room/Mask group (23).png';
import Mask25 from '../../assets/Living_Room/Mask group (24).png';
import Mask26 from '../../assets/Living_Room/Mask group (25).png';
import Mask27 from '../../assets/Living_Room/Mask group (26).png';
import Mask28 from '../../assets/Living_Room/Mask group (27).png';
import Mask29 from '../../assets/Living_Room/Mask group (28).png';
import Mask30 from '../../assets/Living_Room/Mask group (29).png';
import Mask31 from '../../assets/Living_Room/Mask group (30).png';
import Mask32 from '../../assets/Living_Room/Mask group (31).png';
import Mask33 from '../../assets/Living_Room/Mask group (32).png';
import Mask34 from '../../assets/Living_Room/Mask group (33).png';
import Mask35 from '../../assets/Living_Room/Mask group (34).png';
import Mask36 from '../../assets/Living_Room/Mask group (35).png';
import { AiFillCaretDown } from "react-icons/ai";






const Livingroom = () => {
  
const designs = [
  { id: 1, image: Mask16, category: 'Modern',  smallImages: [Mask4, Mask7, Mask10, Mask13 ] },
  { id: 2, image: Mask2, category: 'Classic', smallImages: [Mask6, Mask8, Mask11, Mask14] },
  { id: 3, image: Mask3, category: 'Trendy', smallImages: [Mask9, Mask12, Mask15, Mask32] },
  { id: 4, image: Mask4, category: 'Modern', smallImages: [Mask25, Mask28, Mask31, Mask34 ] },
  { id: 5, image: Mask6, category: 'Classic', smallImages: [Mask35, Mask8, Mask11, Mask14] },
  { id: 6, image: Mask12, category: 'Trendy', smallImages: [Mask9, Mask18, Mask15, Mask18]  },
  { id: 7, image: Mask7, category: 'Modern',  smallImages: [Mask4, Mask7, Mask10, Mask13 ] },
  { id: 8, image: Mask8, category: 'Classic', smallImages: [Mask17, Mask20, Mask23, Mask26 ] },
  { id: 9, image: Mask9, category: 'Trendy', smallImages: [Mask9, Mask12, Mask15, Mask32] },
  { id: 10, image: Mask10, category: 'Modern',  smallImages: [Mask13, Mask16, Mask19, Mask22 ] },
  { id: 11, image: Mask11, category: 'Classic',  smallImages: [Mask17, Mask20, Mask23, Mask26 ] },
  { id: 12, image: Mask12, category: 'Trendy', smallImages: [Mask9, Mask12, Mask15, Mask32]  },
  { id: 13, image: Mask13, category: 'Modern',  smallImages: [Mask25, Mask28, Mask31, Mask34 ] },
  { id: 14, image: Mask14, category: 'Classic',  smallImages: [Mask17, Mask20, Mask23, Mask26 ] },
  { id: 15, image: Mask15, category: 'Trendy', smallImages: [Mask9, Mask12, Mask15, Mask32]  },
  { id: 16, image: Mask16, category: 'Modern',  smallImages: [Mask4, Mask7, Mask10, Mask13 ] },
  { id: 17, image: Mask17, category: 'Classic',  smallImages:  [Mask11, Mask14, Mask26, Mask23 ] },
  { id: 18, image: Mask18, category: 'Trendy', smallImages: [Mask9, Mask12, Mask15, Mask32]  },
  { id: 19, image: Mask19, category: 'Modern',  smallImages: [Mask13, Mask16, Mask19, Mask22 ] },
  { id: 20, image: Mask20, category: 'Classic',  smallImages:  [Mask32, Mask29, Mask26, Mask23 ]  },
  { id: 21, image: Mask21, category: 'Trendy', smallImages: [Mask9, Mask12, Mask15, Mask32]  },
  { id: 22, image: Mask22, category: 'Modern',  smallImages: [Mask4, Mask7, Mask10, Mask13 ] },
  { id: 23, image: Mask23, category: 'Classic',  smallImages: [Mask17, Mask20, Mask29, Mask26 ] },
  { id: 24, image: Mask24, category: 'Trendy', smallImages: [Mask9, Mask12, Mask15, Mask32]  },
  { id: 25, image: Mask25, category: 'Modern',  smallImages: [Mask13, Mask16, Mask19, Mask22 ]},
  { id: 26, image: Mask26, category: 'Classic',  smallImages:  [Mask32, Mask29, Mask26, Mask23 ]  },
  { id: 27, image: Mask27, category: 'Trendy', smallImages: [Mask9, Mask12, Mask15, Mask32]  },
  { id: 28, image: Mask28, category: 'Modern',  smallImages: [Mask25, Mask28, Mask31, Mask34 ] },
  { id: 29, image: Mask29, category: 'Classic',  smallImages: [Mask17, Mask20, Mask23, Mask26 ] },
  { id: 30, image: Mask30, category: 'Trendy', smallImages: [Mask9, Mask12, Mask15, Mask32]  },
  { id: 31, image: Mask31, category: 'Modern',  smallImages: [Mask4, Mask7, Mask10, Mask13 ] },
  { id: 32, image: Mask32, category: 'Classic',  smallImages: [Mask23, Mask20, Mask17, Mask14 ] },
  { id: 33, image: Mask33, category: 'Trendy', smallImages: [Mask9, Mask12, Mask15, Mask32]  },
  { id: 34, image: Mask34, category: 'Modern',  smallImages: [Mask25, Mask28, Mask31, Mask34 ] },
  { id: 35, image: Mask35, category: 'Classic',  smallImages: [Mask32, Mask29, Mask26, Mask23 ] },
  { id: 36, image: Mask36, category: 'Trendy', smallImages: [Mask9, Mask12, Mask15, Mask32]  },
 
];

  // const handleImageClick = (id) => {
  //   navigate(`/livingroom-design/${id}`);
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
        <h3>Living Room Interior <br/>Designs</h3>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
             Etiam ornare tempus aliquet. Pellentesque finibus, est et iaculis suscipit, dolor nulla commodo dui,
             nec ultricies arcu nisl tristique eros. Morbi eros Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet.</p>
          
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
                to="/livingroom-design"
                state={{ image: design.image, category: design.category, smallImages: design.smallImages, }}
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

export default Livingroom;
