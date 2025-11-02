import coldStorage1 from "../../assets/cold-storage-1.JPG";
import coldStorage2 from "../../assets/cold-storage-2.jpg";
import coldStorage4 from "../../assets/cold-storage-4.JPG";

import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

const description =
  "Combined with a 2–4 °C ante room, it maintains the highest quality standards for resin systems and composite components throughout production.";
const listItems = [
  { name: "AUTOCLAVES", link: "/ourCapabilities/autoclave" },
  { name: "COMPOSITE CURING OVEN", link: "/ourCapabilities/composite-curing-oven" },
  { name: "DRY PAINT BOOTH", link: "/ourCapabilities/dry-paint-booth" },
  { name: "CLEAN ROOM", link: "/ourCapabilities/clean-room-facility" },
  { name: "COLD STORAGE" }, // current page, no link
  { name: "3D SCANNER & 3D PRINTERS", link: "/ourCapabilities/3d-printers" },
];

const ColdStorage = () => {
  return (
    <div>
      <HeroImgSection
        img={coldStorage1}
        title="COLD STORAGE"
        details="Preserving material integrity through advanced temperature management."
      />
      <ImageSec
        imageUrl={coldStorage2}
        title="COLD STORAGE"
        description="Our –18 °C cold storage ensures the stability of prepreg  and temperature-sensitive materials."
      />
      <ImageCarousel imageList={[coldStorage2, coldStorage4]} description={description} />
      <SeeAlsoList title="Related Facilities" items={listItems} />
    </div>
  );
};

export default ColdStorage;