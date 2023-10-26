import classes from "./NavTop.module.css";
import mail from "../Pictures/UI/Icons/mail.png";
import phone from "../Pictures/UI/Icons/phone.png";
import loc from "../Pictures/UI/Icons/location.png";
import time from "../Pictures/UI/Icons/clock.png";
import facebook from "../Pictures/UI/Icons/facebook.png";
import twitter from "../Pictures/UI/Icons/twitter.png";
import telegram from "../Pictures/UI/Icons/telegram.png";
import insta from "../Pictures/UI/Icons/insta.png";

const NavTop = (props) => {
  const page = props.page === "profile" ? classes.profile : "";
  return (
    <div className={`${classes.navTop} ${page}`}>
      <a
        className={`${classes.navTopItems} ${classes.navTopEmail}`}
        href="mailto:support@mbti.com"
        target="_blank"
        rel="noreferrer">
        <img className={classes.icons} src={mail} alt="Email" /> support@mbti.com
      </a>
      <a
        className={classes.navTopItems}
        href="tel:+36704061421"
        target="_blank"
        rel="noreferrer">
        <img className={classes.icons} src={phone} alt="phone" />
        +36704061421
      </a>
      <div className={`${classes.navTopItems} ${classes.navLoc}`}>
        <a
          className={classes.headerTags}
          href="https://goo.gl/maps/GsP7rTrEtKWFuk248"
          target="_blank"
          rel="noreferrer">
          <img
            className={`${classes.icons} ${classes.locationIcon}`}
            src={loc}
            alt="location"
          />
          Umm Hurair 2 - Dubai
        </a>
        <span className={classes.headerTags}>
          <img className={classes.timeIcon} src={time} alt="work-hours" />
          09:00 AM-18:00 PM
        </span>
      </div>
      <div className={`${classes.navTopItems} ${classes.navTopSocial}`}>
        <a
          className={classes.headerTags}
          href="https://www.google.com/"
          target="_blank"
          rel="noreferrer">
          <img className={classes.icons} src={facebook} alt="facebook" />
        </a>
        <a
          className={classes.headerTags}
          href="https://www.google.com/"
          target="_blank"
          rel="noreferrer">
          <img className={classes.icons} src={twitter} alt="twitter" />
        </a>
        <a
          className={classes.headerTags}
          href="https://www.google.com/"
          target="_blank"
          rel="noreferrer">
          <img className={classes.icons} src={telegram} alt="telegram" />
        </a>
        <a
          className={classes.headerTags}
          href="https://www.google.com/"
          target="_blank"
          rel="noreferrer">
          <img className={classes.icons} src={insta} alt="instagram" />
        </a>
      </div>
    </div>
  );
};

export default NavTop;
