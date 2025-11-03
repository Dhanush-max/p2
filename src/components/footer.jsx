

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
              {/* LinkedIn */}
              <li>
                <a 
                  href="https://www.linkedin.com/company/peridot-advanced-materials/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </li>
              
              {/* Instagram */}
              <li>
                <a 
                  href="https://www.instagram.com/peridot.am?igsh=N241aWlqNDkyaHg3&utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </li>
              
              {/* Twitter/X */}
              <li>
                <a 
                  href="https://x.com/Peridot_am" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </li>
              
              {/* Facebook */}
              <li>
                <a 
                  href="https://www.facebook.com/peridot.am" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </li>
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
