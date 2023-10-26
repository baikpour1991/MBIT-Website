import React, { useContext, useEffect, useRef, useState } from "react";
import { useReducer } from "react";
import classes from "./Team.module.css";
import TeamProfiles from "./TeamProfiles";
import UserContext from "../Context/UserContext";

const Team = (props) => {
  const ctx = useContext(UserContext);
  const [viewPortWidth, setViewPortWidth] = useState(window.innerWidth);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setViewPortWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const sliderWidth =
    viewPortWidth > 575 ? Math.ceil(ctx.length / 3) * 100 : ctx.length * 100;
  const sliderReducer = (state, action) => {
    const newPosition = state.position + action.position;
    if (action.type === "left" || action.type === "right") {
      if (newPosition < 0 && newPosition > -sliderWidth) {
        return { position: state.position + action.position };
      } else {
        return { position: 0 };
      }
    }
    return { position: state.position };
  };
  const [sliderState, dispatchSlider] = useReducer(sliderReducer, {
    position: 0,
  });

  const sliderBottonHandler = (event) => {
    const dataName = event.target.getAttribute("data-name");
    if (dataName === "left") {
      dispatchSlider({ type: "left", position: 100 });
    } else if (dataName === "right") {
      dispatchSlider({ type: "right", position: -100 });
    }
  };

  useEffect(() => {
    const element = document.getElementById("profiles");
    const handleTouchStart = (event) => {
      touchStartX.current = event.touches[0].clientX;
    };
    const handleTouchEnd = (event) => {
      touchEndX.current = event.changedTouches[0].clientX;
      handleGesture();
    };
    element.addEventListener("touchstart", handleTouchStart);
    element.addEventListener("touchend", handleTouchEnd);
    return () => {
      element.removeEventListener("touchstart", handleTouchStart);
      element.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);
  const handleGesture = () => {
    const difference = touchEndX.current - touchStartX.current;
    if (difference > 0) {
      dispatchSlider({ type: "left", position: 100 });
    } else if (difference < 0) {
      dispatchSlider({ type: "right", position: -100 });
    }
  };

  return (
    <section className={classes.teamSec} id="profiles">
      <article>
        <h3 className={classes.teamHeader}>TEAM</h3>
        <h2 className={classes.teamHeader2}>Expert IT Consultants</h2>
      </article>
      <article className={classes.teamSlider}>
        <ul
          className={classes.teamSliedrContainer}
          style={{ left: `${sliderState.position}%`, width: `${sliderWidth}%` }}>
          <TeamProfiles />
        </ul>
        <div
          id="sliderLeftButt"
          className={`${classes.galBtn} ${classes.sliderLeftButt}`}
          data-name={"left"}
          onClick={sliderBottonHandler}></div>
        <div
          id="sliderRghtButt"
          className={`${classes.galBtn} ${classes.sliderrightButt}`}
          data-name={"right"}
          onClick={sliderBottonHandler}></div>
      </article>
    </section>
  );
};

export default Team;
