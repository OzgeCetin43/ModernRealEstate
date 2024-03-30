import property1 from "../images/property-1.jpg";
import property2 from "../images/property-2.jpg";
import property3 from "../images/property-3.jpg";
import property4 from "../images/property-4.jpg";
import property5 from "../images/property-5.jpg";
import property6 from "../images/property-6.jpg";
import property7 from "../images/property-7.jpg";
import property8 from "../images/property-8.jpg";

type Property = {
  id: number;
  title: string;
  image: any;
  bedroom: number;
  bathroom: number;
  price: number;
  address: string;
  latitude: number;
  longitude: number;
  badge?: string;
};

export const listingProperty: Property[] = [
  {
    id: 1,
    title: "COVA Home Reality",
    image: property1,
    bedroom: 2,
    bathroom: 1,
    price: 710.68,
    address: "456 Park Avenue, London",
    latitude: 51.5074,
    longitude: -0.1278,
    badge: "New",
  },
  {
    id: 2,
    title: "Exit Reality",
    image: property2,
    bedroom: 3,
    bathroom: 2,
    price: 630.44,
    address: "789 Oxford Street, London",
    latitude: 52.4862,
    longitude: -1.8904,
    badge: "New",
  },
  {
    id: 3,
    title: "The Real Estate Group",
    image: property3,
    bedroom: 1,
    bathroom: 1,
    price: 475.22,
    address: "101 Baker Street, London",
    latitude: 53.4808,
    longitude: -2.2426,
  },
  {
    id: 4,
    title: "757 Reality",
    image: property4,
    bedroom: 2,
    bathroom: 1,
    price: 576.28,
    address: "234 Kingsway, London,",
    latitude: 53.8008,
    longitude: -1.5491,
  },
  {
    id: 5,
    title: "Beach Pros Reality Inc.",
    image: property5,
    bedroom: 3,
    bathroom: 2,
    price: 473.85,
    address: "567 Victoria Road, London",
    latitude: 53.4084,
    longitude: -2.9916,
  },
  {
    id: 6,
    title: "Keller Williams Elite Town Center",
    image: property6,
    bedroom: 1,
    bathroom: 1,
    price: 105.55,
    address: "890 Regent Street, London",
    latitude: 54.9783,
    longitude: -1.6174,
    badge: "New",
  },
  {
    id: 7,
    title: "All Pros Real Estate",
    image: property7,
    bedroom: 2,
    bathroom: 1,
    price: 739.65,
    address: "112 Piccadilly, London",
    latitude: 53.3811,
    longitude: -1.4701,
  },
  {
    id: 8,
    title: "FIT Reality",
    image: property8,
    bedroom: 3,
    bathroom: 2,
    price: 1500,
    address: "8765 Main High Street, London",
    latitude: 51.4545,
    longitude: -2.5879,
  },
];
