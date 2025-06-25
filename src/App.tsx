import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import PrincipalValues from './pages/PrincipalValues'; 
import PracticeAreas from './pages/Areas';
import News from './pages/News';
import Contact from './pages/Contact';
import Lawyers from './pages/Lawyers';
import Finance from './pages/FInance';
import Mergers from './pages/Mergers';
import Commercial from './pages/Commercial';
import CapitalMarkets from './pages/CapitalMarkets';
import Restructuring from './pages/Restructuring';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/principal-values" element={<PrincipalValues />} /> 
        <Route path="/lawyers" element={<Lawyers />} />
        <Route path="/practice-areas" element={<PracticeAreas />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/practice/corporate-finance" element={<Finance />} />
        <Route path="/practice/mergers-acquisitions" element={<Mergers />} />
        <Route path="/practice/capital-markets" element={<CapitalMarkets />} />
        <Route path="/practice/corporate-commercial" element={<Commercial />} />
        <Route path="/practice/restructuring-insolvency" element={<Restructuring />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
