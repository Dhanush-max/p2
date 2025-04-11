import React from "react";
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8 text-gray-400">
          {/* Capabilities */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              Our Facilities
            </h3>
            <ul className="space-y-2 flex justify-between">
            <div className="space-y-2 w-1/2">
              <li>
                <a
                  href="/ourCapabilities/canopy-production"
                  className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400"
                >
                  Canopy Production
                </a>
              </li>
              <li>
                <a
                  href="/ourCapabilities/autoclave"
                  className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400"
                >
                  Autoclave
                </a>
              </li>
              <li>
                <a
                  href="/ourCapabilities/cnc-milling"
                  className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400"
                >
                  CNC Cutting
                </a>
              </li>
              <li>
                <a
                  href="/ourCapabilities/production-of-moulds"
                  className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400"
                >
                  Production of Moulds
                </a>
              </li>
              <li>
                <a
                  href="/ourCapabilities/design-office"
                  className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400"
                >
                  Design Office
                </a>
              </li>
              <li>
                <a
                  href="/ourCapabilities/paint-shop"
                  className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400"
                >
                  Paint Shop
                </a>
              </li>
              <li>
                <a
                  href="/ourCapabilities/oven"
                  className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400"
                >
                  Oven
                </a>
              </li>
              <li>
                <a
                  href="/ourCapabilities/resin-kitten"
                  className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400"
                >
                  Resin Kitten
                </a>
              </li>
              </div>
              <div className="space-y-2 w-1/2">
              <li>
                <a
                  href="/ourCapabilities/cold-storage"
                  className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400"
                >
                  Cold Storage
                </a>
              </li>
              <li>
                <a
                  href="/ourCapabilities/laser-3d-scanner"
                  className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400"
                >
                  Laser 3D Scanner
                </a>
              </li>
              <li>
                <a
                  href="/ourCapabilities/laser-cutting-modeling"
                  className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400"
                >
                  Laser Cutting & Modeling
                </a>
              </li>
              <li>
                <a
                  href="/ourCapabilities/6axis-robotic-arm"
                  className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400"
                >
                  6-Axis Robotic Arm
                </a>
              </li>
              <li>
                <a
                  href="/ourCapabilities/clean-room-facility"
                  className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400"
                >
                  Clean Room Facility
                </a>
              </li>
              <li>
                <a
                  href="/ourCapabilities/weaving-machine"
                  className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400"
                >
                  Weaving Machine
                </a>
              </li>
              <li>
                <a
                  href="/ourCapabilities/hydrolic-press"
                  className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400"
                >
                  Hydraulic Press
                </a>
              </li>
              <li>
                <a
                  href="/ourCapabilities/epoxy-storage"
                  className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400"
                >
                  Epoxy Storage
                </a>
              </li>
              </div>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/services/design-office"
                  className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400"
                >
                  Design Office
                </a>
              </li>
              <li>
                <a
                  href="/services/canopy-production"
                  className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400"
                >
                  Canopy Production
                </a>
              </li>
              <li>
                <a
                  href="/services/cnc-milling"
                  className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400"
                >
                  CNC Milling
                </a>
              </li>
              <li>
                <a
                  href="/services/cutting-plotter"
                  className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400"
                >
                  Cutting Plotter
                </a>
              </li>
              <li>
                <a
                  href="/services/production-of-models"
                  className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400"
                >
                  Production of Models
                </a>
              </li>
              <li>
                <a
                  href="/services/production-of-moulds-and-tooling"
                  className="transition duration-300 hover:text-white hover:text-[16px] text-gray-400"
                >
                  Production of Moulds and Tooling
                </a>
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
