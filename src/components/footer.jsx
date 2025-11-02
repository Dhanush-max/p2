

import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "./scrollToTop";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 w-full">
      <div className="container mx-auto px-8">
        {/* Top Section */}
        <div className="flex justify-between items-center py-8 border-b border-gray-700">
          <Link to="/" className="flex items-center text-md lg:text-xl font-bold text-gray-800 mr-5">
            <img src={logo} alt="Company Logo" className="h-8 lg:h-12 w-auto" />
            <span className="text-white ">PERIDOT</span>
          </Link>
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8 text-gray-400">
          {/* Capabilities */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              our capabilities
            </h3>
            <ul className="space-y-2">
              <li><a href="/ourCapabilities/autoclave" className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400">Autoclaves</a></li>
              <li><a href="/ourCapabilities/composite-curing-oven" className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400">Composite curing oven</a></li>
              <li><a href="/ourCapabilities/dry-paint-booth" className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400">Dry paint booth</a></li>
              <li><a href="/ourCapabilities/clean-room-facility" className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400">Clean room</a></li>
              <li><a href="/ourCapabilities/cold-storage" className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400">Cold storage</a></li>
              <li><a href="/ourCapabilities/cnc-prepreg-cutting-machine" className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400">CNC prepreg cutting machine</a></li>
              <li><a href="/ourCapabilities/laser-cutting-machine" className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400">Laser cutting machine</a></li>
              <li><a href="/ourCapabilities/carbonfibre-weaving-machine" className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400">Carbonfibre weaving machine</a></li>
              <li><a href="/ourCapabilities/3d-printers" className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400">3D printers</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/services/compression-moulding" className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400">COMPRESSION MOULDING</a>
              </li>
              <li>
                <a href="/services/autoclave-curing" className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400">AUTOCLAVE CURING</a>
              </li>
              <li>
                <a href="/services/composite-mould-manufacturing" className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400">COMPOSITE MOULD MANUFACTURING</a>
              </li>
              <li>
                <a href="/services/composite-honeycomb-bonding" className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400">COMPOSITE HONEYCOMB BONDING</a>
              </li>
              <li>
                <a href="/services/resin-infusion" className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400">RESIN INFUSION</a>
              </li>
              <li>
                <a href="/services/wet-layup-technique" className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400">WET LAYUP TECHNIQUE</a>
              </li>
              <li>
                <a href="/services/canopy-production" className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400">CANOPY PRODUCTION</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              About Us
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
          <p>
            PERIDOT © 2025 All Rights Reserved |{" "}
            <Link
              to="/terms"
              className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400"
            >
              Terms and Conditions
            </Link>{" "}
            |{" "}
            <Link
              to="/privacy-policy"
              className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400"
            >
              Privacy Policy
            </Link>
          </p>
          <ScrollToTop />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
