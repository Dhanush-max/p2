import cutting from "../../assets/cutting.jpg";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "./seeAlsoList";
import cutting1 from "../../assets/cutting1.jpg";
import cutting2 from "../../assets/cutting2.jpg";
import cutting3 from "../../assets/cutting3.jpg";
import cutting4 from "../../assets/cutting4.jpg";
import cutting5 from "../../assets/cutting5.jpg";
import cutting6 from "../../assets/cutting6.jpg";
import cutting7 from "../../assets/cutting7.jpg";
import cutting8 from "../../assets/cutting8.jpg";

const imageList = [
  cutting1,
  cutting2,
  cutting3,
  cutting4,
  cutting5,
  cutting6,
  cutting7,
  cutting8,
];

const description =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum eligendi quidem magni ratione corrupti deleniti quia assumenda consequuntur. Consectetur quidem sequi fugiat dolorem odio veritatis corrupti nulla! Blanditiis, magni quidem? ";
const listItems = [
  { name: "Design office", link: "" },
  { name: "paint shop", link: "" },
  { name: "canopy production", link: "" },
  { name: "cnc milling", link: "" },
  { name: "Production of models", link: "" },
  { name: "production of models and tooling", link: "" },
];
const CuttingPlotter = () => {
  return (
    <>
      <HeroImgSection
        img={cutting}
        title="Production of models"
        details="We are passionate about aviation, we make small and bigger aircrafts models."
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

export default CuttingPlotter;
