import React from "react";
import s1 from "../Pictures/UI/Services/s1.png";
import s2 from "../Pictures/UI/Services/s2.png";
import s3 from "../Pictures/UI/Services/s3.png";

import classes from "./Services.module.css";

const Services = (props) => {
  return (
    <>
      <section className={classes.servicesHeader} id="services">
        <h3 className={classes.servicesFirstTopic}>SERVICES</h3>
        <h2 className={classes.servicesTopic}>Comprehensive IT & Technology</h2>
        <h2 className={classes.servicesTopic}>Solutions Includes</h2>
      </section>
      <section className={classes.servicesHolder}>
        <article className={classes.services}>
          <img className={classes.images} src={s1} alt="Company Services" />
          <h3>Front end</h3>
          <p>
            Front-end services in our company bridge the gap between the user and the
            digital platform, ensuring a seamless, intuitive, and engaging user
            experience.
          </p>
        </article>
        <article className={classes.services}>
          <img className={classes.images} src={s2} alt="Company Services" />
          <h3>Back end</h3>
          <p>
            Our company's backend services ensure robust data processing and seamless
            integration for an exceptional user experience.
          </p>
        </article>
        <article className={classes.services}>
          <img className={classes.images} src={s3} alt="Company Services" />
          <h3>Cloud Services</h3>
          <p>
            Our company's cloud services facilitate scalable, secure data management,
            and seamless collaboration across departments.
          </p>
        </article>
      </section>
    </>
  );
};

export default Services;
