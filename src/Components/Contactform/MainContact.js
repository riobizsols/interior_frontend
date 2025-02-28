import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import emailjs from "emailjs-com";
import image_19 from '../../assets/image 19.png'
import "../../Components/Contactform/MainContact.css";
import { div } from "framer-motion/m";
import FooterContact from "../Footer/FooterContact";

const MainContact = () => {
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
        try {
          const response = await axios.post("http://localhost:5001/contact-email", values);
          setMessage(response.data.message);
          alert('mail send successfully')
          resetForm();
        } catch (error) {
          setMessage("Failed to send email. Please try again later.");
        }
      },
    });



  return (
    <div className="main_contact_form" >
        <h1 className="main_title">Talk to Our Designer</h1>
    <div className="contact-form-container">
      
      <form onSubmit={formik.handleSubmit} >
        <div className="main-contact-form">
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formik.values.name}
          onChange={formik.handleChange}
          aria-label="Enter your full name"
          required
        />
        {/* {formik.errors.name && <div className="error">{formik.errors.name}</div>} */}

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formik.values.email}
          onChange={formik.handleChange}
          aria-label="Enter your email address"
          required
        />
        {/* {formik.errors.email && <div className="error">{formik.errors.email}</div>} */}

        <input
          type="text"
          name="phone"
          placeholder="Enter your phone number"
          value={formik.values.phone}
          onChange={formik.handleChange}
          aria-label="Enter your phone number"
          required
        />
        {/* {formik.errors.phone && <div className="error">{formik.errors.phone}</div>} */}

        <input
          type="text"
          name="address"
          placeholder="Enter your address"
          value={formik.values.address}
          onChange={formik.handleChange}
          aria-label="Enter your address"
          required
        />
        {/* {formik.errors.address && <div className="error">{formik.errors.address}</div>} */}
        <label className="whatsapp-label">
          <input
            type="checkbox"
            name="whatsapp"
            checked={formik.values.whatsapp}
            onChange={formik.handleChange}
          />
          You can reach me on WhatsApp
        </label>
        </div>
        
        <button type="submit" className="submit-button">Talk to Our Design Consultant</button>
        <p className="confirmation_message">{message}</p>
        </form>

    </div>
    <div className="water_mark_contact">
              <img src={image_19} alt="image_19" />
            </div>
    <FooterContact/>
    </div>
  );
};

export default MainContact;
