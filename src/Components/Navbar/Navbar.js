import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="topnav">
      <div className="topnav-inner">
        <div className="logo">
          <Link to="/" onClick={handleLinkClick} className="logo-link">
            <img className="logo-pic" src={profilePic} alt="Profile" />
          </Link>
            <span className="logo-name">Sunidhi Bhandari</span>
        </div>

        <nav className={`nav ${menuOpen ? "open" : ""}`} aria-label="Main navigation">
          <ul>
            <li>
              <Link to="/" onClick={handleLinkClick}>
                <HomeIcon className="nav-icon" /> Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleLinkClick}>
                <PersonIcon className="nav-icon" /> About Me
              </Link>
            </li>
            <li>
              <Link to="/tech" onClick={handleLinkClick}>
                <WorkIcon className="nav-icon" /> Tech Skills
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleLinkClick}>
                <MailOutlineIcon className="nav-icon" /> Contact
              </Link>
            </li>
          </ul>

          <div className="nav-socials">
            <a href="mailto:sunidhibhandari10@gmail.com" className="social-link" aria-label="email">
              <MailOutlineIcon className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/sunidhi-bhandari-5a9a1819a/" target="_blank" rel="noreferrer" className="social-link" aria-label="linkedin">
              <LinkedInIcon className="social-icon" />
            </a>
          </div>
        </nav>

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
