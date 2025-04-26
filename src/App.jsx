import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import Capabalitites from "./components/ourCapabalitiles/ourcapabilities";
import Technologies from "./components/ourCapabalitiles/technologies";
import Equpiments from "./components/ourCapabalitiles/equipment";
import ProductionFacilities from "./components/ourCapabalitiles/production-facilities";
import Services from "./components/services/services";
import DesignOffice from "./components/ourCapabalitiles/designOffice";
import CanopyProduction from "./components/ourCapabalitiles/canopy-production";
import CNCMilling from "./components/ourCapabalitiles/cnc-cutting-plotter";
import CuttingPlotter from "./components/ourCapabalitiles/cnc-cutting-plotter";
import ProductionOfModels from "./components/ourCapabalitiles/production-of-moulds-and-tooling";
import ProductionOfMouldsAndTooling from "./components/ourCapabalitiles/production-of-moulds-and-tooling";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/aboutUs/about";
import Contact from "./components/contact/contact";
import PaintShop from "./components/ourCapabalitiles/paint-shop";
import Autoclave from "./components/ourCapabalitiles/autoclave";
import TestFacility from "./components/ourCapabalitiles/test-facility";
import Oven from "./components/ourCapabalitiles/oven";
import Resinkitchen from "./components/ourCapabalitiles/resin-kitchen";
import ColdStorage from "./components/ourCapabalitiles/cold-storage";
import Laser3DScanner from "./components/ourCapabalitiles/laser-3d-scanner";
import LaserCuttingModeling from "./components/ourCapabalitiles/laser-cutting-modeling";
import SixAxisRoboticArm from "./components/ourCapabalitiles/6axis-robotic-arm";
import CleanRoomFacility from "./components/ourCapabalitiles/clean-room-facility";
import WeavingMachine from "./components/ourCapabalitiles/weaving-machine";
import HydrolicPress from "./components/ourCapabalitiles/hydrolic-press";
import EpoxyStorage from "./components/ourCapabalitiles/epoxy-storage";
import "./styles/animation.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facilities" element={<Capabalitites />} />
        <Route
          path="/ourCapabilities/technologies"
          element={<Technologies />}
        />
        <Route path="/ourCapabilities/equipment" element={<Equpiments />} />
        <Route
          path="/ourCapabilities/production-facilities"
          element={<ProductionFacilities />}
        />
        <Route path="/services" element={<Services />} />
        <Route path="/services/design-office" element={<DesignOffice />} />
        <Route path="/ourCapabilities/design-office" element={<DesignOffice />} />
        <Route path="/services/paint-shop" element={<PaintShop />} />
        <Route path="/ourCapabilities/paint-shop" element={<PaintShop />} />
        <Route
          path="/services/canopy-production"
          element={<CanopyProduction />}
        />
        <Route
          path="/ourCapabilities/canopy-production"
          element={<CanopyProduction />}
        />
        <Route path="/services/cnc-milling" element={<CNCMilling />} />
        <Route path="/ourCapabilities/cnc-milling" element={<CNCMilling />} />
        <Route path="/services/cutting-plotter" element={<CuttingPlotter />} />
        <Route
          path="/services/production-of-models"
          element={<ProductionOfModels />}
        />
        <Route
          path="/ourCapabilities/production-of-moulds"
          element={<ProductionOfModels />}
        />
        <Route
          path="/services/production-of-moulds-and-tooling"
          element={<ProductionOfMouldsAndTooling />}
        />
        <Route path="/ourCapabilities/autoclave" element={<Autoclave />} />
        <Route
          path="/ourCapabilities/test-facility"
          element={<TestFacility />}
        />
        <Route path="/ourCapabilities/oven" element={<Oven />} />
        <Route path="/ourCapabilities/resin-kitchen" element={<Resinkitchen />} />
        <Route path="/ourCapabilities/cold-storage" element={<ColdStorage />} />
        <Route
          path="/ourCapabilities/laser-3d-scanner"
          element={<Laser3DScanner />}
        />
        <Route
          path="/ourCapabilities/laser-cutting-modeling"
          element={<LaserCuttingModeling />}
        />
        <Route
          path="/ourCapabilities/6axis-robotic-arm"
          element={<SixAxisRoboticArm />}
        />
        <Route
          path="/ourCapabilities/clean-room-facility"
          element={<CleanRoomFacility />}
        />
        <Route
          path="/ourCapabilities/weaving-machine"
          element={<WeavingMachine />}
        />
        <Route
          path="/ourCapabilities/hydrolic-press"
          element={<HydrolicPress />}
        />
        <Route
          path="/ourCapabilities/epoxy-storage"
          element={<EpoxyStorage />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
