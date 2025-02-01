import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="absolute bg-black text-white py-8 mx-auto  z-30 uppercase w-full">
      <div className="container mx-auto w-[calc(100%-6rem)]">
        <div className="flex justify-between items-center py-6 border-b border-[#5e5e5e] md:flex-row flex-col">
          <div className="text-2xl">
            <h1>BrandLogo</h1>
          </div>
          <div>
            <ul className="flex space-x-4">
              <p>Follow us:</p>
              <li>i</li>
              <li>F</li>
              <li>Y</li>
              <li>t</li>
            </ul>
          </div>
        </div>

        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left py-8">
          {/* Div 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-2 border-b border-[#5e5e5e]">
              Our Capabilities
            </h3>
            <ul>
              <li>
                <Link to="/ourCapabilites/technologies">Technologies</Link>
              </li>
              <li>
                <Link to="/ourCapabilites/equipment">Equipment</Link>
              </li>
              <li>
                <Link to="/ourCapabilites/production-facilities">
                  Production facilities
                </Link>
              </li>
            </ul>
          </div>
          {/* Div 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-2 border-b border-[#5e5e5e]">
              Service
            </h3>
            <ul>
              <li>
                <Link to="/services/design-office">Design office</Link>
              </li>
              <li>
                <Link to="/services/canopy-production">Canopy production</Link>
              </li>
              <li>
                <Link to="/services/cnc-milling">CNC milling</Link>
              </li>
              <li>
                <Link to="/services/cutting-plotter">Cutting plotter</Link>
              </li>
              <li>
                <Link to="/services/production-of-models">
                  Production of models
                </Link>
              </li>
              <li>
                <Link to="/services/production-of-moulds-and-tooling">
                  Production of moulds and tooling
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Second Row */}
        <div className="mt-6 text-start">
          <div className="text-2xl border-b border-[#5e5e5e] w-[50%]">
            Company
          </div>
          <ul>
            <li>Who are we</li>
            <li>News</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
