import { IoPhonePortrait, IoHome } from "react-icons/io5";

import icon1 from "../images/choose-icon-1.png";
import icon2 from "../images/choose-icon-2.png";

type Choose = {
  id: number;
  icon: any;
  title: string;
  description: string;
  buttonIcon: any;
  buttonText: string;
};

export const choose: Choose[] = [
  {
    id: 1,
    icon: icon1,
    title: "You need a house",
    description:
      "Tell us your needs, we will give you thousands of suggestions for the dream home.",
    buttonIcon: IoPhonePortrait,
    buttonText: "Contact Seller",
  },
  {
    id: 2,
    icon: icon2,
    title: "Sell your house",
    description:
      "We will connect you to thousands of people who need to buy a home.",
    buttonIcon: IoHome,
    buttonText: "Sell Property",
  },
];
