import React from 'react';
import '../Blogs/Blogpage.css';
import Header1 from '../../Assets/Blogs 1.png';
import Navbar from '../Navbar/Navbar'; 
import Footer from '../Footer/Footer';
import Mask1 from '../../Assets/BL-Mask group (1).png'
import Mask2 from '../../Assets/BL-Mask group (2).png'
import Mask3 from '../../Assets/BL-Mask group (3).png'
import Mask4 from '../../Assets/BL-Mask group (4).png'
import Mask5 from '../../Assets/BL-Mask group (5).png'
import Mask6 from '../../Assets/BL-Mask group (6).png'
import Mask7 from '../../Assets/BL-Mask group (7).png'
import Mask8 from '../../Assets/BL-Mask group (8).png'
import Mask9 from '../../Assets/BL-Mask group (9).png'
import Mask11 from '../../Assets/BL-Mask group (11).png'
import Mask12 from '../../Assets/BL-Mask group (12).png'
import Mask13 from '../../Assets/BL-Mask group (13).png'
import Mask14 from '../../Assets/BL-Mask group (14).png'
import Mask15 from '../../Assets/BL-Mask group (15).png'
import Mask16 from '../../Assets/BL-Mask group (16).png'
import Mask17 from '../../Assets/BL-Mask group (17).png'
import Mask18 from '../../Assets/BL-Mask group (18).png'
import Mask19 from '../../Assets/BL-Mask group (19).png'
import Mask20 from '../../Assets/BL-Mask group (20).png'
import Mask21 from '../../Assets/BL-Mask group (21).png'

const blogPosts = [
  { id: 1, date: '24th Nov 2024', title: 'Lorem ipsum is dolor', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet.', image: Mask1 },
  { id: 2, date: '16th Sept 2024', title: 'Lorem ipsum is dolor', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet.', image: Mask2 },
  { id: 3, date: '02nd Apr 2024', title: 'Lorem ipsum is dolor', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet.', image: Mask3 },
  { id: 4, date: '24th Nov 2024', title: 'Lorem ipsum is dolor', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet.', image: Mask4 },
  { id: 5, date: '16th Sept 2024', title: 'Lorem ipsum is dolor', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet.', image: Mask5 },
  { id: 6, date: '02nd Apr 2024', title: 'Lorem ipsum is dolor', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet.', image: Mask6 },
  { id: 7, date: '24th Nov 2024', title: 'Lorem ipsum is dolor', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet.', image: Mask7 },
  { id: 8, date: '16th Sept 2024', title: 'Lorem ipsum is dolor', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet.', image: Mask8 },
  { id: 9, date: '02nd Apr 2024', title: 'Lorem ipsum is dolor', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet.', image: Mask9 },
  { id: 10, date: '24th Nov 2024', title: 'Lorem ipsum is dolor', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet.', image: Mask11 },
  { id: 11, date: '16th Sept 2024', title: 'Lorem ipsum is dolor', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet.', image: Mask11 },
  { id: 12, date: '02nd Apr 2024', title: 'Lorem ipsum is dolor', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet.', image: Mask12 },
  { id: 13, date: '24th Nov 2024', title: 'Lorem ipsum is dolor', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet.', image: Mask13 },
  { id: 14, date: '16th Sept 2024', title: 'Lorem ipsum is dolor', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet.', image: Mask14 },
  { id: 15, date: '02nd Apr 2024', title: 'Lorem ipsum is dolor', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet.', image: Mask15 },
  { id: 16, date: '24th Nov 2024', title: 'Lorem ipsum is dolor', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet.', image: Mask16 },
  { id: 17, date: '16th Sept 2024', title: 'Lorem ipsum is dolor', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet.', image: Mask17 },
  { id: 18, date: '02nd Apr 2024', title: 'Lorem ipsum is dolor', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet.', image: Mask18 },
  { id: 19, date: '24th Nov 2024', title: 'Lorem ipsum is dolor', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet.', image: Mask19 },
  { id: 20, date: '16th Sept 2024', title: 'Lorem ipsum is dolor', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet.', image: Mask20 },
  { id: 21, date: '02nd Apr 2024', title: 'Lorem ipsum is dolor', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet.', image: Mask21 },
 
];

const Blogpage = () => {
  return (
    <div>
      <div id="banner1">
        <img className="Livheader" src={Header1} alt="Blogpage Background" />
        <Navbar />

        <div className="banner1_content">
          <h3>Home • Blogs</h3>
          <h1>Blogs</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet.
            Pellentesque finibus, est et iaculis suscipit, dolor nulla commodo dui.
          </p>
          <button className="design_button">Talk to Our Design Consultant</button>
        </div>
      </div>

      <section className="blogs_section">
        <h2>Lorem ipsum is dolor sit amet, sit amet</h2>
        <div className="blogs_grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog_card">
              <div className="blog_image_wrapper">
                <img src={post.image} alt={`Blog ${post.id}`} className="blog_image" />
                <div className="blog_date">{post.date}</div>
              </div>
              <h4>{post.title}</h4>
              <p>{post.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};


export default Blogpage;
