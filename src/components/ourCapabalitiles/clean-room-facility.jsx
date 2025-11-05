import cleanRoom1 from "../../assets/clean-room-1.JPG";
import cleanRoom2 from "../../assets/clean-room-2.JPG";
import cleanRoom3 from "../../assets/clean-room-3.JPG";

import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

const description =
  "Supported by an Cold storage(-18°C), it ensures optimal temperature and particulate control, enabling high-quality production for aerospace, defence, and medical-grade assemblies.";
const listItems = [
  { name: "AUTOCLAVES", link: "/ourCapabilities/autoclave" },
  { name: "COMPOSITE CURING OVEN", link: "/ourCapabilities/composite-curing-oven" },
  { name: "DRY PAINT BOOTH", link: "/ourCapabilities/dry-paint-booth" },
  { name: "CLEAN ROOM" }, // current page, no link
  { name: "COLD STORAGE", link: "/ourCapabilities/cold-storage" },
  { name: "3D SCANNER & 3D PRINTERS", link: "/ourCapabilities/3d-printers" },
];

const CleanRoomFacility = () => {
  return (
    <div>
      <HeroImgSection
        img={cleanRoom1}
        title="CLEAN ROOM"
        details="Maintaining purity and precision at every stage of production."
      />
      <ImageSec
        imageUrl={cleanRoom2}
        title="CLEAN ROOM"
        description="Our 1,800 sq ft Class 8-grade clean room provides a contamination-free environment for composite manufacturing."
      />
      <ImageCarousel imageList={[cleanRoom2, cleanRoom3]} description={description} />
      <SeeAlsoList title="Related Facilities" items={listItems} />
    </div>
  );
};

export default CleanRoomFacility;