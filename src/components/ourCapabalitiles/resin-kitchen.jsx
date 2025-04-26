import ResinStorageImage from "../../assets/resin.jpg";
import ResinStorageImage1 from "../../assets/resin1.jpg";

import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

const imageList = [ResinStorageImage1, ResinStorageImage, ResinStorageImage]; // Add more images as needed
const description =
  "Our resin kitchen facility is designed to deliver exceptional quality and precision for all resin-based projects. We ensure durability and reliability in every product.";
  const listItems = [
    { name: "Paint Shop", link: "/services/paint-shop" },
    { name: "Canopy Production", link: "/services/canopy-production" },
    { name: "CNC Milling", link: "/services/cnc-milling" },
    { name: "Cutting Plotter", link: "/services/cutting-plotter" },
    { name: "Production of Models", link: "/services/production-of-models" },
    { name: "Production of Moulds and Tooling", link: "/services/production-of-moulds-and-tooling" },
  ];
  
const ResinStorage = () => {
  return (
    <div>
      <HeroImgSection
        img={ResinStorageImage1}
        title="Resin Kitchen"
        details="Our resin kitchen facility ensures top-notch quality and precision for all resin-based projects."
      />
      <ImageSec
        imageUrl={ResinStorageImage}
        title="Cutting-edge Resin Kitchen Facility"
        description="Equipped with advanced technology, our resin Kitchen facility guarantees exceptional results for every project."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="Explore More" items={listItems} />
    </div>
  );
};

export default ResinStorage;