import React from "react";
import { ReactTyped } from "react-typed";
import "./home.css";

export default function Home() {

  return (
    <section className="home" id="home">
      <div className="overlay">
        <div className="content">
          <h2>Welcome</h2>
          <h1>
            I'm{" "}
            <span className="typed-name">
              <ReactTyped
                strings={[
                  "Sunidhi Bhandari",
                  "React Developer",
                  "UI Enthusiast",
                ]}
                typeSpeed={80}
                backSpeed={50}
                loop
                showCursor={true}
                cursorChar="|"
              />
            </span>
          </h1>
          <p>Building performant, beautiful, and scalable web experiences.</p>
          <div className="resume-buttons">
            <a
              href="/SUNIDHI_BHANDARI.pdf"
              target="_blank"
              rel="noopener noreferrer"
               className="about-download-btn"
            >
              View Resume
            </a>

            <a
              href="/SUNIDHI_BHANDARI.pdf"
              download="SUNIDHI_BHANDARI.pdf"
               className="about-download-btn"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
