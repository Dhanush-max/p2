import roboticArm from "../../assets/6axis.jpg";
import roboticArm1 from "../../assets/6axis2.jpg";
import roboticArm2 from "../../assets/6axis3.jpg";

import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

const imageList = [roboticArm, roboticArm1, roboticArm2]; // Add more images as needed

const description =
  "Our 6-axis robotic arm is a state-of-the-art solution for smart manufacturing and industrial automation. Engineered for high precision and flexibility, it handles complex operations like welding, material handling, assembly, and inspection with ease—boosting productivity and consistency across production lines.";

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
        img={roboticArm1}
        title="6-Axis Robotic Arm"
        details="Unlock next-level precision and efficiency in your production with our advanced 6-axis robotic arm technology."
      />
      <ImageSec
        imageUrl={roboticArm}
        title="High-Performance 6-Axis Robotic Arm"
        description="Designed for modern manufacturing facilities, our 6-axis robotic arm delivers high-speed, multi-directional motion for applications like robotic welding, pick-and-place operations, and automated quality control."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="Related Automation Solutions" items={listItems} />
    </div>
  );
};

export default SixAxisRoboticArm;
