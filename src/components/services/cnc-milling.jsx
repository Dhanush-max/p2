import cnc from "../../assets/cnc.jpg";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "./seeAlsoList";
import cnc1 from "../../assets/cnc1.jpg";
import cnc2 from "../../assets/cnc2.jpg";
import cnc3 from "../../assets/cnc3.jpg";
import cnc4 from "../../assets/cnc4.jpg";
import cnc5 from "../../assets/cnc5.jpg";

const imageList = [cnc1, cnc2, cnc3, cnc4, cnc5];

const description =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum eligendi quidem magni ratione corrupti deleniti quia assumenda consequuntur. Consectetur quidem sequi fugiat dolorem odio veritatis corrupti nulla! Blanditiis, magni quidem? ";
const listItems = [
  { name: "Design office", link: "" },
  { name: "paint shop", link: "" },
  { name: "canopy production", link: "" },
  { name: "Cutting plotter", link: "" },
  { name: "Production of models", link: "" },
  { name: "production of models and tooling", link: "" },
];
const CNCMilling = () => {
  return (
    <>
      <HeroImgSection
        img={cnc}
        title="CNC milling"
        details="Using a three-axis CNC machine we can create precise 3D models."
      />
      <ImageSec
        imageUrl="../src/assets/cnc.jpg"
        description="We offer not only painting of new aircrafts, but also comprehensive renovation of used gliders and motor gliders."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="See also" items={listItems} />
    </>
  );
};

export default CNCMilling;
