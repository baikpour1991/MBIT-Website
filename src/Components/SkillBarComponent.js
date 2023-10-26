import React, { useEffect, useState } from "react";
import SkillBar from "./SkillBar";
import classes from "./SkillBarComponent.module.css";

const SkillBarConponent = (props) => {
  const [ratings, setRatings] = useState();
  useEffect(() => {
    setRatings(Object.entries(props.skills));
  }, [props]);
  return (
    <ul className={classes.skills}>
      {ratings &&
        ratings.map((item) => {
          return (
            <li className={classes.skill} key={item}>
              <SkillBar skill={item} />
            </li>
          );
        })}
    </ul>
  );
};

export default SkillBarConponent;
