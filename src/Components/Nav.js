import React, { useEffect, useRef, useState } from "react";
import classes from "./Nav.module.css";
import logo1 from "../Pictures/UI/logo1.png";
import logo2 from "../Pictures/UI/logo2.png";
import logoIcon from "../Pictures/UI/logoR.png";
import { Link, NavLink } from "react-router-dom";

const Nav = (props) => {
  const [fixedNav, setFixedNav] = useState(false);
  const [logo, setLogo] = useState(logo1);
  const [navState, setNavState] = useState(false);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const profilesRef = useRef(null);
  const contactRef = useRef(null);
  const [rotation, setRotation] = useState(true);
  const [rotationAngle, setRotationAngle] = useState(0);
  const logoClass = `${classes.logo} ${rotation ? `${classes.rotation}` : ""}`;

  const menuClass = navState ? classes.menuShow : "";
  const scrollTo = props.scrollTo;

  useEffect(() => {
    const handleScroll = (event) => {
      const windowScroll = window.scrollY;

      if (windowScroll >= 150) {
        setFixedNav(true);
        setLogo(logo2);
        setRotation(false);
        setRotationAngle(windowScroll / 5);
      } else if (windowScroll < 150) {
        setFixedNav(false);
        setLogo(logo1);
        setRotation(true);
      }

      if (props.page !== "profile" && props.page !== "notFound") {
        const elemPos = [
          document.getElementById("services").offsetTop - 25,
          document.getElementById("about").offsetTop - 25,
          document.getElementById("profiles").offsetTop - 25,
          document.getElementById("contact").offsetTop - 25,
        ];
        if (windowScroll > elemPos[0] && windowScroll < elemPos[1] && servicesRef) {
          servicesRef.current.classList.add(classes.selectedNav);
        } else {
          servicesRef.current.classList.remove(classes.selectedNav);
        }
        if (windowScroll > elemPos[1] && windowScroll < elemPos[2] && aboutRef) {
          aboutRef.current.classList.add(classes.selectedNav);
        } else {
          aboutRef.current.classList.remove(classes.selectedNav);
        }
        if (windowScroll > elemPos[2] && windowScroll < elemPos[3] && profilesRef) {
          profilesRef.current.classList.add(classes.selectedNav);
        } else {
          profilesRef.current.classList.remove(classes.selectedNav);
        }
        if (windowScroll > elemPos[3] && contactRef) {
          contactRef.current.classList.add(classes.selectedNav);
        } else {
          contactRef.current.classList.remove(classes.selectedNav);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [props.page]);

  const page = props.page === "profile" ? classes.profile : "";
  const fixed = fixedNav ? classes.fixed : "";
  const overLayHidden = navState ? "" : classes.overLayHidden;
  return (
    <>
      <nav className={`${classes.nav} ${fixed} ${page}`}>
        <Link
          to="/"
          className={classes.home}
          onClick={() =>
            setTimeout(() => {
              scrollTo("home");
              setNavState(false);
            })
          }>
          <div className={classes.logos}>
            <img
              className={logoClass}
              src={logoIcon}
              alt="company logo"
              style={{ transform: `rotate(${rotationAngle}deg)` }}
            />
            <img src={logo} alt="company logo" />
          </div>
        </Link>
        <ul className={`${classes.navMenu} ${menuClass}`}>
          <li className={classes.navItems}>
            <NavLink
              to="/"
              onClick={() => {
                setTimeout(() => {
                  scrollTo("home");
                  setNavState(false);
                });
              }}>
              Home
            </NavLink>
          </li>
          <li className={classes.navItems}>
            <NavLink
              ref={aboutRef}
              id="aboutNav"
              to="/"
              onClick={() => {
                setTimeout(() => {
                  scrollTo("about");
                  setNavState(false);
                });
              }}>
              About
            </NavLink>
          </li>
          <li className={classes.navItems}>
            <NavLink
              ref={servicesRef}
              id="servicesNav"
              to="/"
              onClick={() => {
                setTimeout(() => {
                  scrollTo("services");
                  setNavState(false);
                });
              }}>
              Services
            </NavLink>
          </li>
          <li className={classes.navItems}>
            <NavLink
              ref={profilesRef}
              id="profilesNav"
              to="/"
              onClick={() => {
                setTimeout(() => {
                  scrollTo("profiles");
                  setNavState(false);
                }, 300);
              }}>
              Profiles
            </NavLink>
          </li>
          <li className={classes.navItems}>
            <NavLink
              ref={contactRef}
              id="contactNav"
              to="/"
              onClick={() => {
                setTimeout(() => {
                  scrollTo("contact");
                  setNavState(false);
                });
              }}>
              Contact
            </NavLink>
          </li>
        </ul>
        <div
          className={classes.navButton}
          onClick={() => {
            setNavState(!navState);
          }}></div>
        <div
          className={`${classes.overLay} ${overLayHidden}`}
          onClick={() => {
            setNavState(false);
          }}></div>
      </nav>
    </>
  );
};

export default Nav;
