import Profile from "./Profile";
import { useContext } from "react";
import UserContext from "../Context/UserContext";
import classes from "./TeamProfiles.module.css";
import { Link } from "react-router-dom";

const TeamProfiles = (props) => {
  const ctx = useContext(UserContext);
  return (
    <>
      {ctx.map((user) => {
        return (
          <li className={classes.items} key={user.id}>
            <Link className={classes.links} to={`/Profiles/${user.id}`}>
              <Profile
                name={`${user.name} ${user.lastName}`}
                profession={user.proffesion}
                image = {user.image}
              />
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default TeamProfiles;
