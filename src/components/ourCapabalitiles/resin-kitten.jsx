import ResinStorageImage from "../../assets/resin.jpg";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";


const imageList = [ResinStorageImage, ResinStorageImage, ResinStorageImage]; // Add more images as needed
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

const ResinStorage = () => {
  return (
    <div>
      <HeroImgSection
        img={ResinStorageImage}
        title="Resin Kitten"
        details="Our resin kitten facility ensures high-quality and precise resin products for all projects."
      />
      <ImageSec
        imageUrl={ResinStorageImage}
        title="State-of-the-art Resin Kitten"
        description="Our resin kitten facility is equipped with the latest technology to ensure high-quality and precise resin products."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="See also" items={listItems} />
    </div>
  );
};

export default ResinStorage;