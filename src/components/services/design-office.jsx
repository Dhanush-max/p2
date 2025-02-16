import air from "../../assets/air.jpg";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "./seeAlsoList";

const imageList = [air, air, air]; // Add more images as needed
const description =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum eligendi quidem magni ratione corrupti deleniti quia assumenda consequuntur. Consectetur quidem sequi fugiat dolorem odio veritatis corrupti nulla! Blanditiis, magni quidem? ";
const listItems = [
  { name: "Paint shop", link: "" },
  { name: "Canopy production", link: "" },
  { name: "CNC milling", link: "" },
  { name: "Cutting plotter", link: "" },
  { name: "Production of models", link: "" },
  { name: "production of models and tooling", link: "" },
];

const DesignOffice = () => {
  return (
    <div>
      <HeroImgSection
        img={air}
        title="Design office"
        details="In our design office we employ engineers who graduated from the best Polish technical universities."
      />
      <ImageSec
        imageUrl="../src/assets/A3.jpg"
        title="600 aircrafts, 6 continents"
        description="Over the years, our team has created about 600 aircraft of various types (among which there are gliders, motor gliders, light and ultralight aircrafts) that fly on 6 continents."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="See also" items={listItems} />
    </div>
  );
};

export default DesignOffice;
