import iph from "../assets/iph14.png";
import cam from "../assets/cam.png";
import watch from "../assets/watch.png";
import air from "../assets/airpds.png";
import gw from "../assets/gwatch.png";
import flod from "../assets/zflod.png";
import buds from "../assets/bods.png";
import ipad from "../assets/ipad.png";
const products = [
  {
    id: 1,
    title: "Apple iPhone 14 Pro Max",
    price: 1399,
    oldPrice: 1499,
    image: iph,
    screen: '6.7"',
    cpu: "Apple A16 Bionic",
    camera: "48 + 12 + 12 MP",
    frontCamera: "12 MP",
    battery: "4323 mAh",
    storage: ["128GB", "256GB", "512GB", "1TB"],
  },

  {
    id: 2,
    title: "Blackmagic Pocket Cinema Camera 6K",
    price: 2535,
    oldPrice: 2799,
    image: cam,
    screen: '5" LCD',
    cpu: "Blackmagic Generation 5",
    camera: "Super 35 Sensor",
    frontCamera: "No",
    battery: "Canon LP-E6",
    storage: ["256GB", "512GB", "1TB", "2TB"],
  },

  {
    id: 3,
    title: "Apple Watch Series 9 GPS 41mm",
    price: 399,
    oldPrice: 449,
    image: watch,
    screen: '1.7" Retina',
    cpu: "Apple S9 SiP",
    camera: "No",
    frontCamera: "No",
    battery: "308 mAh",
    storage: ["32GB", "64GB", "128GB", "256GB"],
  },

  {
    id: 4,
    title: "AirPods Max Silver",
    price: 549,
    oldPrice: 599,
    image: air,
    screen: "No Display",
    cpu: "Apple H1",
    camera: "No",
    frontCamera: "No",
    battery: "20 Hours",
    storage: ["32GB", "64GB", "128GB", "256GB"],
  },

  {
    id: 5,
    title: "Samsung Galaxy Watch6 Classic",
    price: 369,
    oldPrice: 429,
    image: gw,
    screen: '1.5" AMOLED',
    cpu: "Exynos W930",
    camera: "No",
    frontCamera: "No",
    battery: "425 mAh",
    storage: ["16GB", "32GB", "64GB", "128GB"],
  },

  {
    id: 6,
    title: "Samsung Galaxy Z Fold5",
    price: 1799,
    oldPrice: 1899,
    image: flod,
    screen: '7.6" AMOLED',
    cpu: "Snapdragon 8 Gen 2",
    camera: "50 + 12 + 10 MP",
    frontCamera: "10 MP",
    battery: "4400 mAh",
    storage: ["256GB", "512GB", "1TB", "2TB"],
  },

  {
    id: 7,
    title: "Samsung Galaxy Buds FE",
    price: 99.99,
    oldPrice: 129.99,
    image: buds,
    screen: "No Display",
    cpu: "Samsung Audio Chip",
    camera: "No",
    frontCamera: "No",
    battery: "30 Hours",
    storage: ["32GB", "64GB", "128GB", "256GB"],
  },

  {
    id: 8,
    title: "Apple iPad 9 10.2 Wi-Fi",
    price: 398,
    oldPrice: 449,
    image: ipad,
    screen: '10.2" Retina',
    cpu: "Apple A13 Bionic",
    camera: "8 MP",
    frontCamera: "12 MP",
    battery: "8557 mAh",
    storage: ["64GB", "128GB", "256GB", "512GB"],
  },
];

export default products;
