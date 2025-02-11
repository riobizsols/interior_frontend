import React, { useState } from "react";
import '../Payperaccordion/Payperaccordion.css';
import { FaCaretRight, FaCaretUp } from "react-icons/fa6";

const Payperaccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion-container">
      <h2 className="accordion-title">⭐ Explore More</h2>
      {items.map((item, index) => (
        <div key={index} className={`accordion-item ${openIndex === index ? "active" : ""}`}>
          <div className="accordion-header" onClick={() => handleAccordionClick(index)}>
            <h3 className="accordion-label">{item.label}</h3>
            <span className="accordion-icon">
              {openIndex === index ? <FaCaretUp /> : <FaCaretRight />}
            </span>
          </div>
          <div className={`accordion-content ${openIndex === index ? "show" : ""}`}>
            <div className="accordion-divider"></div>
            <div className="accordion-text-content">
              {/* Handle both string and array content */}
              {Array.isArray(item.content) ? (
                <ul>
                  {item.content.map((contentItem, i) => (
                    <li key={i}>{contentItem}</li>
                  ))}
                </ul>
              ) : (
                <p>{item.content}</p>
              )}
              <a href="#" className="accordion-view-more">View More</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Payperaccordion;
