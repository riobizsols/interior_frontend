import React, { useState } from 'react'; // Added useState import
import Header1 from '../../Assets/Home Office 1.png';
import Navbar from '../Navbar/Navbar';
import Mask1 from '../../Assets/H-Mask group (1).png';
import Mask2 from '../../Assets/H-Mask group (2).png';
import Mask3 from '../../Assets/H-Mask group (3).png';
import Mask4 from '../../Assets/H-Mask group (4).png';
import Mask5 from '../../Assets/H-Mask group (5).png';
import Mask6 from '../../Assets/H-Mask group (6).png';
import Footer from '../Footer/Footer';
import { AiFillCaretDown } from "react-icons/ai";
import searchicon from '../../Assets/search.png';

// Sample design data
const designs = [
  { id: 1, image: Mask1, category: 'Modern' },
  { id: 2, image: Mask2, category: 'Classic' },
  { id: 3, image: Mask3, category: 'Trendy' },
  { id: 4, image: Mask4, category: 'Modern' },
  { id: 5, image: Mask5, category: 'Classic' },
  { id: 6, image: Mask6, category: 'Trendy' },
];

const Homeoffice = () => {
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
        <img className='Livheader' src={Header1} alt='Home Office Background' />
        <Navbar />

        <div className="banner1_content">
          <h3>Home • Interior Customize • Home Office</h3>
          <h1>Home Office</h1>
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
            <h2>Home Office Interior Designs</h2>
            <div className="filter_dropdown_container">
              <select 
                className="filter_dropdown" 
                value={filter} 
                onChange={handleFilterChange}
              >
                <option value="All">All</option>
                <option value="Modern">Modern</option>
                <option value="Classic">Classic</option>
                <option value="Trendy">Trendy</option>
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

      <Footer />
    </div>
  );
};

export default Homeoffice;
