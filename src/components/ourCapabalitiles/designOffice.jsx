import design from "../../assets/design.jpg";
import design2 from "../../assets/design2.jpg";
import design3 from "../../assets/design3.jpg";
import design4 from "../../assets/design4.jpg";
import design5 from "../../assets/design5.jpg";
import design6 from "../../assets/design6.jpg";
import design7 from "../../assets/design7.jpg";
import design8 from "../../assets/design8.jpg";
import design9 from "../../assets/design2.jpg";
import design10 from "../../assets/design10.jpg";
import design11 from "../../assets/design11.jpg";
import design12 from "../../assets/design12.jpg";
import design13 from "../../assets/design13.jpg";
import design14 from "../../assets/design14.jpg";
import design15 from "../../assets/design15.jpg";

import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "./seeAlsoList";

const imageList = [
  design2,
  design3,
  design4,
  design5,
  design6,
  design7,
  design8,
  design9,
  design10,
  design11,
  design12,
  design13,
  design14,
  design15,
]; // Add more images as needed
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

const DesignOffice = () => {
  return (
    <div>
      <HeroImgSection
        img={design}
        title="Design office"
        details="In our design office we employ engineers who graduated from the best Polish technical universities."
      />
      <ImageSec
        imageUrl={design2}
        title="600 aircrafts, 6 continents"
        description="Over the years, our team has created about 600 aircraft of various types (among which there are gliders, motor gliders, light and ultralight aircrafts) that fly on 6 continents."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="See also" items={listItems} />
    </div>
  );
};

export default DesignOffice;
