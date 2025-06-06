import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; 
const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeOverlay, setActiveOverlay] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile or tablet sized
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px is the lg breakpoint in Tailwind
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const showOverlay = (overlay) => {
    setActiveOverlay(overlay);
    if (isMobile) {
      setMobileMenuOpen(false);
    }
  };
  const closeOverlay = () => setActiveOverlay(null);

  // First, create a function to close overlays and handle clicks
  const handleLinkClick = () => {
    closeOverlay();
    closeMobileMenu();
  };

  return (
    <header className="bg-gray-50 w-full lg:ml-24 lg:w-[calc(100%-6rem)] float-none lg:float-right h-16 lg:h-20 fixed top-0 right-0 left-0 lg:left-auto z-50 shadow-sm">
      <nav className="px-4 md:px-6 lg:container mx-auto flex justify-between items-center py-2 lg:py-4 h-full uppercase">
        {/* Hamburger Icon for Mobile and Tablet */}
        <button
          id="menu-toggle"
          className="block lg:hidden text-2xl focus:outline-none z-50 relative p-2 rounded-md hover:bg-gray-100 transition-colors bg-inherit"
          aria-label="Open mobile menu"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? "×" : "☰"}
        </button>

        {/* Full-Screen Hamburger Menu Overlay */}
        <div
          id="mobile-menu-overlay"
          className={`fixed top-0 left-0 w-screen h-screen bg-white z-40 flex flex-col items-center justify-center space-y-5 overflow-y-auto transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
            <ul className="flex flex-col items-center space-y-7 py-20 w-full max-w-sm">
              <li className="w-full text-center transform transition-all hover:scale-105">
                <button
                  onClick={() => showOverlay("ourCapabilities")}
                  className="text-gray-700 text-xl font-bold hover:text-gray-900 w-full py-2 px-4 rounded-md hover:bg-gray-50 transition-colors bg-inherit"
                >
                  Our Facilities
                </button>
              </li>
              <li className="w-full text-center transform transition-all hover:scale-105">
                <button
                  onClick={() => showOverlay("services")}
                  className="text-gray-700 text-xl font-bold hover:text-gray-900 w-full py-2 px-4 rounded-md hover:bg-gray-50 transition-colors bg-inherit"
                >
                  Services
                </button>
              </li>
              <li className="w-full text-center transform transition-all hover:scale-105">
                <Link
                  to="/about"
                  className="text-gray-700 text-xl font-bold hover:text-gray-900 block w-full py-2 px-4 rounded-md hover:bg-gray-50 transition-colors"
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>
              </li>
              <li className="w-full text-center transform transition-all hover:scale-105">
                <Link
                  to="/contact"
                  className="text-gray-700 text-xl font-bold hover:text-gray-900 block w-full py-2 px-4 rounded-md hover:bg-gray-50 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        {/* Desktop Navigation Menu */}
        <ul
          id="menu"
          className="hidden lg:flex space-x-5 mx-auto relative justify-between w-[50%]"
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
            <Link
              to="/about"
              className="text-gray-700 hover:text-gray-900 font-extrabold underline-offset-10"
            >
              About Us
            </Link>
          </li>
          {/* Contact */}
          <li>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-gray-900 font-extrabold underline-offset-10"
            >
              Contact
            </Link>
          </li>
        </ul>

        <Link to="/" className="flex items-center text-sm md:text-md lg:text-xl font-bold text-gray-800 lg:mr-5 ml-auto lg:ml-0">
          <img src={logo} alt="Company Logo" className="h-7 md:h-10 lg:h-12 w-auto" />
          <span className="text-black">PERIDOT</span>
        </Link>
      </nav>

      {/* Overlay for Our Capabilities */}
            <div className={`overlay-menu fixed top-0 left-0 w-screen h-screen bg-white bg-opacity-70 backdrop-blur-sm z-50 overflow-y-auto transition-all duration-300 ease-in-out ${
              activeOverlay === "ourCapabilities" ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
            }`}>
                <button
                  className="close-overlay absolute top-5 right-5 lg:left-5 lg:right-auto text-gray-800 bg-white text-3xl cursor-pointer z-50 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                  aria-label="Close overlay menu"
                  onClick={closeOverlay}
                >
                  ×
                </button>
                <div className="grid grid-cols-1 lg:grid-cols-4 h-full">
                  {/* Menu - Full width on mobile/tablet, left side on desktop */}
                  <div className="col-span-1 flex flex-col items-center justify-center h-full space-y-5 bg-white py-16 lg:py-0">
                    <ul className="flex flex-col items-center space-y-3 py-5 lg:py-0 lg:space-y-2 overflow-y-auto max-h-[70vh] lg:max-h-none px-4">
                    <li>
                        <a
                          href="/ourCapabilities/canopy-production"
                          className="block text-gray-700 hover:text-gray-900 text-md font-semibold transition-all hover:pl-1"
                          onClick={handleLinkClick}
                        >
                          Canopy Production
                        </a>
                      </li>
                      <li>
                        <a
                          href="/ourCapabilities/autoclave"
                          className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect"
                          onClick={handleLinkClick}
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
                          onClick={handleLinkClick}
                        >
                          CNC Cutting
                        </a>
                      </li>
                      <li>
                        <a
                          href="/ourCapabilities/production-of-moulds"
                          className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect"
                          onClick={handleLinkClick}
                        >
                          Production of Moulds
                        </a>
                      </li>
                      <li>
                        <a
                          href="/ourCapabilities/design-office"
                          className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect"
                          onClick={handleLinkClick}
                        >
                          Design Office
                        </a>
                      </li>
                      <li>
                        <a
                          href="/ourCapabilities/paint-shop"
                          className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect"
                          onClick={handleLinkClick}
                        >
                          Paint Shop
                        </a>
                      </li>
                      <li>
                        <a
                          href="/ourCapabilities/oven"
                          className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect"
                          onClick={handleLinkClick}
                        >
                          Oven
                        </a>
                      </li>
                      <li>
                        <a
                          href="/ourCapabilities/resin-kitchen"
                          className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect"
                          onClick={handleLinkClick}
                        >
                          Resin kitchen
                        </a>
                      </li>
                      <li>
                        <a
                          href="/ourCapabilities/cold-storage"
                          className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect"
                          onClick={handleLinkClick}
                        >
                          Cold Storage
                        </a>
                      </li>
                      <li>
                        <a
                          href="/ourCapabilities/laser-3d-scanner"
                          className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect"
                          onClick={handleLinkClick}
                        >
                          Laser 3D Scanner
                        </a>
                      </li>
                      <li>
                        <a
                          href="/ourCapabilities/laser-cutting-modeling"
                          className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect"
                          onClick={handleLinkClick}
                        >
                          Laser Cutting & Modeling
                        </a>
                      </li>
                      <li>
                        <a
                          href="/ourCapabilities/6axis-robotic-arm"
                          className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect"
                          onClick={handleLinkClick}
                        >
                          6-Axis Robotic Arm
                        </a>
                      </li>
                      <li>
                        <a
                          href="/ourCapabilities/clean-room-facility"
                          className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect"
                          onClick={handleLinkClick}
                        >
                          Clean Room Facility
                        </a>
                      </li>
                      <li>
                        <a
                          href="/ourCapabilities/weaving-machine"
                          className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect"
                          onClick={handleLinkClick}
                        >
                          Weaving Machine
                        </a>
                      </li>
                      <li>
                        <a
                          href="/ourCapabilities/hydrolic-press"
                          className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect"
                          onClick={handleLinkClick}
                        >
                          Hydraulic Press
                        </a>
                      </li>
                      <li>
                        <a
                          href="/ourCapabilities/epoxy-storage"
                          className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect"
                          onClick={handleLinkClick}
                        >
                          Epoxy Storage
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-3"></div>
                </div>
              </div>
            
            <div className={`overlay-menu fixed top-0 left-0 w-screen h-screen bg-white bg-opacity-70 backdrop-blur-sm z-50 overflow-y-auto transition-all duration-300 ease-in-out ${
              activeOverlay === "services" ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
            }`}>
                <button
                  className="close-overlay absolute top-5 right-5 lg:left-5 lg:right-auto bg-white text-3xl focus:outline-none cursor-pointer z-50 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                  aria-label="Close overlay menu"
                  onClick={closeOverlay}
                >
                  ×
                </button>
                <div className="grid grid-cols-1 lg:grid-cols-4 h-full">
                  {/* Menu - Full width on mobile/tablet, left side on desktop */}
                  <div className="col-span-1 flex flex-col items-center justify-center h-full space-y-5 bg-white py-16 lg:py-0">
                    <ul className="flex flex-col items-center space-y-5 py-5 lg:py-0 overflow-y-auto max-h-[70vh] lg:max-h-none px-4">
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
                          className="block text-gray-700 hover:text-gray-900 text-lg transition-all hover:pl-1"
                          onClick={handleLinkClick}
                        >
                          Design office
                        </a>
                      </li>
                      <li>
                        <a
                          href="/services/paint-shop"
                          className="block text-gray-700 hover:text-gray-900 text-lg transition-all hover:pl-1"
                          onClick={handleLinkClick}
                        >
                          Paint shop
                        </a>
                      </li>
                      <li>
                        <a
                          href="/services/canopy-production"
                          className="block text-gray-700 hover:text-gray-900 text-lg hover-effect"
                          onClick={handleLinkClick}
                        >
                          Canopy production
                        </a>
                      </li>
                      <li>
                        <a
                          href="/services/cnc-milling"
                          className="block text-gray-700 hover:text-gray-900 text-lg hover-effect"
                          onClick={handleLinkClick}
                        >
                          CNC milling
                        </a>
                      </li>
                      <li>
                        <a
                          href="/services/cutting-plotter"
                          className="block text-gray-700 hover:text-gray-900 text-lg hover-effect"
                          onClick={handleLinkClick}
                        >
                          Cutting plotter
                        </a>
                      </li>
                      <li>
                        <a
                          href="/services/production-of-models"
                          className="block text-gray-700 hover:text-gray-900 text-lg hover-effect"
                          onClick={handleLinkClick}
                        >
                          Production of models
                        </a>
                      </li>
                      <li>
                        <a
                          href="/services/production-of-moulds-and-tooling"
                          className="block text-gray-700 hover:text-gray-900 text-lg hover-effect"
                          onClick={handleLinkClick}
                        >
                          Production of moulds and tooling
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-3"></div>
                </div>
              </div>
    </header>
  );
};

export default Header;
