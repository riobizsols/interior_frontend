import React, { useState } from 'react';
import '../Kitchen/Kitchen.css'
import Header1 from '../../Assets/Kitchen 1.png';
import Navbar from '../Navbar/Navbar';
import Mask1 from '../../Assets/K-Mask group (1).png';
import Mask2 from '../../Assets/K-Mask group (2).png';
import Mask3 from '../../Assets/K-Mask group (3).png';
import Mask4 from '../../Assets/K-Mask group (4).png';
import Mask5 from '../../Assets/K-Mask group (5).png';
import Mask6 from '../../Assets/K-Mask group (6).png';
import Mask7 from '../../Assets/K-Mask group (7).png';
import Mask8 from '../../Assets/K-Mask group (8).png';
import Mask9 from '../../Assets/K-Mask group (9).png';
import Mask10 from '../../Assets/K-Mask group (10).png';
import Mask11 from '../../Assets/K-Mask group (11).png';
import Mask12 from '../../Assets/K-Mask group (12).png';
import Mask13 from '../../Assets/K-Mask group (13).png';
import Mask14 from '../../Assets/K-Mask group (14).png';
import Mask15 from '../../Assets/K-Mask group (15).png';
import Mask16 from '../../Assets/K-Mask group (16).png';
import Mask17 from '../../Assets/K-Mask group (17).png';
import Mask18 from '../../Assets/K-Mask group (18).png';
import Mask19 from '../../Assets/K-Mask group (19).png';
import Mask20 from '../../Assets/K-Mask group (20).png';
import Mask21 from '../../Assets/K-Mask group (21).png';
import Mask22 from '../../Assets/K-Mask group (22).png';
import Mask23 from '../../Assets/K-Mask group (23).png';
import Mask24 from '../../Assets/K-Mask group (24).png';
import Mask25 from '../../Assets/K-Mask group (25).png';
import Mask26 from '../../Assets/K-Mask group (26).png';
import Mask27 from '../../Assets/K-Mask group (27).png';
import Mask28 from '../../Assets/K-Mask group (28).png';
import Mask29 from '../../Assets/K-Mask group (29).png';
import Mask30 from '../../Assets/K-Mask group (30).png';
import Mask31 from '../../Assets/K-Mask group (31).png';
import Mask32 from '../../Assets/K-Mask group (32).png';
import Mask33 from '../../Assets/K-Mask group (33).png';
import Mask34 from '../../Assets/K-Mask group (34).png';
import Mask35 from '../../Assets/K-Mask group (35).png';
import Mask36 from '../../Assets/K-Mask group (36).png';
import Footer from '../Footer/Footer';
import { AiFillCaretDown } from "react-icons/ai";
import searchicon from '../../Assets/search.png';

const designs = [
  { id: 1, image: Mask1, category: 'Modern' },
  { id: 2, image: Mask2, category: 'Classic' },
  { id: 3, image: Mask3, category: 'Trendy' },
  { id: 4, image: Mask4, category: 'Modern' },
  { id: 5, image: Mask5, category: 'Classic' },
  { id: 6, image: Mask6, category: 'Trendy' },
  { id: 7, image: Mask7, category: 'Modern' },
  { id: 8, image: Mask8, category: 'Classic' },
  { id: 9, image: Mask9, category: 'Trendy' },
  { id: 10, image: Mask10, category: 'Modern' },
  { id: 11, image: Mask11, category: 'Classic' },
  { id: 12, image: Mask12, category: 'Trendy' },
  { id: 13, image: Mask13, category: 'Modern' },
  { id: 14, image: Mask14, category: 'Classic' },
  { id: 15, image: Mask15, category: 'Trendy' },
  { id: 16, image: Mask16, category: 'Modern' },
  { id: 17, image: Mask17, category: 'Classic' },
  { id: 18, image: Mask18, category: 'Trendy' },
  { id: 19, image: Mask19, category: 'Modern' },
  { id: 20, image: Mask20, category: 'Classic' },
  { id: 21, image: Mask21, category: 'Trendy' },
  { id: 22, image: Mask22, category: 'Modern' },
  { id: 23, image: Mask23, category: 'Classic' },
  { id: 24, image: Mask24, category: 'Trendy' },
  { id: 25, image: Mask25, category: 'Modern' },
  { id: 26, image: Mask26, category: 'Classic' },
  { id: 27, image: Mask27, category: 'Trendy' },
  { id: 28, image: Mask28, category: 'Modern' },
  { id: 29, image: Mask29, category: 'Classic' },
  { id: 30, image: Mask30, category: 'Trendy' },
  { id: 31, image: Mask31, category: 'Modern' },
  { id: 32, image: Mask32, category: 'Classic' },
  { id: 33, image: Mask33, category: 'Trendy' },
  { id: 34, image: Mask34, category: 'Modern' },
  { id: 35, image: Mask35, category: 'Classic' },
  { id: 36, image: Mask36, category: 'Trendy' },
];

const Kitchen = () => {

const [filter, setFilter] = useState('All'); // Dropdown filter state
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
    const matchesFilter = filter === 'All' || design.category === filter;
    const matchesSearch = design.category.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div>
         <div id='banner1'>
        <img className='Livheader' src={Header1} alt='Living Room Background' />
        <Navbar/>

        <div className="banner1_content">
          <h3>Home • Interior Customize • Kitchen</h3>
          <h1>Kitchen</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet. 
            Pellentesque finibus, est et iaculis suscipit, dolor nulla commodo dui, nec suscipit eros 
            ante nisi tristique eros.
          </p>
          <button className="design_button">Talk to Our Design Consultant</button>
        </div>
      </div>

      {/* Interior Designs Section */}
      <section className="interior_designs">
        <div className="interior_controls">
          <div className="controls_left">
            <h2>Living Room Interior Designs</h2>
            <div className="filter_dropdown_container">
              <select 
                className="filter_dropdown" 
                value={filter} 
                onChange={handleFilterChange}
              >
                <option value="All">All</option>
                <option>Trendy</option>
                <option>Modern</option>
                <option>Classic</option>
              </select>
              <AiFillCaretDown className="filter_icon" />             
            </div>
          </div>
          <div className="controls_right">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet.
              Pellentesque finibus, est et iaculis suscipit, dolor nulla commodo dui.
            </p>
            <div className="search_container">
            <input 
                type="text" 
                className="search_box" 
                placeholder="Search by category"
                value={search}
                onChange={handleSearchChange}
              />
              <img src={searchicon} alt='Search Icon' className="search_icon" />
            </div>
          </div>
        </div>

        {/* Design Cards Grid */}
        <div className="design_cards">
          {filteredDesigns.length > 0 ? (
            filteredDesigns.map((design) => (
              <div className="card" key={design.id}>
                <div className="card_title">
                  <h4>{design.category}</h4>
                </div>
                <img src={design.image} alt={`Design ${design.id}`} />
              </div>
            ))
          ) : (
            <p>No designs match your criteria.</p>
          )}
        </div>
      </section>

      <Footer/>
    </div>
  )
}

export default Kitchen