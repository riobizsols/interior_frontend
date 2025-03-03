import React, { useState } from 'react';
import '../Contactform/Contact.css'; // Your CSS for styling
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Import the default styling
import * as Yup from "yup";
import axios from "axios";
import { useFormik } from "formik";


const ContactForm = () => {
  const [message, setMessage] = useState("");

    const formik = useFormik({
      initialValues: {
        name: "",
        email: "",
        phone: "",
        address: "",
        whatsapp: false,
      },
      validationSchema: Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        phone: Yup.string().required("Phone number is required"),
        address: Yup.string().required("Address is required"),
      }),
      onSubmit: async (values, { resetForm }) => {
        console.log("Form submitted:", values); // Debug log
        try {
          const response = await axios.post("http://localhost:5001/contact-email", values);
          setMessage(response.data.message);
          alert('mail send successfully')
          resetForm();
        } catch (error) {
          console.error("Submission error:", error); // Debug log
          setMessage("Failed to send email. Please try again later.");
        }
      },
    });


  return (
    <div className="contact-container">
      <form onSubmit={formik.handleSubmit} className="contact-form">
        <h2>Talk to Our Designer</h2>

        {/* Name Field */}
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formik.values.name}
            onChange={formik.handleChange}
            aria-label="Enter your full name"
            required
          />
        </div>

        {/* Email Field */}
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formik.values.email}
            onChange={formik.handleChange}
            aria-label="Enter your email address"
            required
          />
        </div>

        {/* Phone Field */}
        <div className="form-group">
          <PhoneInput
            international
            defaultCountry="IN"
            type="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={formik.values.phone}
  onChange={(value) => formik.setFieldValue("phone", value)} // Correct way
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
    name="whatsapp"
    id="whatsapp"
    checked={formik.values.whatsapp}
    onChange={formik.handleChange}
  />
  <label htmlFor="whatsapp">You can reach me on WhatsApp</label>
</div>

        {/* Address Field */}
        <div className="form-group">
          <input
            type="text"
            name="address"
            placeholder="Enter your address (optional)"
            value={formik.values.address}
            onChange={formik.handleChange}
            aria-label="Enter your address (optional)"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="contact-btn">
          Talk to Our Design Consultant
        </button>

        {/* Footer Text */}
        <p className="confirmation_message_miniform">{message}</p>
      </form>
    </div>
  );
};

export default ContactForm;
