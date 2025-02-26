import React from 'react';
import '../Blogs/Blog1.css';
import Navbar from '../Navbar/Navbar';
import Header1 from '../../assets/1st Page Blog 1.png';
import blogimg1 from '../../assets/BLMask group (1).png';
import PayperAccordion from '../Payperaccordion/Payperaccordion';
import blogimg2 from '../../assets/image 18 (Traced).png';
import blogimg3 from '../../assets/image 19.png';
import ContactForm from '../Contactform/Contact';
import Footer from '../Footer/Footer';
import { useLocation, useNavigate } from 'react-router-dom';

const Blog1 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {image, date, title, description} = location.state || {}
  const accordionItems = [
    {
      label: 'Bed Room',
      content: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Lorem ipsum dolor sit amet, consectetur.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      ],
    },
    {
      label: 'Bath Room',
      content: [
        'This is a single-line string content for Bath Room. Lorem ipsum dolor sit amet.',
      ],
    },
    {
      label: 'Kitchen',
      content: ['Item 1', 'Item 2', 'Item 3'],
    },
    {
      label: 'Home Office',
      content: ['A short description for the Home Office.'],
    },
    {
      label: 'Assets',
      content: ['Asset 1', 'Asset 2'],
    },
  ];

  return (
    <div className='main_blog'>
      {/* Main Content Section */}
      <div className="main-grid">
        <section className="blogsec">
          <div className="blogcontent">
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet. Pellentesque finibus, est et iaculis suscipit, 
             dolor nulla commodo dui, nec ultricies arcu nisl tristique eros. Morbi eros est, pulvinar eget ornare ac, ultrices eget risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
             Etiam ornare tempus aliquet. Pellentesque finibus, est et iaculis suscipit, dolor nulla commodo dui, nec ultricies arcu nisl tristique eros. Morbi eros est, pulvinar eget ornare ac, ultrices eget risus.
          </p>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet. Pellentesque finibus, est et iaculis suscipit, 
             dolor nulla commodo dui, nec ultricies arcu nisl tristique eros. Morbi eros est, pulvinar eget ornare ac, ultrices eget risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
             Etiam ornare tempus aliquet. Pellentesque finibus, est et iaculis suscipit, dolor nulla commodo dui, nec ultricies arcu nisl tristique eros. Morbi eros est, pulvinar eget ornare ac, ultrices eget risus.
          </p>
           
            <h2>{title}</h2>
            <p>{date}</p>
            <p>{description}</p>
           
            {/* <img className="blogcontent-img" src={blogimg1} alt="Blog Content Image 1" /> */}
            {image && <img src={image} alt="Blog Content Image 1" />}
            <h2>Lorem ipsum is dolor sit amet, sit amet</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet. Pellentesque finibus, est et iaculis suscipit,
              dolor nulla commodo dui, nec ultricies arcu nisl tristique eros. Morbi eros est, pulvinar eget ornare ac, ultrices eget risus.
            </p>

          </div>
        </section>

        {/* Sidebar Section */}
        <div className="grid-2">
          <div className="digital_ser_wapp">
            <PayperAccordion items={accordionItems} />
          </div>
          <ContactForm />
          <div>
            <img className="bg-poster" src={blogimg2} alt="Background Poster" />
          </div>
        </div>
        
      </div>
      <hr className="horizontal-line" />
    </div>
  );
};

export default Blog1;
