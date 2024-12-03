import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Services from "./components/Servicess/Services";
import AnniversaryPlanning from "./components/AnniversaryPlanning/AnniversaryPlanning";
import BirthdayPage from "./components/BirthdayPage/BirthdayPage";
import CampingPage from "./components/CampingPage/CampingPage";
import GameNightPage from "./components/GameNightPage/GameNightPage";
import PartyPage from "./components/PartyPage/PartyPage";
import WeddingPage from "./components/WeddingPage/WeddingPage";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Map from "./components/Map/Map"; // Import Map Component

const App = () => {
  return (
    <Router>
      <Navbar />
      <HeroSection />
      <Services />
      <About />
      <Contact />
      <Footer />
      <Toaster />
    </Router>
  );
};

export default App;
