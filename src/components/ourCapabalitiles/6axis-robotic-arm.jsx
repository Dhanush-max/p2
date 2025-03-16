import roboticArm from "../../assets/6axisRoboarm.jpg";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "./seeAlsoList";

const imageList = [roboticArm, roboticArm, roboticArm]; // Add more images as needed
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

const SixAxisRoboticArm = () => {
  return (
    <div>
      <HeroImgSection
        img={roboticArm}
        title="6-Axis Robotic Arm"
        details="Our 6-axis robotic arm provides precise and efficient automation solutions."
      />
      <ImageSec
        imageUrl={roboticArm}
        title="Advanced 6-Axis Robotic Arm"
        description="Our 6-axis robotic arm is equipped with the latest technology to ensure precise and efficient automation."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="See also" items={listItems} />
    </div>
  );
};

export default SixAxisRoboticArm;