import React from 'react';
import { Link } from "react-router-dom";
import ScrollToTop from "./scrollToTop";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 w-full">
      <div className="container mx-auto px-8">
        {/* Top Section */}
        <div className="flex justify-between items-center py-8 border-b border-gray-700">
          <h1 className="text-2xl font-bold">BrandLogo</h1>
          <div>
            <p className="text-sm uppercase mb-2">Follow Us:</p>
            <ul className="flex space-x-4">
              <li className="text-lg">F</li>
              <li className="text-lg">T</li>
              <li className="text-lg">I</li>
              <li className="text-lg">Y</li>
            </ul>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 text-gray-400">
          {/* Capabilities */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Our Facilities</h3>
            <ul className="space-y-2">
              <li><Link to="/ourCapabilites/technologies" className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400">Technologies</Link></li>
              <li><Link to="/ourCapabilites/equipment" className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400">Equipment</Link></li>
              <li><Link to="/ourCapabilites/production-facilities" className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400">Production Facilities</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/design-office" className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400">Design Office</Link></li>
              <li><Link to="/services/canopy-production" className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400">Canopy Production</Link></li>
              <li><Link to="/services/cnc-milling" className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400">CNC Milling</Link></li>
              <li><Link to="/services/cutting-plotter" className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400">Cutting Plotter</Link></li>
              <li><Link to="/services/production-of-models" className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400">Production of Models</Link></li>
              <li><Link to="/services/production-of-moulds-and-tooling" className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400">Production of Moulds and Tooling</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">About Us</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400">About Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
          <p>PERIDOT © 2025 All Rights Reserved | <Link to="/terms" className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400">Terms and Conditions</Link> | <Link to="/privacy-policy" className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400">Privacy Policy</Link></p>
          <ScrollToTop />
        </div>
      </div>
    </footer>
  );
};

export default Footer;