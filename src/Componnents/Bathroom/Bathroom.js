import React, { useState } from 'react';
import '../Bathroom/Bathroom.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { AiFillCaretDown } from 'react-icons/ai';
import Header1 from '../../Assets/Bathroom 1.png';
import Mask1 from '../../Assets/BA-Mask group (1).png';
import Mask2 from '../../Assets/BA-Mask group (2).png';
import Mask3 from '../../Assets/BA-Mask group (3).png';
import Mask4 from '../../Assets/BA-Mask group (4).png';
import Mask5 from '../../Assets/BA-Mask group (5).png';
import Mask6 from '../../Assets/BA-Mask group (6).png';
import Mask7 from '../../Assets/BA-Mask group (7).png';
import Mask8 from '../../Assets/BA-Mask group (8).png';
import Mask9 from '../../Assets/BA-Mask group (9).png';
import Mask10 from '../../Assets/BA-Mask group (10).png';
import Mask11 from '../../Assets/BA-Mask group (11).png';
import Mask12 from '../../Assets/BA-Mask group (12).png';
import Mask13 from '../../Assets/BA-Mask group (13).png';
import Mask14 from '../../Assets/BA-Mask group (14).png';
import Mask15 from '../../Assets/BA-Mask group (15).png';
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
];

const Bathroom = () => {

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
      {/* Banner Section */}
      <div id='banner1'>
        <img className='Livheader' src={Header1} alt='Bathroom Background' />
        <Navbar />

        <div className="banner1_content">
          <h3>Home • Interior Customize • Bathroom</h3>
          <h1>Bathroom</h1>
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
            <h2>Bathroom Interior Designs</h2>
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

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Bathroom;
