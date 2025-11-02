import "swiper/css";
import HeroIframe from "../heroIframe";
import capabilites from "../../assets/capabalities.mp4";
import cnc1 from "../../assets/cnc1.jpg";
import design2 from "../../assets/design2.jpg";
import cutting3 from "../../assets/cutting3.jpg";
const Capabalitites = () => {
  return (
    <>
      <HeroIframe
        videoSrc={capabilites}
        text={"our capabilities"}
        gradient={`linear-gradient(to bottom, transparent 60%, white 100%)`}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quis voluptatum. Deserunt facere ex rerum corporis pariatur. Hic iusto qui eaque, earum dolore error molestiae, exercitationem, repellendus fugit omnis deserunt."
        }
      />
      <section className="ml-19 w-[calc(100%-6rem)] md:ml-24 md:w-[calc(100%-6rem)] py-8 relative flex flex-col md:flex-row z-30 mx-auto">
        <div className="flex flex-col md:flex-row items-center h-full overflow-hidden">
          {/* Image (on the left side) */}
          <div className="w-full md:w-2/3 h-64 md:h-full mt-5 md:mt-14">
            <img
              src={cnc1}
              alt="Image 3"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text (on the right side for md and above, below image for smaller screens) */}
          <div className="relative bg-gray-300  md:absolute md:right-0 md:w-[calc(100%/5*3)] md:h-[80%] md:bottom-[6rem] md:flex md:flex-wrap md:flex-col md:justify-center md:items-end md:text-left md:z-[-1] md:ml-[calc(100%/5*2)] w-full md:mt-0">
            <div className="w-full md:w-[calc(100%/5*2.9)] md:h-[90%] text-center text-white md:content-center">
              <h2 className="text-2xl font-semibold text-black">
                Card Title 3
              </h2>
              <p className="text-black mt-2 p-5">
                Description for card 3 goes here. You can add more content to
                explain the image.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="ml-19 w-[calc(100%-6rem)] md:ml-24 md:w-[calc(100%-6rem)] py-8 relative flex flex-col md:flex-row z-30 mx-auto">
        <div className="flex flex-col md:flex-row items-center h-full overflow-hidden">
          {/* Image (on the left side) */}
          <div className="w-full md:w-2/3 h-64 md:h-full mt-5 md:mt-14">
            <img
              src={design2}
              alt="Image 3"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text (on the right side for md and above, below image for smaller screens) */}
          <div className="relative bg-gray-300  md:absolute md:right-0 md:w-[calc(100%/5*3)] md:h-[80%] md:bottom-[6rem] md:flex md:flex-wrap md:flex-col md:justify-center md:items-end md:text-left md:z-[-1] md:ml-[calc(100%/5*2)] w-full md:mt-0">
            <div className="w-full md:w-[calc(100%/5*2.9)] md:h-[90%] text-center text-white md:content-center">
              <h2 className="text-2xl font-semibold text-black">
                Card Title 3
              </h2>
              <p className="text-black mt-2 p-5">
                Description for card 3 goes here. You can add more content to
                explain the image.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="ml-19 w-[calc(100%-6rem)] md:ml-24 md:w-[calc(100%-6rem)] py-8 relative flex flex-col md:flex-row z-30 mx-auto">
        <div className="flex flex-col md:flex-row items-center h-full overflow-hidden">
          {/* Image (on the left side) */}
          <div className="w-full md:w-2/3 h-64 md:h-full mt-5 md:mt-14">
            <img
              src={cutting3}
              alt="Image 3"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text (on the right side for md and above, below image for smaller screens) */}
          <div className="relative bg-gray-300  md:absolute md:right-0 md:w-[calc(100%/5*3)] md:h-[80%] md:bottom-[6rem] md:flex md:flex-wrap md:flex-col md:justify-center md:items-end md:text-left md:z-[-1] md:ml-[calc(100%/5*2)] w-full md:mt-0">
            <div className="w-full md:w-[calc(100%/5*2.9)] md:h-[90%] text-center text-white md:content-center">
              <h2 className="text-2xl font-semibold text-black">
                Card Title 3
              </h2>
              <p className="text-black mt-2 p-5">
                Description for card 3 goes here. You can add more content to
                explain the image.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Capabalitites;
