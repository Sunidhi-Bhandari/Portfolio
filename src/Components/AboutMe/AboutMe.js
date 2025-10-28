import React from "react";
import "./aboutMe.css";
export default function AboutMe() {

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-subtitle">Know Me More</h2>
          <h1 className="about-title">ABOUT ME</h1>
        </div>

        <div className="about-content">
          <div className="about-left">
            <h3>
              I'm <span className="highlight">Sunidhi Bhandari,</span> a
              Front-End Developer
            </h3>
            <p>
              I’m a passionate front-end developer who loves crafting
              interactive and responsive web applications. With 3 years of
              experience, I’ve built modern, scalable, and high-performing user
              interfaces using React.js, TypeScript, and Redux Toolkit.
            </p>
            <p>
              I enjoy solving complex problems through clean, maintainable code
              and building digital experiences that leave an impact. I’m always
              eager to learn new technologies and bring innovative ideas to
              life.
            </p>
          </div>

          
          <div className="about-right">
            <ul className="about-info">
              <li>
                <strong>Name:</strong> Sunidhi Bhandari
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:sunidhibhandari10@gmail.com">
                  sunidhibhandari10@gmail.com
                </a>
              </li>
              <li>
                <strong>Location:</strong> Pune, India
              </li>
              <li>
                <strong>Experience:</strong> 3+ Years
              </li>
            </ul>

            <a
              href="/Sunidhi_Bhandari_experience.pdf"
              download
              className="about-download-btn"
            >
              Download CV
            </a>
          </div>
        </div>
          <h2 className="section-title">Experience & Education</h2>
          <div className="experience-grid">
            <div className="experience-card">
              <span className="badge">July 2018 - July 2022</span>
              <h3>Information Technology</h3>
              <h4>Rashtrasant Tukadoji Maharaj Nagpur University</h4>
              <p>
                Graduated with a Bachelor's degree in Information Technology,
                gaining a strong foundation in computer science, programming,
                and software development.
              </p>
            </div>

            <div className="experience-card">
              <span className="badge">August 2022 - August 2025</span>
              <h3>Front-End Developer - React.js</h3>
              <h4>Cybage Software Pvt. Ltd.</h4>
              <p>
                Developed and enhanced React dashboards with TypeScript, Redux
                Toolkit, and Material UI. Led UI integration across multiple
                products, improved performance by 25%, and maintained code
                quality with Jest and RTL.
              </p>
            </div>
          </div>
      </div>
    </section>
  );
}
