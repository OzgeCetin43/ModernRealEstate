import image1 from "../images/amsterdam-1.webp";
import image2 from "../images/amsterdam-2.webp";
import image3 from "../images/florida-1.webp";
import image4 from "../images/florida-2.webp";
import image5 from "../images/ibiza-1.webp";
import image6 from "../images/ibiza-2.webp";
import image7 from "../images/ibiza-3.webp";
import image8 from "../images/rio-1.webp";
import image9 from "../images/rio-2.webp";

type Choice = {
  id: number;
  address: string;
  title: string;
  image: any;
  choice: string;
};

export const propertyChoices: Choice[] = [
  {
    id: 1,
    address: "Jordaanstraat 44, Amsterdam",
    title: "Grachten Glorie",
    image: image1,
    choice: "amsterdam",
  },
  {
    id: 2,
    address: "Sunshine Palms Boulevard 9, Florida",
    title: "Sunset Heights",
    image: image3,
    choice: "florida",
  },
  {
    id: 3,
    address: "Calle Del Mar Sereno 88, Ibiza",
    title: "Vista Verde Villas",
    image: image5,
    choice: "ibiza",
  },
  {
    id: 4,
    address: "Keizersgrachtplein 10, Amsterdam",
    title: "Metro Plaza Homes",
    image: image2,
    choice: "amsterdam",
  },
  {
    id: 5,
    address: "Calle Del Sol Radiante 99, Ibiza",
    title: "Pinnacle Lofts",
    image: image6,
    choice: "ibiza",
  },
  {
    id: 6,
    address: "Palm Breeze Lane 44, Florida",
    title: "Parkside Estates",
    image: image4,
    choice: "florida",
  },
  {
    id: 7,
    address: "Rua Das Azuis 482, Rio De Janeiro",
    title: "Emerald Enclave",
    image: image8,
    choice: "rio di janeiro",
  },
  {
    id: 8,
    address: "Playa Del Casa 42, Ibiza",
    title: "Urban Oasis",
    image: image7,
    choice: "ibiza",
  },
  {
    id: 9,
    address: "Avenida Dourada 1A, Rio De Janeiro",
    title: "Villa Flora",
    image: image9,
    choice: "rio di janeiro",
  },
];
