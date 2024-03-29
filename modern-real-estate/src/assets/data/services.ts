import icon1 from "../images/service-icon-1.svg";
import icon2 from "../images/service-icon-2.svg";
import icon3 from "../images/service-icon-3.svg";
import icon4 from "../images/service-icon-4.svg";

type Service = {
  id: number;
  icon: any;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    id: 1,
    icon: icon1,
    title: "Selling",
    description: "Maximize property value with our expert sales team.",
  },
  {
    id: 2,
    icon: icon2,
    title: "Bidding",
    description: "Win your bids and build your future with us in properties.",
  },
  {
    id: 3,
    icon: icon3,
    title: "Architecture",
    description: "Turning dreams into reality through innovative design.",
  },
  {
    id: 4,
    icon: icon4,
    title: "Construction",
    description: "Building excellence, on time and within your own budget.",
  },
];
