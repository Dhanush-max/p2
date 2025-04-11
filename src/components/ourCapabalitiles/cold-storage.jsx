import coldStorage from "../../assets/coldStorage.jpg";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

const imageList = [coldStorage, coldStorage, coldStorage]; // Add more images as needed
const description =
  "Our cold storage facility is designed to preserve materials at optimal temperatures, ensuring their quality and longevity. With advanced temperature control systems, we cater to a wide range of storage needs.";
const listItems = [
  { name: "Paint Shop", link: "/services/paint-shop" },
  { name: "Canopy Production", link: "/services/canopy-production" },
  { name: "CNC Milling", link: "/services/cnc-milling" },
  { name: "Cutting Plotter", link: "/services/cutting-plotter" },
  { name: "Production of Models", link: "/services/production-of-models" },
  { name: "Production of Moulds and Tooling", link: "/services/production-of-moulds-and-tooling" },
];

const ColdStorage = () => {
  return (
    <div>
      <HeroImgSection
        img={coldStorage}
        title="Cold Storage"
        details="Our cold storage facility ensures the preservation of materials at optimal temperatures."
      />
      <ImageSec
        imageUrl={coldStorage}
        title="State-of-the-art Cold Storage"
        description="Our cold storage facility is equipped with the latest technology to ensure the best preservation of materials."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="See also" items={listItems} />
    </div>
  );
};

export default ColdStorage;