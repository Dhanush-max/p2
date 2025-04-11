import cleanRoomFacility from "../../assets/cleanRoom.jpg";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

const imageList = [cleanRoomFacility, cleanRoomFacility, cleanRoomFacility]; // Add more images as needed
const description =
  "Our clean room facility is designed to provide a controlled environment for precision manufacturing and sensitive processes. With advanced filtration and environmental controls, we ensure the highest standards of cleanliness and quality.";
const listItems = [
  { name: "Paint Shop", link: "/services/paint-shop" },
  { name: "Canopy Production", link: "/services/canopy-production" },
  { name: "CNC Milling", link: "/services/cnc-milling" },
  { name: "Cutting Plotter", link: "/services/cutting-plotter" },
  { name: "Production of Models", link: "/services/production-of-models" },
  { name: "Production of Moulds and Tooling", link: "/services/production-of-moulds-and-tooling" },
];

const CleanRoomFacility = () => {
  return (
    <div>
      <HeroImgSection
        img={cleanRoomFacility}
        title="Clean Room Facility"
        details="Our clean room facility ensures a controlled environment for precision manufacturing and sensitive processes."
      />
      <ImageSec
        imageUrl={cleanRoomFacility}
        title="State-of-the-art Clean Room Facility"
        description="Our clean room facility is equipped with advanced technology to maintain a controlled environment for high-quality production."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="See also" items={listItems} />
    </div>
  );
};

export default CleanRoomFacility;