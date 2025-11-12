// Image mapping configuration for components
// This helps organize images and avoid repetition

export const imageMapping = {
  // Infrastructure Components
  autoclave: {
    primary: "autoclave-1.jpg",
    secondary: "autoclave-2.jpg", 
    carousel: ["autoclave-1.jpg", "autoclave-2.jpg"]
  },
  
  paintBooth: {
    primary: "PAINT BOOTH 1.jpg",
    secondary: "paint booth 2.jpg",
    carousel: ["PAINT BOOTH 1.jpg", "paint booth 2.jpg", "paint booth 3.jpg"]
  },
  
  laserMachine: {
    primary: "laser machine1 . jpg",
    secondary: "laser machine 2.jpg", 
    carousel: ["laser machine1 . jpg", "laser machine 2.jpg", "laser machine 3.JPG"]
  },
  
  coldStorage: {
    primary: "cold storage 1.JPG",
    secondary: "cold storage 2.jpg",
    carousel: ["cold storage 1.JPG", "cold storage 2.jpg", "cold storage 4.JPG"]
  },
  
  cleanRoom: {
    primary: "clean room 1.JPG",
    secondary: "clean room 2.JPG",
    carousel: ["clean room 1.JPG", "clean room 2.JPG", "clean room 3.JPG"]
  },
  
  oven: {
    primary: "curing oven 1.JPG",
    secondary: "cuirng oven 2.JPG", 
    carousel: ["curing oven 1.JPG", "cuirng oven 2.JPG", "curing oven 3.JPG"]
  },
  
  hydraulicPress: {
    primary: "hydraulic press 1.png",
    secondary: "hydraulic press 2.png",
    carousel: ["hydraulic press 1.png", "hydraulic press 2.png", "hydraulic press 3.jpg"]
  },
  
  roboticArm: {
    primary: "cnc 6 axis robotic arm 1.jpg",
    secondary: "cnc 6 axis robotic arm 2 .jpg",
    carousel: ["cnc 6 axis robotic arm 1.jpg", "cnc 6 axis robotic arm 2 .jpg"]
  },
  
  cncPattern: {
    primary: "cnc pattern machine 1.JPG",
    secondary: "cnc pattern machine 2.JPG",
    carousel: ["cnc pattern machine 1.JPG", "cnc pattern machine 2.JPG", "cnc pattern machine 3.JPG", "cnc pattern machine 4.JPG", "cnc pattern machine 5.JPG"]
  },
  
  prepegMachine: {
    primary: "cnc prepreg machine 1.JPG",
    secondary: "cnc prepreg machine 2.JPG",
    carousel: ["cnc prepreg machine 1.JPG", "cnc prepreg machine 2.JPG", "cnc prepreg machine 3.JPG", "cnc prepreg machine 4.JPG"]
  },
  
  carbonFiberWeaving: {
    primary: "carbonfibre weaving machine 1.png",
    secondary: "carbonfibre weaving machine 2.png",
    carousel: ["carbonfibre weaving machine 1.png", "carbonfibre weaving machine 2.png", "carbonfibre weaving machine 3.png"]
  },
  
  scanner3dPrint: {
    primary: "3d-scanner.jpg",
    secondary: "3d-scanner-2.jpg",
    carousel: ["3d-scanner.jpg", "3d-scanner-2.jpg", "3d-scanner-4.jpg", "scanner.JPG"]
  },

  // Manufacturing Process Components
  autoclaveCuring: {
    primary: "autoclave-curing-1.jpg",
    secondary: "autoclave-curing-2.jpg",
    carousel: ["autoclave-curing-1.jpg", "autoclave-curing-2.jpg", "autoclave-curing-3.jpg", "autoclave-curing-4.jpg"]
  },
  
  canopyProduction: {
    primary: "canopy prod 1.png",
    secondary: "canopy prod 2.png",
    carousel: ["canopy prod 1.png", "canopy prod 2.png", "canopy prod 3.png"]
  },
  
  compositeHoneycomb: {
    primary: "honeycomb bonding.jpg",
    secondary: "honeycomb bonding.jpg",
    carousel: ["honeycomb bonding.jpg"]
  },
  
  compositeMould: {
    primary: "moulds.jpg",
    secondary: "moulds1.jpg",
    carousel: ["moulds.jpg", "moulds1.jpg", "moulds2.jpg", "moulds3.jpg"]
  },
  
  compressionMolding: {
    primary: "compression moulding 1.png",
    secondary: "compression moulding 2.png",
    carousel: ["compression moulding 1.png", "compression moulding 2.png"]
  },
  
  resinInfusion: {
    primary: "resin infusion 1.png",
    secondary: "resin infusion 2.png",
    carousel: ["resin infusion 1.png", "resin infusion 2.png", "resin infusion 3.png"]
  },
  
  wetLayup: {
    primary: "wet layup 1.JPG",
    secondary: "wet layup 2.JPG",
    carousel: ["wet layup 1.JPG", "wet layup 2.JPG", "wet layup 3.JPG"]
  },

  // Homepage and General
  homepage: {
    hero: "UAV homepage .jpg",
    cncUpclose: "CNC upclose homepage.JPG",
    radome: "radome homepage.jpg",
    backgrounds: ["background 2.png", "background 3.png", "background 4.JPG", "backgorund 22.jpg", "backgorund 6.png"]
  },
  
  contact: {
    background: "contact us background.jpg"
  },
  
  logo: {
    primary: "peridot logo 1.jpg",
    secondary: "peridot logo 2.jpg"
  }
};

// Helper function to get image path
export const getImagePath = (category, type = 'primary') => {
  const mapping = imageMapping[category];
  if (!mapping) return null;
  
  const imageName = mapping[type];
  if (!imageName) return null;
  
  return `/src/assets/${imageName}`;
};

// Helper function to get carousel images
export const getCarouselImages = (category) => {
  const mapping = imageMapping[category];
  if (!mapping || !mapping.carousel) return [];
  
  return mapping.carousel.map(imageName => `/src/assets/${imageName}`);
};