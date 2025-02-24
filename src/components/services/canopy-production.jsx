import canopy from "../../assets/canopy.jpg";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "./seeAlsoList";
import c from "../../assets/c.jpg";
import c2 from "../../assets/c2.jpg";
import c3 from "../../assets/c3.jpg";
import c4 from "../../assets/c4.jpg";
import c5 from "../../assets/c5.jpg";
import c6 from "../../assets/c6.jpg";
import c7 from "../../assets/c7.jpg";
import c8 from "../../assets/c8.jpg";
import c9 from "../../assets/c9.jpg";
import c10 from "../../assets/c10.jpg";
import c11 from "../../assets/c11.jpg";
import c12 from "../../assets/c12.jpg";
import c13 from "../../assets/c13.jpg";
import c14 from "../../assets/c14.jpg";

const imageList = [c, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14];

const description =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum eligendi quidem magni ratione corrupti deleniti quia assumenda consequuntur. Consectetur quidem sequi fugiat dolorem odio veritatis corrupti nulla! Blanditiis, magni quidem? ";
const listItems = [
  { name: "Design office", link: "" },
  { name: "paint shop", link: "" },
  { name: "CNC milling", link: "" },
  { name: "Cutting plotter", link: "" },
  { name: "Production of models", link: "" },
  { name: "production of models and tooling", link: "" },
];
const CanopyProduction = () => {
  return (
    <>
      <HeroImgSection
        img={canopy}
        title="Canopy production"
        details="Scratch on the glass? Don't worry! Our offer includes canopies for single and two-seater gliders, and after delivery of appropriate equipment – also other aircrafts."
      />
      <ImageSec
        imageUrl="../src/assets/c3.jpg"
        description="We offer not only painting of new aircrafts, but also comprehensive renovation of used gliders and motor gliders.
        "
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="See also" items={listItems} />
    </>
  );
};

export default CanopyProduction;
