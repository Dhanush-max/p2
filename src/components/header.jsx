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
  <nav className="px-4 md:px-6 lg:container mx-auto flex justify-between items-center py-2 lg:py-4 h-full">
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
                  our capabilities
                </button>
              </li>
              <li className="w-full text-center transform transition-all hover:scale-105">
                <button
                  onClick={() => showOverlay("services")}
                  className="text-gray-700 text-xl font-bold hover:text-gray-900 w-full py-2 px-4 rounded-md hover:bg-gray-50 transition-colors bg-inherit"
                >
                  What We Do
                </button>
              </li>
              <li className="w-full text-center transform transition-all hover:scale-105">
                <Link
                  to="/about"
                  className="text-gray-700 text-xl font-bold hover:text-gray-900 block w-full py-2 px-4 rounded-md hover:bg-gray-50 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Who We Are
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
              our capabilities
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
              What We Do
            </a>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-700 hover:text-gray-900 font-extrabold underline-offset-10"
            >
              Who We Are
            </Link>
          </li>
          {/* Contact */}
          <li>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-gray-900 font-extrabold underline-offset-10"
            >
              Contact Us
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
                      <li><a href="/ourCapabilities/autoclave" className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect" onClick={handleLinkClick}>Autoclaves</a></li>
                      <li><a href="/ourCapabilities/composite-curing-oven" className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect" onClick={handleLinkClick}>Composite curing oven</a></li>
                      <li><a href="/ourCapabilities/dry-paint-booth" className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect" onClick={handleLinkClick}>Dry paint booth</a></li>
                      <li><a href="/ourCapabilities/clean-room-facility" className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect" onClick={handleLinkClick}>Clean room</a></li>
                      <li><a href="/ourCapabilities/cold-storage" className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect" onClick={handleLinkClick}>Cold storage</a></li>
                      <li><a href="/ourCapabilities/cnc-prepreg-cutting-machine" className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect" onClick={handleLinkClick}>CNC prepreg cutting machine</a></li>
                      <li><a href="/ourCapabilities/6axis-robotic-arm" className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect" onClick={handleLinkClick}>6 axis CNC robotic arm</a></li>
                      <li><a href="/ourCapabilities/ewc-router-3-axis" className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect" onClick={handleLinkClick}>3 axis CNC pattern and mould machine</a></li>
                      <li><a href="/ourCapabilities/laser-cutting-machine" className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect" onClick={handleLinkClick}>Laser cutting machine</a></li>
                      <li><a href="/ourCapabilities/carbonfibre-weaving-machine" className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect" onClick={handleLinkClick}>Carbonfibre weaving machine</a></li>
                      <li><a href="/ourCapabilities/hydrolic-press" className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect" onClick={handleLinkClick}>650 tonne hydraulic press</a></li>
                      <li><a href="/ourCapabilities/laser-3d-scanner" className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect" onClick={handleLinkClick}>3D scanner</a></li>
                      <li><a href="/ourCapabilities/3d-printers" className="block text-gray-700 hover:text-gray-900 text-md font-semibold hover-effect" onClick={handleLinkClick}>3D printers</a></li>
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
                      <li>
                        <a href="/services/compression-moulding" className="block text-gray-700 hover:text-gray-900 text-lg hover-effect" onClick={handleLinkClick}>Compression moulding</a>
                      </li>
                      <li>
                        <a href="/services/autoclave-curing" className="block text-gray-700 hover:text-gray-900 text-lg hover-effect" onClick={handleLinkClick}>Autoclave curing</a>
                      </li>
                      <li>
                        <a href="/services/composite-mould-manufacturing" className="block text-gray-700 hover:text-gray-900 text-lg hover-effect" onClick={handleLinkClick}>Composite mould manufacturing</a>
                      </li>
                      <li>
                        <a href="/services/composite-honeycomb-bonding" className="block text-gray-700 hover:text-gray-900 text-lg hover-effect" onClick={handleLinkClick}>Composite honeycomb bonding</a>
                      </li>
                      <li>
                        <a href="/services/resin-infusion" className="block text-gray-700 hover:text-gray-900 text-lg hover-effect" onClick={handleLinkClick}>Resin infusion</a>
                      </li>
                      <li>
                        <a href="/services/wet-layup-technique" className="block text-gray-700 hover:text-gray-900 text-lg hover-effect" onClick={handleLinkClick}>Wet layup technique</a>
                      </li>
                      <li>
                        <a href="/services/canopy-production" className="block text-gray-700 hover:text-gray-900 text-lg hover-effect" onClick={handleLinkClick}>Canopy production</a>
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
