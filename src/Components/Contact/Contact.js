import React from "react";
import "./contact.css";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <h2>Contact</h2>
        <span>CONNECT</span>
      </div>

      <div className="contact-container">
        <div className="contact-grid">
          <div className="contact-card">
            <MdEmail className="icon" />
            <h3>Email</h3>
            <p>
              <a href="mailto:sunidhibhandari10@gmail.com">
                sunidhibhandari10@gmail.com
              </a>
            </p>
          </div>

          <div className="contact-card">
            <MdPhone className="icon" />
            <h3>Phone</h3>
            <p>
              <a href="tel:+917588838602">+91 7588838602</a>
            </p>
          </div>

          <div className="contact-card">
            <FaLinkedin className="icon" />
            <h3>LinkedIn</h3>
            <p>
              <a
                href="https://www.linkedin.com/in/sunidhi-bhandari-5a9a1819a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/sunidhi-bhandari
              </a>
            </p>
          </div>

          <div className="contact-card">
            <MdLocationOn className="icon" />
            <h3>Location</h3>
            <p>India</p>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© 2025 Sunidhi Bhandari | All Rights Reserved</p>
      </div>
    </section>
  );
};

export default Contact;
