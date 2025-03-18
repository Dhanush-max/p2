import cleanRoomFacility from "../../assets/cleanRoom.jpg";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";


const imageList = [cleanRoomFacility, cleanRoomFacility, cleanRoomFacility]; // Add more images as needed
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

const CleanRoomFacility = () => {
  return (
    <div>
      <HeroImgSection
        img={cleanRoomFacility}
        title="Clean Room Facility"
        details="Our clean room facility ensures a controlled environment for sensitive processes."
      />
      <ImageSec
        imageUrl={cleanRoomFacility}
        title="State-of-the-art Clean Room Facility"
        description="Our clean room facility is equipped with the latest technology to ensure a controlled environment for sensitive processes."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="See also" items={listItems} />
    </div>
  );
};

export default CleanRoomFacility;