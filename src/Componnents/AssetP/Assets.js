import React, { useState } from 'react'; 
import { AiFillCaretDown } from "react-icons/ai";
import searchicon from '../../Assets/search.png'
import '../AssetP/Assets.css'
import Header1 from '../../Assets/Assets image1.png'
import Navbar from '../Navbar/Navbar'
import Mask1 from '../../Assets/—Pngtree—dining table_5631946 1.png';
import Mask2 from '../../Assets/pngwing.com (1) 1.png';
import Mask3 from '../../Assets/Golden-Fancy-Light-PNG-Clipart-Background 1.png';
import Mask4 from '../../Assets/11444629 copy 1.png';
import Mask5 from '../../Assets/download 1.png';
import Mask6 from '../../Assets/pngegg 1.png';
import Mask7 from '../../Assets/vdsdvd 1.png';
import Mask8 from '../../Assets/scsac 1.png';
import Mask9 from '../../Assets/closed-door-png-transparent-images--25 1.png';
import Footer from '../Footer/Footer';

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
            <h3>Home • Assets</h3>
            <h1>Assets</h1>
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
              <h2>Assets</h2>
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
                <div className="cards" key={design.id}>
                  {/* <div className="card_title">
                    <h4>{design.category}</h4>
                  </div> */}
                  <img src={design.image} alt={`Design ${design.id}`} />
                </div>
              ))
            ) : (
              <p>No designs match your criteria.</p>
            )}
          </div>
          <div className="pagination">
        <button>{"<"}</button>
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>{"..."}</button>
        <button>15</button>
        <button>{">"}</button>
      </div>
        </section>
        
        <Footer />
      </div>
    );
  };
  
  export default Homeoffice;
  