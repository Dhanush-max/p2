import cncCuttingPlotter from "../../assets/cncCutting1.jpg";
import cncCuttingPlotter2 from "../../assets/cncCutting2.jpg";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

const imageList = [cncCuttingPlotter, cncCuttingPlotter2]; // Two unique CNC cutting plotter images
const description =
  "Delivering clean edges and consistent quality, our CNC system enhances manufacturing efficiency for aerospace, automotive, and defence applications.";
const listItems = [
  { name: "DRY PAINT BOOTH", link: "/services/paint-shop" },
  { name: "Canopy Production", link: "/services/canopy-production" },
  { name: "CNC Milling", link: "/services/cnc-milling" },
  { name: "Cutting Plotter", link: "/services/cutting-plotter" },
  { name: "Production of Models", link: "/services/production-of-models" },
  { name: "Production of Moulds and Tooling", link: "/services/production-of-moulds-and-tooling" },
];

const CNCCuttingPlotter = () => {
  return (
    <div>
      <HeroImgSection
        img={cncCuttingPlotter}
        title="CNC PREPREG CUTTING MACHINE"
        details="Precision cutting that transforms design into accuracy."
      />
      <ImageSec
        imageUrl={cncCuttingPlotter2}
        title="Advanced CNC PREPREG CUTTING MACHINE "
        description="Automated prepreg cutting ensures high-speed, waste-free processing of composite laminates."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="See also" items={listItems} />
    </div>
  );
};

export default CNCCuttingPlotter;