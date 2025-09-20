import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Clients from './components/Clients';
import Courses from './components/Courses';
import ProfessionalTitlesWithImage from './components/ProfessionalTitlesWithImage';
import TrainingTitles from './components/TrainingTitles';
import TrainingFieldTitles from './components/TrainingFieldTitles';
import TrainingSetupsSection from './components/TrainingSetupsSection';
import TrainingResponsibilities from './components/TrainingResponsibilities';
import Credentials from './components/Credentials';
import TrainingTopics from './components/TrainingTopics';
import TrainingPortfolio from './components/TrainingPortfolio';
import FinancialWellnessProgram from './components/FinancialWellnessProgram';
import BankingEssentialsProgram from './components/BankingEssentialsProgram';
import CareerKickstartProgram from './components/CareerKickstartProgram';
import FullCourses from './components/FullCourses';
import ProfessionalProfile from './components/ProfessionalProfile';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function HomePage() {
  useEffect(() => {
    document.title = 'Muhammad ELSalamony - Professional Trainer & Banking Expert';
  }, []);

  return (
    <div className="App gradient-background">
      <Home />
      <About />
      <Clients />
      <Courses />
      <ProfessionalTitlesWithImage />
      <TrainingFieldTitles />
      <TrainingSetupsSection />
      <TrainingResponsibilities />
      <Credentials />
      <TrainingTopics />
      <TrainingPortfolio />
      <FinancialWellnessProgram />
      <BankingEssentialsProgram />
      <CareerKickstartProgram />
      <Portfolio />
      <Contact />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/full-courses" element={<FullCourses />} />
          <Route path="/professional-profile" element={<ProfessionalProfile />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
