import member1 from "../../assets/images/team-member-1.jpg";
import member2 from "../../assets/images/team-member-2.jpg";
import member3 from "../../assets/images/team-member-3.jpg";
import member4 from "../../assets/images/team-member-4.jpg";
import member5 from "../../assets/images/team-member-5.png";
import member6 from "../../assets/images/team-member-6.png";

type Member = {
  id: number;
  name: string;
  image: any;
  comment: string;
};

export const ourTeamMembersLeft: Member[] = [
  {
    id: 1,
    name: "Stuart Witts",
    image: member1,
    comment:
      "This was the easiest and most pleasant real estate experience I’ve had. Thank you for everything!",
  },
  {
    id: 2,
    name: "Kevin Wells",
    image: member2,
    comment:
      "Ray did a fantastic job! Thanks so much for your persistence in finding “the place”.",
  },
  {
    id: 3,
    name: "Gloria Marshall",
    image: member3,
    comment:
      "I cannot say enough about your professionalism and your determination to find us a suitable piece of property.",
  },
];

export const ourTeamMembersRight: Member[] = [
  {
    id: 4,
    name: "Lisa Ann",
    image: member4,
    comment:
      "I’m so thankful that I ended up working with you. Thank you for everything, mostly your insight, patience and kindness.",
  },
  {
    id: 5,
    name: "Kristin Dekay",
    image: member5,
    comment:
      "I’m so happy I had the opportunity to work with you. I will highly recommend you to my friends.",
  },
  {
    id: 6,
    name: "Ben Davis",
    image: member6,
    comment:
      "Thank you very much for your skill, patience, and persistence.  I very much enjoyed working with you.",
  },
];
