import hydrolicPress from "../../assets/hydrolic.jpg";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

const imageList = [hydrolicPress, hydrolicPress, hydrolicPress]; // Add more images as needed
const description =
  "Our hydraulic press facility is designed to deliver precision and efficiency in pressing operations. With advanced technology, it ensures high-quality results for a variety of applications.";
const listItems = [
  { name: "Paint Shop", link: "/services/paint-shop" },
  { name: "Canopy Production", link: "/services/canopy-production" },
  { name: "CNC Milling", link: "/services/cnc-milling" },
  { name: "Cutting Plotter", link: "/services/cutting-plotter" },
  { name: "Production of Models", link: "/services/production-of-models" },
  { name: "Production of Moulds and Tooling", link: "/services/production-of-moulds-and-tooling" },
];

const HydrolicPress = () => {
  return (
    <div>
      <HeroImgSection
        img={hydrolicPress}
        title="Hydraulic Press"
        details="Our hydraulic press facility ensures high-quality and precise pressing products for all projects."
      />
      <ImageSec
        imageUrl={hydrolicPress}
        title="State-of-the-art Hydraulic Press"
        description="Our hydraulic press facility is equipped with the latest technology to ensure high-quality and precise pressing products."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="See also" items={listItems} />
    </div>
  );
};

export default HydrolicPress;