import laser3dScanner from "../../assets/3dScanning.jpg";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "./seeAlsoList";

const imageList = [laser3dScanner, laser3dScanner, laser3dScanner]; // Add more images as needed
const description =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum eligendi quidem magni ratione corrupti deleniti quia assumenda consequuntur. Consectetur quidem sequi fugiat dolorem odio veritatis corrupti nulla! Blanditiis, magni quidem? ";
const listItems = [
  { name: "Paint shop", link: "/services/paint-shop" },
  { name: "Canopy production", link: "/services/canopy-production" },
  { name: "CNC milling", link: "/services/cnc-milling" },
  { name: "Cutting plotter", link: "/services/cutting-plotter" },
  { name: "Production of models", link: "/services/production-of-models" },
  { name: "Production of moulds and tooling", link: "/services/production-of-moulds-and-tooling" },
];

const Laser3DScanner = () => {
  return (
    <div>
      <HeroImgSection
        img={laser3dScanner}
        title="Laser 3D Scanner"
        details="Our laser 3D scanner ensures precise and accurate measurements for all projects."
      />
      <ImageSec
        imageUrl={laser3dScanner}
        title="State-of-the-art Laser 3D Scanner"
        description="Our laser 3D scanner is equipped with the latest technology to ensure precise and accurate measurements."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="See also" items={listItems} />
    </div>
  );
};

export default Laser3DScanner;