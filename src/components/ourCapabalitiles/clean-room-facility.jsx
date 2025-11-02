import fallbackImg from "../../assets/fallback.jpg";
let cleanRoomFacility, cleanRoomFacility1, cleanRoomFacility2;
try {
  cleanRoomFacility = require("../../assets/cleanroom.jpg");
} catch (e) {
  cleanRoomFacility = fallbackImg;
}
try {
  cleanRoomFacility1 = require("../../assets/cleanroom1.jpg");
} catch (e) {
  cleanRoomFacility1 = fallbackImg;
}
try {
  cleanRoomFacility2 = require("../../assets/cleanroom2.jpg");
} catch (e) {
  cleanRoomFacility2 = fallbackImg;
}

import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

const imageList = [cleanRoomFacility1, cleanRoomFacility2, cleanRoomFacility];
const description =
  "Supported by an ante room (2–4 °C), it ensures optimal temperature and particulate control, enabling high-quality production for aerospace, defence, and medical-grade assemblies.";
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
        img={cleanRoomFacility1}
        title="CLEAN ROOM"
        details="Maintaining purity and precision at every stage of production."
      />
      <ImageSec
        imageUrl={cleanRoomFacility}
        title="CLEAN ROOM"
        description="Our 1,800 sq ft Class 8-grade clean room provides a contamination-free environment for composite manufacturing."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="Related Facilities" items={listItems} />
    </div>
  );
};

export default CleanRoomFacility;