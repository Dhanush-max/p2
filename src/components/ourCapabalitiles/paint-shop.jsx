import paintShop from "../../assets/paintshop.jpg";
import paintShop2 from "../../assets/paintshop2.jpg";
import paintShop3 from "../../assets/paintshop3.jpg";

import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

const imageList = [paintShop, paintShop2, paintShop3];

const description =
  "Our fully equipped paint shop offers premium industrial painting services for aerospace components, automotive parts, and composite structures. We utilize high-performance coatings, temperature-controlled paint booths, and skilled technicians to deliver durable and precise finishes that meet the highest quality standards.";

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
        title="Industrial Paint Shop"
        details="High-precision paint booth for aerospace, automotive, and composite part finishing."
      />
      <ImageSec
        imageUrl={paintShop}
        title="Advanced Industrial Painting Facility"
        description="Our paint shop features modern spray technology and cleanroom standards to ensure uniform coating, corrosion resistance, and aerospace-grade surface finishes."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="Explore More Facilities" items={listItems} />
    </div>
  );
};

export default PaintShop;
