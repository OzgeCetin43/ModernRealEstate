import choose1 from "../../assets/images/why-choose-1.jpg";
import choose2 from "../../assets/images/why-choose-2.jpg";
import choose3 from "../../assets/images/why-choose-3.jpg";

import { Filter } from "../icons/Filter";
import { Support } from "../icons/Support";
import { Time } from "../icons/Time";

type Choose = {
  id: number;
  icon: any;
  title: string;
  image: any;
  description: string;
};

export const whyChooseUs: Choose[] = [
  {
    id: 1,
    icon: Time,
    title: "Thousands of posts every day",
    image: choose1,
    description:
      "The lists are always refreshed and updated constantly, you will never miss",
  },
  {
    id: 2,
    icon: Filter,
    title: "Smart filter",
    image: choose2,
    description: "Find the right house for you in the shortest amount of time",
  },
  {
    id: 3,
    icon: Support,
    title: "Great support",
    image: choose3,
    description: "After-sales care service, helpful advice to avoid scams",
  },
];
