import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import emailjs from "emailjs-com";
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
    <div >
        <h1 className="main_title">Talk to Our Designer</h1>
    <div className="contact-form-container">
      
      <form onSubmit={formik.handleSubmit} className="main-contact-form">
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && <div className="error">{formik.errors.name}</div>}

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && <div className="error">{formik.errors.email}</div>}

        <input
          type="text"
          name="phone"
          placeholder="Enter your phone number"
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
        {formik.errors.phone && <div className="error">{formik.errors.phone}</div>}

        <input
          type="text"
          name="address"
          placeholder="Enter your address"
          value={formik.values.address}
          onChange={formik.handleChange}
        />
        {formik.errors.address && <div className="error">{formik.errors.address}</div>}
        </form>
        <label className="whatsapp-label">
          <input
            type="checkbox"
            name="whatsapp"
            checked={formik.values.whatsapp}
            onChange={formik.handleChange}
          />
          You can reach me on WhatsApp
        </label>

        <button type="submit" className="submit-button">Talk to Our Design Consultant</button>
        <p className="confirmation_message">{message}</p>
      
    </div>
    <FooterContact/>
    </div>
  );
};

export default MainContact;
