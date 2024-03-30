import client1 from "../images/client-1.png";
import client2 from "../images/client-2.png";
import client3 from "../images/client-3.png";
import client4 from "../images/client-4.png";
import client5 from "../images/client-5.png";

type Client = {
  id: number;
  icon: any;
};

export const valuableClients: Client[] = [
  { id: 1, icon: client1 },
  { id: 2, icon: client2 },
  { id: 3, icon: client3 },
  { id: 4, icon: client4 },
  { id: 5, icon: client5 },
];
