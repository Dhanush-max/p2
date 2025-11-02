import ImageWithLoader from "../common/ImageWithLoader";

const Section = ({ image, altText, bgColor, title, description, link }) => {
  return (
    <section className="ml-19 w-[calc(100%-6rem)] md:ml-24 md:w-[calc(100%-6rem)] py-8 relative flex flex-col md:flex-row z-30 mx-auto">
      <div className="flex flex-col md:flex-row items-center h-full overflow-hidden">
        {/* Image (on the left side) */}
        <div className="w-full md:w-2/3 h-64 md:h-full mt-5 md:mt-14">
          <ImageWithLoader 
            src={image} 
            alt={altText} 
            className="w-full h-full object-fit"
            loaderClassName="w-full h-full" 
          />
        </div>

        {/* Text (on the right side for md and above, below image for smaller screens) */}
        <div
          className={`relative ${bgColor} md:absolute md:right-0 md:w-[calc(100%/5*3)] md:h-[80%] md:bottom-[6rem] md:flex md:flex-wrap md:flex-col md:justify-center md:items-end md:text-left md:z-[-1] md:ml-[calc(100%/5*2)] w-full md:mt-0`}
        >
          <div className="w-full md:w-[calc(100%/5.5*3.0)] md:h-[90%] text-left text-white md:content-center ">
            <h2
              className="text-2xl font-semibold uppercase"
              style={{ color: bgColor === "bg-black" ? "white" : "black" }}
            >
              {title}
            </h2>
            <p
              className={`mt-2 text-xl font-semibold md:w-[60%] ${
                bgColor === "bg-black" ? "text-white" : "text-black"
              }`}
            >
              {description}
            </p>
            <a href={link}>more</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
