import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import Capabalitites from "./components/ourCapabalitiles/ourcapabilities";
import Technologies from "./components/ourCapabalitiles/technologies";
import Equpiments from "./components/ourCapabalitiles/equipment";
import ProductionFacilities from "./components/ourCapabalitiles/production-facilities";
import Services from "./components/services/services";
import CompressionMoulding from "./components/services/compression-moulding";
import AutoclaveCuring from "./components/services/autoclave-curing";
import CompositeMouldManufacturing from "./components/services/composite-mould-manufacturing";
import CompositeHoneycombBonding from "./components/services/composite-honeycomb-bonding";
import ResinInfusion from "./components/services/resin-infusion";
import WetLayupTechnique from "./components/services/wet-layup-technique";
import CanopyProduction from "./components/services/canopy-production";
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
import CompositeCuringOven from "./components/ourCapabalitiles/composite-curing-oven";
import ThreeDPrinters from "./components/ourCapabalitiles/3d-printers";
import DryPaintBooth from "./components/ourCapabalitiles/dry-paint-booth";
import CncPrepregCuttingMachine from "./components/ourCapabalitiles/cnc-prepreg-cutting-machine";
import LaserCuttingMachine from "./components/ourCapabalitiles/laser-cutting-machine";
import CarbonfibreWeavingMachine from "./components/ourCapabalitiles/carbonfibre-weaving-machine";
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
        <Route path="/services/compression-moulding" element={<CompressionMoulding />} />
        <Route path="/services/autoclave-curing" element={<AutoclaveCuring />} />
        <Route path="/services/composite-mould-manufacturing" element={<CompositeMouldManufacturing />} />
        <Route path="/services/composite-honeycomb-bonding" element={<CompositeHoneycombBonding />} />
        <Route path="/services/resin-infusion" element={<ResinInfusion />} />
        <Route path="/services/wet-layup-technique" element={<WetLayupTechnique />} />
        <Route path="/services/canopy-production" element={<CanopyProduction />} />
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
        <Route
          path="/ourCapabilities/composite-curing-oven"
          element={<CompositeCuringOven />}
        />
        <Route path="/ourCapabilities/3d-printers" element={<ThreeDPrinters />} />
        <Route path="/ourCapabilities/dry-paint-booth" element={<DryPaintBooth />} />
        <Route path="/ourCapabilities/cnc-prepreg-cutting-machine" element={<CncPrepregCuttingMachine />} />
        <Route path="/ourCapabilities/laser-cutting-machine" element={<LaserCuttingMachine />} />
        <Route path="/ourCapabilities/carbonfibre-weaving-machine" element={<CarbonfibreWeavingMachine />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
