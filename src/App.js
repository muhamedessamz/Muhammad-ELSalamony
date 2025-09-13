import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Courses />
      <Experience />
      <Education />
      <Certifications />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
