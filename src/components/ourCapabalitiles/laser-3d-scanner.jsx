import laser3dScanner from "../../assets/3dscanning.jpg";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

const imageList = [laser3dScanner, laser3dScanner, laser3dScanner]; // Add more images as needed
const description =
  "Our laser 3D scanner is designed to deliver precision and efficiency in scanning operations. With advanced technology, it ensures high-quality results for a variety of applications.";
const listItems = [
  { name: "Paint Shop", link: "/services/paint-shop" },
  { name: "Canopy Production", link: "/services/canopy-production" },
  { name: "CNC Milling", link: "/services/cnc-milling" },
  { name: "Cutting Plotter", link: "/services/cutting-plotter" },
  { name: "Production of Models", link: "/services/production-of-models" },
  { name: "Production of Moulds and Tooling", link: "/services/production-of-moulds-and-tooling" },
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