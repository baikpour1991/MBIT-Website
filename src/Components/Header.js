import React from "react";
import Nav from "./Nav";
import classes from "./Header.module.css";
import Home from "../Pictures/UI/Home.jpg";
import NavTop from "./NavTop";

const Header = (props) => {
  return (
    <header className={classes.header} id="home">
      <div className={classes.navBar}>
        <NavTop />
        <Nav scrollTo={props.scrollTo} page={props.page} />
      </div>
      <img className={classes.headerImage} src={Home} alt="Header company" />
      <article className={classes.slogan}>
        <h6>TECHNOLOGY & CREATIVITY</h6>
        <h1>PREMIER TECH & SOFTWARE</h1>
        <h4>SOLUTIONS PROVIDER</h4>
      </article>
    </header>
  );
};

export default Header;
