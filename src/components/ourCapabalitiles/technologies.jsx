import HeroImgSection from "../heroImgSection";
import ImageCarousel from "../aboutUs/imageCarousel";
import design from "../../assets/design.jpg";
const Technologies = () => {
  return (
    <>
    <HeroImgSection
    img={design}
    title="Technologies"
    details="When creating our products, we strive to meet both strict security requirements and beautiful presentations."
    />
    {/* <ImageCarousel imageList={imageList} description={description} /> */}   
    </>
  );
};

export default Technologies;
