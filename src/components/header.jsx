import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; 
const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeOverlay, setActiveOverlay] = useState(null);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const showOverlay = (overlay) => setActiveOverlay(overlay);
  const closeOverlay = () => setActiveOverlay(null);

  return (
    <header className="bg-gray-50 ml-19 w-[calc(100%-6rem)] md:ml-24 md:w-[calc(100%-6rem)] float-right h-20 fixed right-0 top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 h-full uppercase">
        {/* Hamburger Icon for Mobile */}
        <button
          id="menu-toggle"
          className="block md:hidden bg-white text-3xl focus:outline-none"
          aria-label="Open mobile menu"
          onClick={toggleMobileMenu}
        >
          ☰
        </button>

        {/* Full-Screen Hamburger Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu-overlay"
            className="fixed top-0 left-0 w-screen h-screen bg-white z-40 flex flex-col items-center justify-center space-y-5"
          >
            <button
              id="close-mobile-menu"
              className="absolute top-5 right-5 bg-white text-3xl focus:outline-none"
              aria-label="Close mobile menu"
              onClick={closeMobileMenu}
            >
              x
            </button>
            <ul className="flex flex-col items-center space-y-5">
              <li>
                <Link
                  to="/facilities"
                  className="text-gray-700 text-lg hover:text-gray-900"
                >
                  Our Facilities
                </Link>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-700 text-lg hover:text-gray-900"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-700 text-lg hover:text-gray-900"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-700 text-lg hover:text-gray-900"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}

        {/* Desktop Navigation Menu */}
        <ul
          id="menu"
          className="hidden md:flex space-x-5 mx-auto relative justify-between w-[50%]"
        >
          {/* Our Capabilities */}
          <li className="group relative">
            <Link
              to="/facilities"
              className="text-gray-700 hover:text-gray-900 font-extrabold underline-offset-10"
              onClick={(e) => {
                e.preventDefault();
                showOverlay("ourCapabilities");
              }}
            >
              Our Facilities
            </Link>
          </li>
          {/* Services */}
          <li className="group relative">
            <a
              href="services.html"
              className="text-gray-700 hover:text-gray-900 font-extrabold underline-offset-10"
              onClick={(e) => {
                e.preventDefault();
                showOverlay("services");
              }}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-gray-700 hover:text-gray-900 font-extrabold underline-offset-10"
            >
              About Us
            </a>
          </li>
          {/* Contact */}
          <li>
            <a
              href="/contact"
              className="text-gray-700 hover:text-gray-900 font-extrabold underline-offset-10"
            >
              Contact
            </a>
          </li>
        </ul>

        <Link to="/" className="flex items-center text-md lg:text-xl font-bold text-gray-800 mr-5">
        <img src={logo} alt="Company Logo" className="h-8 lg:h-12 w-auto" />
        <span className="text-black ">PERIDOT</span>
        </Link>
      </nav>

      {/* Overlay for Our Capabilities */}
            {activeOverlay === "ourCapabilities" && (
              <div className="overlay-menu fixed top-0 left-0 w-screen h-screen bg-white bg-opacity-70 z-40">
                <button
                  className="close-overlay absolute top-5 left-5 text-gray-800 bg-white text-3xl cursor-pointer"
                  aria-label="Close overlay menu"
                  onClick={closeOverlay}
                >
                  x
                </button>
                <div className="grid grid-cols-4 h-full">
                  {/* Left Menu */}
                  <div className="col-span-1 flex flex-col items-center justify-center h-full space-y-5 bg-white">
                    <ul className="flex flex-col items-center space-y-2">
                    <li>
                        <a
                          href="/ourCapabilities/canopy-production"
                          className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect"
                        >
                          Canopy Production
                        </a>
                      </li>
                      <li>
                        <a
                          href="/ourCapabilities/autoclave"
                          className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect"
                        >
                          Autoclave
                        </a>
                      </li>
                      {/* <li>
                        <a
                          href="/ourCapabilities/test-facility"
                          className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect"
                        >
                          Test Facility
                        </a>
                      </li> */}
                      <li>
                        <a
                          href="/ourCapabilities/cnc-milling"
                          className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect"
                        >
                          CNC Cutting
                        </a>
                      </li>
                      <li>
                        <a
                          href="/ourCapabilities/production-of-moulds"
                          className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect"
                        >
                          Production of Moulds
                        </a>
                      </li>
                      <li>
                        <a
                          href="/ourCapabilities/design-office"
                          className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect"
                        >
                          Design Office
                        </a>
                      </li>
                      <li>
                        <a
                          href="/ourCapabilities/paint-shop"
                          className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect"
                        >
                          Paint Shop
                        </a>
                      </li>
                      <li>
                        <a
                          href="/ourCapabilities/oven"
                          className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect"
                        >
                          Oven
                        </a>
                      </li>
                      <li>
                        <a
                          href="/ourCapabilities/resin-kitchen"
                          className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect"
                        >
                          Resin kitchen
                        </a>
                      </li>
                      <li>
                        <a
                          href="/ourCapabilities/cold-storage"
                          className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect"
                        >
                          Cold Storage
                        </a>
                      </li>
                      <li>
                        <a
                          href="/ourCapabilities/laser-3d-scanner"
                          className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect"
                        >
                          Laser 3D Scanner
                        </a>
                      </li>
                      <li>
                        <a
                          href="/ourCapabilities/laser-cutting-modeling"
                          className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect"
                        >
                          Laser Cutting & Modeling
                        </a>
                      </li>
                      <li>
                        <a
                          href="/ourCapabilities/6axis-robotic-arm"
                          className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect"
                        >
                          6-Axis Robotic Arm
                        </a>
                      </li>
                      <li>
                        <a
                          href="/ourCapabilities/clean-room-facility"
                          className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect"
                        >
                          Clean Room Facility
                        </a>
                      </li>
                      <li>
                        <a
                          href="/ourCapabilities/weaving-machine"
                          className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect"
                        >
                          Weaving Machine
                        </a>
                      </li>
                      <li>
                        <a
                          href="/ourCapabilities/hydrolic-press"
                          className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect"
                        >
                          Hydraulic Press
                        </a>
                      </li>
                      <li>
                        <a
                          href="/ourCapabilities/epoxy-storage"
                          className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect"
                        >
                          Epoxy Storage
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-3"></div>
                </div>
              </div>
            )}
            {activeOverlay === "services" && (
              <div className="overlay-menu fixed top-0 left-0 w-screen h-screen bg-white bg-opacity-70 z-40">
                <button
                  className="close-overlay absolute top-5 left-5 bg-white text-3xl focus:outline-none cursor-pointer"
                  aria-label="Close overlay menu"
                  onClick={closeOverlay}
                >
                  x
                </button>
                <div className="grid grid-cols-4 h-full">
                  {/* Left Menu */}
                  <div className="col-span-1 flex flex-col items-center justify-center h-full space-y-5 bg-white">
                    <ul className="flex flex-col items-center space-y-5">
                      {/* <li>
                        <a
                          href="/services"
                          className="text-gray-700 text-lg hover:text-gray-900 hover-effect"
                        >
                          Services
                        </a>
                      </li> */}
                      <li>
                        <a
                          href="/services/design-office"
                          className="block text-gray-700 hover:text-gray-900 text-lg hover-effect"
                        >
                          Design office
                        </a>
                      </li>
                      <li>
                        <a
                          href="/services/paint-shop"
                          className="block text-gray-700 hover:text-gray-900 text-lg hover-effect"
                        >
                          paint shop
                        </a>
                      </li>
                      <li>
                        <a
                          href="/services/canopy-production"
                          className="block text-gray-700 hover:text-gray-900 text-lg hover-effect"
                        >
                          Canopy production
                        </a>
                      </li>
                      <li>
                        <a
                          href="/services/cnc-milling"
                          className="block text-gray-700 hover:text-gray-900 text-lg hover-effect"
                        >
                          CNC milling
                        </a>
                      </li>
                      <li>
                        <a
                          href="/services/cutting-plotter"
                          className="block text-gray-700 hover:text-gray-900 text-lg hover-effect"
                        >
                          Cutting plotter
                        </a>
                      </li>
                      <li>
                        <a
                          href="/services/production-of-models"
                          className="block text-gray-700 hover:text-gray-900 text-lg hover-effect"
                        >
                          Production of models
                        </a>
                      </li>
                      <li>
                        <a
                          href="/services/production-of-moulds-and-tooling"
                          className="block text-gray-700 hover:text-gray-900 text-lg hover-effect"
                        >
                          Production of moulds and tooling
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-3"></div>
                </div>
              </div>
            )}
    </header>
  );
};

export default Header;
