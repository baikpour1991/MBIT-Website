import React from "react";
import classes from "./Footer.module.css";
import logo from "../Pictures/UI/logo2.png";
import { Link } from "react-router-dom";
import loc from "../Pictures/UI/Icons/locationb.png";
import tel from "../Pictures/UI/Icons/phoneb.png";
import mail from "../Pictures/UI/Icons/mailb.png";
import clock from "../Pictures/UI/Icons/clockb.png";

const Footer = (props) => {
  const scrollTo = props.scrollTo;
  return (
    <footer className={classes.footer}>
      <section className={`${classes.footerSec} ${classes.footerAbout}`}>
        <Link
          to="/"
          className={classes.logo}
          onClick={() =>
            setTimeout(() => {
              scrollTo("home");
            })
          }>
          <img className={classes.logoImg} src={logo} alt="logo" />
        </Link>
        <p>
          Mehrdad Bagheri Technology in Dubai specializes in innovative frontend
          solutions, offering tailored software applications and mobile apps to
          elevate businesses worldwide.
        </p>
      </section>
      <section className={`${classes.footerSec} ${classes.contactInfo}`}>
        <h3 className={classes.heading}>Contact Info</h3>
        <article>
          <img className={classes.icon} src={loc} alt="address" />
          <address>Umm Hurair 2 - Dubai</address>
        </article>
        <article>
          <img className={classes.icon} src={tel} alt="address" />
          <span>
            <a className={classes.contactLink} href="tel:+36704061421">
              (+36)704061421
            </a>
          </span>
        </article>
        <article>
          <img className={classes.icon} src={mail} alt="address" />
          <span>
            <a className={classes.contactLink} href="support@mbti.com">
              support@mbti.com
            </a>
          </span>
        </article>
        <article>
          <img className={classes.icon} src={clock} alt="address" />
          <span>Opening Hours: 09:00 - 18:00</span>
        </article>
      </section>
      <section className={`${classes.footerSec} ${classes.map}`}>
        <h3 className={classes.heading}>Our Location</h3>
        <article>
          <iframe
            className={classes.mapEmbed}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d673.6310364560935!2d19.08173536959523!3d47.51865770391426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741db8605675577%3A0xcbc0c308b68d2412!2sSz%C3%A9chenyi%20Thermal%20Bath!5e0!3m2!1sen!2shu!4v1687507034422!5m2!1sen!2shu"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Company Location"></iframe>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
