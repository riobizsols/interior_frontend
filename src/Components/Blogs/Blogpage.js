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
  { id: 1, date: '24th Nov 2024', title: 'Design Trends 2024', title2: 'Innovations Shaping the Future', description: 'Explore the latest innovations shaping modern design.', overview: 'A look at futuristic UI, AI-driven aesthetics, and more.', image: Mask1 },
  { id: 2, date: '16th Sept 2024', title: 'Web Aesthetics', title2: 'The Power of Visual Storytelling', description: 'How visual storytelling enhances user engagement.', overview: 'Learn how compelling visuals create immersive experiences.', image: Mask2 },
  { id: 3, date: '02nd Apr 2024', title: 'Minimalist Approach', title2: 'Less is More in Design', description: 'Unveiling the power of simplicity in design.', overview: 'Why removing excess leads to intuitive and clean interfaces.', image: Mask3 },
  { id: 4, date: '24th Nov 2024', title: 'Typography Matters', title2: 'Choosing the Right Font', description: 'The role of fonts in enhancing readability online.', overview: 'How typography impacts readability, mood, and branding.', image: Mask4 },
  { id: 5, date: '16th Sept 2024', title: 'User-Centered UI', title2: 'Designing for Human Needs', description: 'Interfaces that prioritize users for seamless experiences.', overview: 'User-centered design principles for better engagement.', image: Mask5 },
  { id: 6, date: '02nd Apr 2024', title: 'Color Psychology', title2: 'The Impact of Colors on Emotions', description: 'Understanding how colors influence design and emotions.', overview: 'Color choices impact brand perception and user decisions.', image: Mask6 },
  { id: 7, date: '24th Nov 2024', title: 'Future of UX', title2: 'What’s Next for User Experience?', description: 'The evolution of UX shaping digital interactions.', overview: 'AI personalization, voice interfaces, and AR innovations.', image: Mask7 },
  { id: 8, date: '16th Sept 2024', title: 'AI in Design', title2: 'Automation Meets Creativity', description: 'Exploring AI’s impact on automation and design efficiency.', overview: 'How AI enhances creativity, workflow, and UX design.', image: Mask8 },
  { id: 9, date: '02nd Apr 2024', title: 'Mobile-First UX', title2: 'Prioritizing Mobile Users', description: 'Why mobile-first design is key to engaging experiences.', overview: 'How optimizing for mobile boosts usability and accessibility.', image: Mask9 },
  { id: 10, date: '24th Nov 2024', title: 'Interactive Design', title2: 'Bringing Websites to Life', description: 'The power of animations in enhancing web interactions.', overview: 'Microinteractions and motion design for better engagement.', image: Mask10 },
  { id: 11, date: '16th Sept 2024', title: 'Dark Mode Benefits', title2: 'Aesthetic & Functional Advantages', description: 'Why dark mode is gaining popularity in UI/UX.', overview: 'How dark mode reduces eye strain and enhances visuals.', image: Mask11 },
  { id: 12, date: '02nd Apr 2024', title: 'Design Thinking', title2: 'Creative Problem-Solving', description: 'A problem-solving approach centered around users.', overview: 'Empathy-driven design to create impactful solutions.', image: Mask12 },
  { id: 13, date: '24th Nov 2024', title: 'E-Commerce UI', title2: 'Designing for Conversions', description: 'Essential UI principles for high-converting online stores.', overview: 'Best practices for optimizing the online shopping experience.', image: Mask13 },
  { id: 14, date: '16th Sept 2024', title: 'Trendy Gradients', title2: 'Revitalizing Digital Aesthetics', description: 'How modern gradients are transforming digital branding.', overview: 'Gradient usage in UI to create stunning, vibrant effects.', image: Mask14 },
  { id: 15, date: '02nd Apr 2024', title: '3D Elements', title2: 'Immersive Web Experiences', description: 'The rise of 3D graphics for engaging websites.', overview: 'How 3D visuals enhance interaction and user engagement.', image: Mask15 },
  { id: 16, date: '24th Nov 2024', title: 'Microinteractions', title2: 'Enhancing UX with Subtle Details', description: 'Small animations that make a big impact.', overview: 'How microinteractions improve usability and user delight.', image: Mask16 },
  { id: 17, date: '16th Sept 2024', title: 'Neumorphism', title2: 'Soft UI for Modern Designs', description: 'A fresh design trend blending realism and minimalism.', overview: 'How neumorphism creates a sleek and intuitive interface.', image: Mask17 },
  { id: 18, date: '02nd Apr 2024', title: 'Website Speed', title2: 'Optimizing for Performance', description: 'Why website speed is crucial for user retention.', overview: 'Best practices for improving load times and performance.', image: Mask18 },
  { id: 19, date: '24th Nov 2024', title: 'AR in Web Design', title2: 'Augmented Reality Meets UX', description: 'How AR enhances online experiences.', overview: 'Bringing digital interfaces to life through AR technology.', image: Mask19 },
  { id: 20, date: '16th Sept 2024', title: 'Data-Driven Design', title2: 'Making Decisions with Analytics', description: 'Using data to optimize UI/UX strategies.', overview: 'How user analytics influence effective design choices.', image: Mask20 },
  { id: 21, date: '02nd Apr 2024', title: 'Voice UI', title2: 'The Rise of Voice Interaction', description: 'How voice interfaces are changing user experiences.', overview: 'The impact of voice commands in modern UX design.', image: Mask21 },

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
              state={{image: post.image, date: post.date, title: post.title, description: post.description, secondTitle: post.title2, overView: post.overview}}
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
