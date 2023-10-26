import React from "react";
import classes from "./About.module.css";
import aboutBackgroung from "../Pictures/UI/Background1.png";
import aboutPic from "../Pictures/UI/AboutHome.png";

const About = (props) => {
  return (
    <div className={classes.aboutHolder} id="about">
      <img src={aboutBackgroung} className={classes.aboutBackground} alt="About" />
      <section className={classes.aboutSec}>
        <article>
          <img className={classes.aboutPic} src={aboutPic} alt="About-Company" />
        </article>
        <article className={classes.aboutDetailSec}>
          <h3 className={classes.servicesFirstTopic}>ABOUT US</h3>
          <h2 className={classes.servicesSecondTopic}>
            Advancing Business Frontiers with Cutting-edge Frontend Solutions
          </h2>
          <p className={classes.servicesText}>
            Mehrdad Bagheri Technology: Your Gateway to Global Technological
            Excellence from Dubai
          </p>
          <p className={classes.servicesText}>
            Mehrdad Bagheri Technology, stationed in Dubai, is a beacon of frontend
            technological solutions. We specialize in developing robust software
            applications and mobile apps that empower businesses globally. Our
            mission transcends beyond mere service provision to building lasting
            trust with our clients. At Mehrdad Bagheri Technology, we shoulder the
            technical intricacies, enabling our clients to focus on their core
            competencies, driving them towards a trajectory of sustained success and
            growth.
          </p>
        </article>
      </section>
    </div>
  );
};

export default About;
