import air from "../../assets/air.jpg";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "./seeAlsoList";
const imageList = [air, air, air]; // Add more images as needed
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
        img={air}
        title="CNC milling"
        details="Using a three-axis CNC machine we can create precise 3D models."
      />
      <ImageSec
        imageUrl="../src/assets/A3.jpg"
        description="We offer not only painting of new aircrafts, but also comprehensive renovation of used gliders and motor gliders."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="See also" items={listItems} />
    </>
  );
};

export default CNCMilling;
