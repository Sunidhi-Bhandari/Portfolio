import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import AboutMe from './Components/AboutMe/AboutMe';
import Contact from './Components/Contact/Contact';
import TechSkills from './Components/TechSkills/TechSkills';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function AppRoutes() {
  const location = useLocation();
  const navigate = useNavigate();
  const sentinelRef = useRef(null);
  const lastNavRef = useRef(0);
  const lastScrollY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);
  const lastDirection = useRef(1); // 1 = down, -1 = up

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      if (y > lastScrollY.current) lastDirection.current = 1;
      else if (y < lastScrollY.current) lastDirection.current = -1;
      lastScrollY.current = y;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const routes = ['/', '/about', '/tech', '/contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const now = Date.now();
            if (now - lastNavRef.current < 1200) return; // simple cooldown
            lastNavRef.current = now;
            const idx = routes.indexOf(location.pathname);
            // navigate forward when scrolling down, backward when scrolling up
            if (lastDirection.current >= 0) {
              const next = routes[(idx + 1) % routes.length];
              navigate(next);
            } else {
              const prev = routes[(idx - 1 + routes.length) % routes.length];
              navigate(prev);
            }
          }
        });
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [location.pathname, navigate]);

  return (
    <>
      <Navbar />
      <div className="with-topnav">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/tech" element={<TechSkills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <div ref={sentinelRef} id="scroll-sentinel" style={{ height: '2px' }} />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
