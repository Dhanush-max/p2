import ResinStorageImage from "../../assets/resin.jpg";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

const imageList = [ResinStorageImage, ResinStorageImage, ResinStorageImage]; // Add more images as needed
const description =
  "Our resin kitten facility is designed to deliver exceptional quality and precision for all resin-based projects. We ensure durability and reliability in every product.";
const listItems = [
  { name: "Resin casting", link: "/services/resin-casting" },
  { name: "Custom resin designs", link: "/services/custom-resin-designs" },
  { name: "Resin prototyping", link: "/services/resin-prototyping" },
  { name: "Resin finishing", link: "/services/resin-finishing" },
  { name: "Resin mold production", link: "/services/resin-mold-production" },
  { name: "Advanced resin tooling", link: "/services/advanced-resin-tooling" },
];

const ResinStorage = () => {
  return (
    <div>
      <HeroImgSection
        img={ResinStorageImage}
        title="Resin Kitten"
        details="Our resin kitten facility ensures top-notch quality and precision for all resin-based projects."
      />
      <ImageSec
        imageUrl={ResinStorageImage}
        title="Cutting-edge Resin Kitten Facility"
        description="Equipped with advanced technology, our resin kitten facility guarantees exceptional results for every project."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="Explore More" items={listItems} />
    </div>
  );
};

export default ResinStorage;