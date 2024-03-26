import south from "../images/south-plan.jpg";
import north from "../images/north-plan.jpg";
import west from "../images/west-plan.png";
import east from "../images/east-plan.jpg";
import southHero from "../images/home-plan-hero-south.jpg";
import northHero from "../images/home-plan-hero-north.jpg";
import westHero from "../images/home-plan-hero-west.jpg";
import eastHero from "../images/home-plan-hero-east.jpg";

type HomePlan = {
  id: number;
  title: string;
  totalArea: number;
  room: number;
  bath: number;
  bed: number;
  plan: any;
  hero: any;
};

export const homePlans: HomePlan[] = [
  {
    id: 1,
    title: "south",
    totalArea: 560,
    room: 5,
    bath: 3,
    bed: 2,
    plan: south,
    hero: southHero,
  },
  {
    id: 2,
    title: "north",
    totalArea: 445,
    room: 2,
    bath: 1,
    bed: 2,
    plan: north,
    hero: northHero,
  },
  {
    id: 3,
    title: "west",
    totalArea: 1050,
    room: 4,
    bath: 2,
    bed: 3,
    plan: west,
    hero: westHero,
  },
  {
    id: 4,
    title: "east",
    totalArea: 400,
    room: 1,
    bath: 1,
    bed: 1,
    plan: east,
    hero: eastHero,
  },
];
