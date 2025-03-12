import React, { useState } from "react";
import "./Contact.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
  });
  const contactForm = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: "", email: "", text: "" });
  };

  return (
    <div className="Contact">
      <div className="Navbar">
        <Navbar />
      </div>

      <div className="Contact-main">
        <div className="Contact-main_header">
          <p>leave a message</p>
          <h1>we love to hear from you</h1>
        </div>

        <div className="Contact-main_form">
          <form onSubmit={handleSubmit}>
            <div className="Contact-form_input">
              <input
                type="text"
                name="Name"
                onChange={contactForm}
                placeholder="Name"
              />
              <input
                type="text"
                name="Email"
                onChange={contactForm}
                placeholder="Email"
              />
              <textarea
                type="text"
                name="Message"
                cols="0"
                rows="7"
                onChange={contactForm}
                placeholder="Message"
              />
            </div>

            <div className="Contact-form_btn">
              <button>submit</button>
            </div>
          </form>
        </div>
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
