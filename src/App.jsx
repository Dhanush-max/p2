import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import Capabalitites from "./components/ourCapabalitiles/ourcapabilities";
import Technologies from "./components/ourCapabalitiles/technologies";
import Equpiments from "./components/ourCapabalitiles/equipment";
import ProductionFacilities from "./components/ourCapabalitiles/production-facilities";
import Services from "./components/services/services";
import DesignOffice from "./components/services/design-office";
import CanopyProduction from "./components/services/canopy-production";
import CNCMilling from "./components/services/cnc-milling";
import CuttingPlotter from "./components/services/cutting-plotter";
import ProductionOfModels from "./components/services/production-of-models";
import ProductionOfMouldsAndTooling from "./components/services/production-of-moulds-and-tooling";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/aboutUs/about";
import Contact from "./components/contact/contact";
import "./styles/animation.css";
import PaintShop from "./components/services/paintShop";
import autoclave from "./components/ourCapabalitiles/autoclave";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facilities" element={<Capabalitites />} />
        <Route path="/ourCapabilities/technologies" element={ <autoclave />} />
        <Route path="/ourCapabilities/equipment" element={<Equpiments />} />
        <Route
          path="/ourCapabilites/production-facilities"
          element={<ProductionFacilities />}
        />
        <Route path="/services" element={<Services />} />
        <Route path="/services/design-office" element={<DesignOffice />} />
        <Route path="/services/paint-shop" element={<PaintShop />} />
        <Route
          path="/services/canopy-production"
          element={<CanopyProduction />}
        />
        <Route path="/services/cnc-milling" element={<CNCMilling />} />
        <Route path="/services/cutting-plotter" element={<CuttingPlotter />} />
        <Route
          path="/services/production-of-models"
          element={<ProductionOfModels />}
        />
        <Route
          path="/services/production-of-moulds-and-tooling"
          element={<ProductionOfMouldsAndTooling />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
