import { createContext } from "react";
import { data } from "../db";

const UserContext = createContext([
  {
    id: 1,
    name: "Milad ",
    lastName: "Saiedi",
    age: 1,
    proffesion: "C# Developer",
    address: "Dubai, Riaz street",
    description: `Lorem ipsum dolor sit amet `,
    biography: `Lorem ipsum dolor sit amet`,
    skills: {
      Javascript: 60,
      Html: 100,
      CSS: 75,
      React: 95,
      English: 100,
      Arabic: 30,
      German: 15,
    },
    image: "1.jpg",
  },
]);

export const UserContextProvider = (props) => {
  return <UserContext.Provider value={data}>{props.children}</UserContext.Provider>;
};

export default UserContext;
