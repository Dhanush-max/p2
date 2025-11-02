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
  { name: "DRY PAINT BOOTH", link: "" },
  { name: "canopy production", link: "" },
  { name: "cnc milling", link: "" },
  { name: "cutting plotter", link: "" },
  { name: "production of models and tooling", link: "" },
];
const ProductionOfModels = () => {
  return (
    <>
      <HeroImgSection
        img={air}
        title="Cutting plotter"
        details="We offer cutting any form in glass, carbon, foam or prepreg according to a delivered design."
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

export default ProductionOfModels;
