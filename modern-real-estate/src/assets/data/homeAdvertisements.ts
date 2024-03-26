import icon1 from "../images/advertisement-icon-1.svg";
import icon2 from "../images/advertisement-icon-2.svg";
import icon3 from "../images/advertisement-icon-3.svg";
import icon4 from "../images/advertisement-icon-4.svg";
import icon5 from "../images/advertisement-icon-5.svg";
import icon6 from "../images/advertisement-icon-6.svg";
import icon7 from "../images/advertisement-icon-7.svg";
import icon8 from "../images/advertisement-icon-8.svg";
import icon9 from "../images/advertisement-icon-9.svg";

type HomeAdvertisement = {
  id: number;
  icon: any;
  title: string;
  description: string;
};

export const homeAdvertisements: HomeAdvertisement[] = [
  {
    id: 1,
    icon: icon1,
    title: "Size",
    description: "240 M2",
  },
  {
    id: 2,
    title: "Bathrooms",
    icon: icon2,
    description: "2x",
  },
  {
    id: 3,
    icon: icon3,
    title: "Bedrooms",
    description: "2x",
  },
  {
    id: 4,
    icon: icon4,
    title: "Pool",
    description: "Private",
  },
  {
    id: 5,
    icon: icon5,
    title: "Park",
    description: "400m",
  },
  {
    id: 6,
    icon: icon6,
    title: "Interior",
    description: "Furnished",
  },
  {
    id: 7,
    icon: icon7,
    title: "Parking",
    description: "Private",
  },
  {
    id: 8,
    icon: icon8,
    title: "Heating",
    description: "Floor",
  },
  {
    id: 9,
    icon: icon9,
    title: "Beach",
    description: "200m",
  },
];
