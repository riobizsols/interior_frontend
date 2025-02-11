import React from 'react';
import '../Blogs/Blog1.css';
import Navbar from '../Navbar/Navbar';
import Header1 from '../../Assets/1st Page Blog 1.png';
import blogimg1 from '../../Assets/BLMask group (1).png';
import PayperAccordion from '../Payperaccordion/Payperaccordion';
import blogimg2 from '../../Assets/image 18 (Traced).png';
import blogimg3 from '../../Assets/image 19.png';
import ContactForm from '../Contactform/Contact';
import Footer from '../Footer/Footer';

const Blog1 = () => {
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
    <div>
      {/* Blog Banner Section */}
      <div id="blogbanner1">
        <img className="blog1header" src={Header1} alt="Blog Page Background" />
        <Navbar />
        <div className="blogbanner1_content">
          <h1>Lorem ipsum dolor sit amet, consect</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet. Pellentesque finibus, est et iaculis suscipit.
          </p>
          <p>By IWD - 24th Nov 2024</p>
          <button className="design_button">Talk to Our Design Consultant</button>
        </div>
      </div>

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
           
            <h2>Lorem ipsum is dolor sit amet, sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet. Pellentesque finibus, est et iaculis suscipit, 
              dolor nulla commodo dui, nec ultricies arcu nisl tristique eros. Morbi eros est, pulvinar eget ornare ac, ultrices eget risus. 
            </p>
           
            <img className="blogcontent-img" src={blogimg1} alt="Blog Content Image 1" />

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
        <hr className="horizontal-line" />
      </div>

      {/* Additional Blog Content */}
      <div className="main-grid">
        <section className="blogsec">
          <div className="blogcontent">
            <h2>Lorem ipsum is dolor sit amet, sit amet</h2>
            <img className="blogcontent-img" src={blogimg1} alt="Blog Content Image 1" />
            <h2>Lorem ipsum is dolor sit amet, sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet. Pellentesque finibus, est et iaculis suscipit,
              dolor nulla commodo dui, nec ultricies arcu nisl tristique eros. Morbi eros est, pulvinar eget ornare ac, ultrices eget risus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet. Pellentesque finibus, est et iaculis suscipit,
              dolor nulla commodo dui, nec ultricies arcu nisl tristique eros. Morbi eros est, pulvinar eget ornare ac, ultrices eget risus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet. Pellentesque finibus, est et iaculis suscipit,
              dolor nulla commodo dui, nec ultricies arcu nisl tristique eros. Morbi eros est, pulvinar eget ornare ac, ultrices eget risus.
            </p>
            
          </div>
        </section>

        <section>
          <div>
            <img className="blog3img" src={blogimg3} alt="Additional Blog Image" />
          </div>
          <hr className="horizontal-line1" />
        </section>
      </div>
      
      <div className="main-grid">
        <section className="blogsec">
          <div className="blogcontent">
            <h2>Lorem ipsum is dolor sit amet, sit amet</h2>
            <img className="blogcontent-img" src={blogimg1} alt="Blog Content Image 1" />
            <h2>Lorem ipsum is dolor sit amet, sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet. Pellentesque finibus, est et iaculis suscipit,
              dolor nulla commodo dui, nec ultricies arcu nisl tristique eros. Morbi eros est, pulvinar eget ornare ac, ultrices eget risus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet. Pellentesque finibus, est et iaculis suscipit,
              dolor nulla commodo dui, nec ultricies arcu nisl tristique eros. Morbi eros est, pulvinar eget ornare ac, ultrices eget risus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet. Pellentesque finibus, est et iaculis suscipit,
              dolor nulla commodo dui, nec ultricies arcu nisl tristique eros. Morbi eros est, pulvinar eget ornare ac, ultrices eget risus.
            </p>
            
          </div>
        </section>

        <section>
          <div>
            <img className="blog3img" src={blogimg3} alt="Additional Blog Image" />
          </div>
          <hr className="horizontal-line1" />
        </section>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Blog1;
