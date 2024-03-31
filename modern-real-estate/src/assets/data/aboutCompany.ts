import icon1 from "../images/about-icon-1.svg";
import icon2 from "../images/about-icon-2.svg";
import icon3 from "../images/about-icon-3.svg";
import icon4 from "../images/about-icon-4.svg";

type About = {
  id: number;
  icon: any;
  title: string;
};

export const aboutCompany: About[] = [
  {
    id: 1,
    icon: icon1,
    title: "Smart Home Design",
  },
  {
    id: 2,
    icon: icon2,
    title: "Beautiful Scene Around",
  },
  {
    id: 3,
    icon: icon3,
    title: "Exceptional Lifestyle",
  },
  {
    id: 4,
    icon: icon4,
    title: "Complete 24/7 Security",
  },
];
