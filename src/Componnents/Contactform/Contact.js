import React, { useState } from 'react';
import '../Contactform/Contact.css'; // Your CSS for styling
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Import the default styling

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState(false);
  const [address, setAddress] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate required fields
    if (!name || !email || !phone) {
      alert('Please fill in all required fields.');
      return;
    }

    console.log('Form submitted:', { name, email, phone, whatsapp, address });
  };

  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Talk to Our Designer</h2>

        {/* Name Field */}
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-label="Enter your full name"
            required
          />
        </div>

        {/* Email Field */}
        <div className="form-group">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Enter your email address"
            required
          />
        </div>

        {/* Phone Field */}
        <div className="form-group">
          <PhoneInput
            international
            defaultCountry="IN"
            placeholder="Enter your phone number"
            value={phone}
            onChange={setPhone}
            aria-label="Enter your phone number"
            required
          />
        </div>

        {/* WhatsApp Checkbox
        <div className="form-group whatsapp-group">
          <input
            type="checkbox"
            id="whatsapp"
            checked={whatsapp}
            onChange={(e) => setWhatsapp(e.target.checked)}
            aria-label="Allow WhatsApp contact"
          />
          <label htmlFor="whatsapp">You can reach me on WhatsApp</label>
        </div> */}

<div className="form-group whatsapp-group">
  <input
    type="checkbox"
    id="whatsapp"
    checked={whatsapp}
    onChange={(e) => setWhatsapp(e.target.checked)}
  />
  <label htmlFor="whatsapp">You can reach me on WhatsApp</label>
</div>

        {/* Address Field */}
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter your address (optional)"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            aria-label="Enter your address (optional)"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="contact-btn">
          Talk to Our Design Consultant
        </button>

        {/* Footer Text */}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </form>
    </div>
  );
};

export default ContactForm;
