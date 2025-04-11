import testFacility from "../../assets/testing.jpg";
import HeroImgSection from "../heroImgSection";
import ImageSec from "../aboutUs/imageSec";
import ImageCarousel from "../aboutUs/imageCarousel";
import SeeAlsoList from "../services/seeAlsoList";

const imageList = [testFacility, testFacility, testFacility]; // Add more images as needed
const description =
  "Our state-of-the-art test facility is designed to ensure the highest standards of quality and performance for all our products. We employ advanced testing methods to guarantee reliability and precision.";
const listItems = [
  { name: "Material testing", link: "/services/material-testing" },
  { name: "Environmental testing", link: "/services/environmental-testing" },
  { name: "Performance analysis", link: "/services/performance-analysis" },
  { name: "Durability testing", link: "/services/durability-testing" },
  { name: "Prototype validation", link: "/services/prototype-validation" },
  { name: "Advanced diagnostics", link: "/services/advanced-diagnostics" },
];

const TestFacility = () => {
  return (
    <div>
      <HeroImgSection
        img={testFacility}
        title="Test Facility"
        details="Our test facility ensures rigorous testing and quality assurance for all products."
      />
      <ImageSec
        imageUrl={testFacility}
        title="State-of-the-art Test Facility"
        description="Equipped with cutting-edge technology, our test facility guarantees thorough testing and validation for every product."
      />
      <ImageCarousel imageList={imageList} description={description} />
      <SeeAlsoList title="Explore More Services" items={listItems} />
    </div>
  );
};

export default TestFacility;