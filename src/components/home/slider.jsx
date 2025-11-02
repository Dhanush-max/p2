import uavHomepage from "../../assets/UAV-homepage.jpg";
import cncUpclose from "../../assets/CNC-upclose-homepage.JPG";
import radomeHomepage from "../../assets/radome-homepage.jpg";
import background2 from "../../assets/background-2.png";
import ImageWithLoader from "../common/ImageWithLoader";

const Slider = () => {
  return (
    <section className="ml-24 w-[calc(100%-6rem)] py-8 relative flex z-30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
        {/* First Image - UAV */}
        <div className="relative overflow-hidden mt-8">
          <ImageWithLoader
            src={uavHomepage}
            alt="UAV Manufacturing"
            className="w-full h-auto"
            loaderClassName="w-full h-64"
          />
          <div className="absolute w-40 bottom-0 right-0 bg-white bg-opacity-90 p-4 text-center">
            <h3 className="text-lg font-bold">UAV Production</h3>
            <p className="text-sm text-gray-600">
              Advanced UAV manufacturing with precision engineering and 
              cutting-edge technology.
            </p>
          </div>
        </div>

        {/* Second Image - CNC */}
        <div className="relative overflow-hidden">
          <ImageWithLoader
            src={cncUpclose}
            alt="CNC Manufacturing"
            className="w-full h-auto"
            loaderClassName="w-full h-64"
          />
          <div className="absolute w-40 bottom-0 right-0 bg-white bg-opacity-90 p-4 text-center">
            <h3 className="text-lg font-bold">CNC Precision</h3>
            <p className="text-sm text-gray-600">
              High-precision CNC machining for complex components and 
              intricate designs.
            </p>
          </div>
        </div>

        {/* Third Image - Radome */}
        <div className="relative overflow-hidden mt-8">
          <ImageWithLoader
            src={radomeHomepage}
            alt="Radome Manufacturing"
            className="w-full h-auto"
            loaderClassName="w-full h-64"
          />
          <div className="absolute w-40 bottom-0 right-0 bg-white bg-opacity-90 p-4 text-center">
            <h3 className="text-lg font-bold">Radome Production</h3>
            <p className="text-sm text-gray-600">
              Specialized radome manufacturing for aerospace and 
              defense applications.
            </p>
          </div>
        </div>

        {/* Fourth Image - Background */}
        <div className="relative overflow-hidden">
          <ImageWithLoader
            src={background2}
            alt="Manufacturing Facility"
            className="w-full h-auto"
            loaderClassName="w-full h-64"
          />
          <div className="absolute w-40 bottom-0 right-0 bg-white bg-opacity-90 p-4 text-center">
            <h3 className="text-lg font-bold">Facility Overview</h3>
            <p className="text-sm text-gray-600">
              State-of-the-art manufacturing facility with advanced 
              equipment and processes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;