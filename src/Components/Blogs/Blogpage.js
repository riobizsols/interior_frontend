import React from 'react';
import '../Blogs/Blogpage.css';
import Header1 from '../../assets/Blogs 1.png';
import Navbar from '../Navbar/Navbar'; 
import Footer from '../Footer/Footer';
import Mask1 from '../../assets/Blog_images/Mask group-1.png'
import Mask2 from '../../assets/Blog_images/Mask group-2.png'
import Mask3 from '../../assets/Blog_images/Mask group-3.png'
import Mask4 from '../../assets/Blog_images/Mask group-4.png'
import Mask5 from '../../assets/Blog_images/Mask group-5.png'
import Mask6 from '../../assets/Blog_images/Mask group-6.png'
import Mask7 from '../../assets/Blog_images/Mask group-7.png'
import Mask8 from '../../assets/Blog_images/Mask group-8.png'
import Mask9 from '../../assets/Blog_images/Mask group-9.png'
import Mask10 from '../../assets/Blog_images/Mask group-10.png'
import Mask11 from '../../assets/Blog_images/Mask group-11.png'
import Mask12 from '../../assets/Blog_images/Mask group-12.png'
import Mask13 from '../../assets/Blog_images/Mask group-13.png'
import Mask14 from '../../assets/Blog_images/Mask group-14.png'
import Mask15 from '../../assets/Blog_images/Mask group-15.png'
import Mask16 from '../../assets/Blog_images/Mask group-16.png'
import Mask17 from '../../assets/Blog_images/Mask group-17.png'
import Mask18 from '../../assets/Blog_images/Mask group-18.png'
import Mask19 from '../../assets/Blog_images/Mask group-19.png'
import Mask20 from '../../assets/Blog_images/Mask group-20.png'
import Mask21 from '../../assets/Blog_images/Mask group.png'
import { Link } from 'react-router-dom';

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
  { id: 10, date: '24th Nov 2024', title: 'Lorem ipsum is dolor', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet.', image: Mask10 },
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
      <section className="blogs_section">
        <div className="blogs_grid">
          
          {blogPosts.map((post) => (
            <div  className="blog_card">
              <Link
              key={post.id}
              to="/blog1"
              state={{image: post.image, date: post.date, title: post.title, description: post.description}}
              >
              <div className="blog_image_wrapper">
                <img src={post.image} alt={`Blog ${post.id}`} className="blog_image" />
                <div className="blog_date">{post.date}</div>
              </div>
              <h4>{post.title}</h4>
              <p>{post.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};


export default Blogpage;
