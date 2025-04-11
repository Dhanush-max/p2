import roboticArm from "../../assets/6axisRoboarm.jpg";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

const imageList = [roboticArm, roboticArm, roboticArm]; // Add more images as needed
const description =
  "Our 6-axis robotic arm is a cutting-edge solution for industrial automation, offering unmatched precision, flexibility, and efficiency. It is designed to handle complex tasks with ease, making it an essential tool for modern manufacturing.";
const listItems = [
  { name: "Robotic Welding", link: "/services/robotic-welding" },
  { name: "Material Handling", link: "/services/material-handling" },
  { name: "Assembly Automation", link: "/services/assembly-automation" },
  { name: "3D Printing", link: "/services/3d-printing" },
  { name: "Pick and Place", link: "/services/pick-and-place" },
  { name: "Quality Inspection", link: "/services/quality-inspection" },
];

const SixAxisRoboticArm = () => {
  return (
    <div>
      <HeroImgSection
        img={roboticArm}
        title="6-Axis Robotic Arm"
        details="Experience advanced automation with our 6-axis robotic arm, designed for precision and efficiency."
      />
      <ImageSec
        imageUrl={roboticArm}
        title="Advanced 6-Axis Robotic Arm"
        description="Our 6-axis robotic arm is equipped with state-of-the-art technology to deliver exceptional performance in industrial automation."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="Explore More" items={listItems} />
    </div>
  );
};

export default SixAxisRoboticArm;