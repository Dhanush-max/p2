import paintShop from "../../assets/paintshop.jpg";
import paintShop2 from "../../assets/paintshop2.jpg";
import paintShop3 from "../../assets/paintshop3.jpg";

import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

const imageList = [paintShop, paintShop2, paintShop3];

const description =
  "Delivering durable, high-quality finishes for aerospace, automotive, and engineering components—our booth guarantees both performance and visual excellence.";

const listItems = [
  { name: "Design Office", link: "/services/design-office" },
  { name: "Canopy Production", link: "/services/canopy-production" },
  { name: "CNC Milling", link: "/services/cnc-milling" },
  { name: "Cutting Plotter", link: "/services/cutting-plotter" },
  { name: "Production of Models", link: "/services/production-of-models" },
  { name: "Production of Moulds and Tooling", link: "/services/production-of-moulds-and-tooling" },
];

const PaintShop = () => {
  return (
    <div>
      <HeroImgSection
        img={paintShop2}
        title="DRY PAINT BOOTH"
        details="Achieving flawless surface finishes through controlled coating environments."
      />
      <ImageSec
        imageUrl={paintShop}
        title="Dry Paint Booth"
        description="Our industrial dry paint booth is designed for precision coating, ensuring uniform application and premium aesthetics."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="Explore More Facilities" items={listItems} />
    </div>
  );
};

export default PaintShop;
