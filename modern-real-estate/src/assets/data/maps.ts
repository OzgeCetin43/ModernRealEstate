import map1 from "../images/map-1.jpg";
import map2 from "../images/map-2.jpg";
import map3 from "../images/map-3.jpg";
import map4 from "../images/map-4.jpg";
import map5 from "../images/map-5.jpg";
import map6 from "../images/map-6.jpg";
import map7 from "../images/map-7.jpg";
import map8 from "../images/map-8.jpg";

type Map = {
  id: number;
  image: any;
};

export const maps: Map[] = [
  { id: 1, image: map1 },
  { id: 2, image: map2 },
  { id: 3, image: map3 },
  { id: 4, image: map4 },
  { id: 5, image: map5 },
  { id: 6, image: map6 },
  { id: 7, image: map7 },
  { id: 8, image: map8 },
];
