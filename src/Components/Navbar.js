import React from 'react';
import './style.css';
import profilePic from '../assets/profile.jpg';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';
import WorkIcon from '@mui/icons-material/Work';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Navbar = () => {
  return (
    <aside className="sidebar">
      <div className="profile">
        <img
          className="profile-pic"
          src={profilePic}
          alt="Profile"
        />
        <h2 className="name">Sunidhi Bhandari</h2>
      </div>

      <nav className="nav">
        <ul>
          <li>
            <a href="#home"><HomeIcon className="nav-icon" />Home</a>
          </li>
          <li>
            <a href="#about"><PersonIcon className="nav-icon" />About Me</a>
          </li>
          <li>
            <a href="#resume"><DescriptionIcon className="nav-icon" />Resume</a>
          </li>
          <li>
            <a href="#projects"><WorkIcon className="nav-icon" />Projects</a>
          </li>
          <li>
            <a href="#contact"><MailOutlineIcon className="nav-icon" />Contact</a>
          </li>
        </ul>
      </nav>

      <div className="socials">
        <a href="mailto:sunidhibhandari10@gmail.com" title="Email" className="social-link" aria-label="email">
          <MailOutlineIcon className="social-icon" />
        </a>

        <a href="https://www.linkedin.com/in/sunidhi-bhandari-5a9a1819a/" target="_blank" rel="noreferrer" title="LinkedIn" className="social-link" aria-label="linkedin">
          <LinkedInIcon className="social-icon" />
        </a>
      </div>
    </aside>
  );
};

export default Navbar;
