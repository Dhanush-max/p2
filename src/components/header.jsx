import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeOverlay, setActiveOverlay] = useState(null);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const showOverlay = (overlay) => setActiveOverlay(overlay);
  const closeOverlay = () => setActiveOverlay(null);

  return (
    <header className="bg-white ml-19 w-[calc(100%-6rem)] md:ml-24 md:w-[calc(100%-6rem)] float-right h-20 fixed right-0 top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 h-full uppercase">
        {/* Hamburger Icon for Mobile */}
        <button
          id="menu-toggle"
          className="block md:hidden text-gray-800 text-3xl focus:outline-none"
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
              className="absolute top-5 right-5 text-gray-800 text-3xl focus:outline-none"
              aria-label="Close mobile menu"
              onClick={closeMobileMenu}
            >
              ×
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

        <Link to="/" className="text-2xl font-bold text-gray-800 mr-5">
          Brand Name
        </Link>
      </nav>

      {/* Overlay for Our Capabilities */}
            {activeOverlay === "ourCapabilities" && (
              <div className="overlay-menu fixed top-0 left-0 w-screen h-screen bg-white bg-opacity-70 z-40">
                <button
                  className="close-overlay absolute top-5 left-5 text-gray-800 bg-white text-3xl focus:outline-none cursor-pointer"
                  aria-label="Close overlay menu"
                  onClick={closeOverlay}
                >
                  ×
                </button>
                <div className="grid grid-cols-4 h-full">
                  {/* Left Menu */}
                  <div className="col-span-1 flex flex-col items-center justify-center h-full space-y-5 bg-white">
                    <ul className="flex flex-col items-center space-y-5">
                      <li>
                        <a
                          href="facilities"
                          className="text-gray-700 text-lg hover:text-gray-900 hover-effect"
                        >
                          Our Facilities
                        </a>
                      </li>
                      <li>
                        <a
                          href="/ourCapabilities/technologies"
                          className="block text-gray-700 hover:text-gray-900 text-lg hover-effect"
                        >
                          Technologies
                        </a>
                      </li>
                      <li>
                        <a
                          href="/ourCapabilities/equipment"
                          className="block text-gray-700 hover:text-gray-900 text-lg hover-effect"
                        >
                          Equipment
                        </a>
                      </li>
                      <li>
                        <a
                          href="/ourCapabilites/production-facilities"
                          className="block text-gray-700 hover:text-gray-900 text-lg hover-effect"
                        >
                          Production facilities
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
                  ×
                </button>
                <div className="grid grid-cols-4 h-full">
                  {/* Left Menu */}
                  <div className="col-span-1 flex flex-col items-center justify-center h-full space-y-5 bg-white">
                    <ul className="flex flex-col items-center space-y-5">
                      <li>
                        <a
                          href="/services"
                          className="text-gray-700 text-lg hover:text-gray-900 hover-effect"
                        >
                          Services
                        </a>
                      </li>
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
