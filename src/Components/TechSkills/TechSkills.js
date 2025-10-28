import React from "react";
import "./techSkills.css";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMaterialdesign,
  SiAntdesign,
  SiBootstrap,
  SiGraphql,
  SiAxios,
  SiJson,
  SiJest,
  SiTestinglibrary,
  SiGit,
  SiWebpack,
  SiBabel,
  SiJirasoftware,
  SiOpenai,
  SiGithubcopilot,
} from "react-icons/si";
import { FaUsersCog, FaProjectDiagram } from "react-icons/fa";
import { MdDesignServices, MdAutoAwesome } from "react-icons/md";
import { RiAiGenerate } from "react-icons/ri";

export default function TechSkills() {
  const skills = {
    "Languages / Frameworks": [
      { name: "JavaScript (ES6+)", icon: <SiJavascript color="#f7df1e" /> },
      { name: "TypeScript", icon: <SiTypescript color="#3178c6" /> },
      { name: "React.js (Hooks)", icon: <SiReact color="#61dafb" /> },
      { name: "Redux Toolkit", icon: <SiRedux color="#764abc" /> },
      { name: "SQL", icon: <SiMysql color="#00758f" /> },
    ],

    "UI & Styling": [
      { name: "HTML5", icon: <SiHtml5 color="#e34f26" /> },
      { name: "CSS3", icon: <SiCss3 color="#1572b6" /> },
      { name: "Material-UI", icon: <SiMaterialdesign color="#007fff" /> },
      { name: "Ant Design", icon: <SiAntdesign color="#0170fe" /> },
      { name: "Bootstrap", icon: <SiBootstrap color="#7952b3" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#38bdf8" /> },
    ],

    "APIs & Data": [
      { name: "RESTful APIs", icon: <SiAxios color="#5a29e4" /> },
      { name: "GraphQL", icon: <SiGraphql color="#e535ab" /> },
      { name: "JSON", icon: <SiJson color="#f0db4f" /> },
    ],

    "Testing & QA": [
      { name: "Jest", icon: <SiJest color="#99425b" /> },
      {
        name: "React Testing Library",
        icon: <SiTestinglibrary color="#e34f26" />,
      },
    ],

    "Tools & DevOps": [
      { name: "Git", icon: <SiGit color="#f05032" /> },
      { name: "Webpack", icon: <SiWebpack color="#8dd6f9" /> },
      { name: "Babel", icon: <SiBabel color="#f9dc3e" /> },
      { name: "Jira", icon: <SiJirasoftware color="#2684ff" /> },
    ],

    "AI & Productivity": [
      { name: "ChatGPT", icon: <SiOpenai color="#10a37f" /> },
      { name: "GitHub Copilot", icon: <SiGithubcopilot color="#00c4ff" /> },
      { name: "Perplexity", icon: <RiAiGenerate color="#9c27b0" /> },
      { name: "Grok", icon: <MdAutoAwesome color="#ffb300" /> },
    ],

    Practices: [
      { name: "Agile / Scrum", icon: <FaUsersCog color="#29b6f6" /> },
      {
        name: "Performance Optimization",
        icon: <FaProjectDiagram color="#ffca28" />,
      },
      { name: "Problem Solving", icon: <MdDesignServices color="#00c853" /> },
      { name: "Team Collaboration", icon: <FaUsersCog color="#42a5f5" /> },
    ],
  };
  return (
    <div className="tech-container" id="tech">
      <section className="skills-section">
        <h2 className="skills-title">
           <h2 className="tech-subtitle">TECH STACK & TOOLS</h2>
          <h1 className="about-title">TECHNOLOGIES</h1>
        </h2>
        <div className="skills-container">
          {Object.entries(skills).map(([category, items]) => (
            <div className="skills-category" key={category}>
              <h3>{category}</h3>
              <div className="skills-grid">
                {items.map((skill, index) => (
                  <div className="skill-card" key={index}>
                    <div className="icon">{skill.icon}</div>
                    <p>{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
