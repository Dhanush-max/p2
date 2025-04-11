import autoclave from "../../assets/autoclave1.jpg";
import autoclave2 from "../../assets/autoclave2.jpg";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

const imageList = [autoclave, autoclave2, autoclave]; // Add more images as needed
const description =
  "Our autoclave facility is designed to deliver precision and reliability in composite manufacturing. With advanced pressure and temperature control, we ensure the production of high-quality components for aerospace, automotive, and other industries.";
const listItems = [
  { name: "Composite Curing", link: "/services/composite-curing" },
  { name: "Aerospace Components", link: "/services/aerospace-components" },
  { name: "Automotive Parts", link: "/services/automotive-parts" },
  { name: "Custom Tooling", link: "/services/custom-tooling" },
  { name: "Prototyping", link: "/services/prototyping" },
  { name: "High-Pressure Moulding", link: "/services/high-pressure-moulding" },
];

const Autoclave = () => {
  return (
    <div>
      <HeroImgSection
        img={autoclave}
        title="Autoclave"
        details="Experience precision and reliability with our advanced autoclave facility for composite manufacturing."
      />
      <ImageSec
        imageUrl={autoclave}
        title="State-of-the-art Autoclave"
        description="Our autoclave facility is equipped with cutting-edge technology to deliver exceptional results in composite curing and manufacturing."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="Explore More" items={listItems} />
    </div>
  );
};

export default Autoclave;