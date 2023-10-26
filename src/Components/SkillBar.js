import React from "react";
import classes from "./SkillBar.module.css";

const SkillBar = (props) => {
  const [title,skillRating] = props.skill;
  return (
    <>
      <div className={classes.skillInfo}>
        <span className={classes.skillTitle}>{title}</span>
        <span className={classes.skillPercentage}>{skillRating}</span>
      </div>
      <div className={classes.skillBar}>
        <span className={classes.skillBarFill} style={{width: `${skillRating}%`}}></span>
      </div>
    </>
  );
};

export default SkillBar;