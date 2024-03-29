import React from 'react';
import About from './about/About';
import Home from './Home/Home';
import Projects from './projects/Projects';
import ContactForm from '../components/ContactForm';

const AppContent = () => {
  return (
    <div className="space-y-1">
      <div id="home-section">
        <Home />
      </div>
      <div id="about-section">
        <About />
      </div>
      <div id="projects-section">
        <Projects />
      </div>
      <div id="contact-section">
        <ContactForm />
      </div>
    
    </div>
  );
};

export default AppContent;




