import dribbble from "../../assets/images/dribbble.png";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import youtube from "../../assets/images/youtube.png";

type SocialMediaAccount = {
  id: number;
  image: any;
};

export const socialMediaAccounts: SocialMediaAccount[] = [
  { id: 1, image: dribbble },
  { id: 2, image: facebook },
  { id: 3, image: instagram },
  { id: 4, image: youtube },
];
