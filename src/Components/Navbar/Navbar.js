import React, { useState } from "react";
import "./navbar.css";
import profilePic from "../../assets/profile.jpg";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);

  const handleLinkClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`); // ✅ updates URL hash
    }
    setMenuOpen(false);
  };

  return (
    <header className="topnav">
      <div className="topnav-inner">
        {/* Logo */}
        <div className="logo">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("home");
            }}
            className="logo-link"
          >
            <img className="logo-pic" src={profilePic} alt="Profile" />
          </a>
          <span className="logo-name">Sunidhi Bhandari</span>
        </div>

        {/* Navigation */}
        <nav className={`nav ${menuOpen ? "open" : ""}`} aria-label="Main navigation">
          <ul>
            <li>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("home");
                }}
              >
                <HomeIcon className="nav-icon" /> Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("about");
                }}
              >
                <PersonIcon className="nav-icon" /> About Me
              </a>
            </li>
            <li>
              <a
                href="#tech"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("tech");
                }}
              >
                <WorkIcon className="nav-icon" /> Tech Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("contact");
                }}
              >
                <MailOutlineIcon className="nav-icon" /> Contact
              </a>
            </li>
          </ul>

          {/* Social Links */}
          <div className="nav-socials">
            <a
              href="mailto:sunidhibhandari10@gmail.com"
              className="social-link"
              aria-label="email"
            >
              <MailOutlineIcon className="social-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/sunidhi-bhandari-5a9a1819a/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="linkedin"
            >
              <LinkedInIcon className="social-icon" />
            </a>
          </div>
        </nav>

        {/* Hamburger Menu */}
        <button
          className="hamburger"
          onClick={handleToggle}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
