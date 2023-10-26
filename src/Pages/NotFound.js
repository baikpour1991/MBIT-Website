import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import classes from "./NotFound.module.css";
import errorIcon from "./../Pictures/UI/Icons/er404.png";

const NotFound = (props) => {
  return (
    <>
      <Header scrollTo={props.scrollTo} page={"notFound"} />
      <div className={classes.error}>
        <h2>Wrong URL</h2>
        <img
          src={errorIcon}
          className={classes.errorIcon}
          alt="Wrong Url - 404 Error"
        />
        <p className={classes.errorType}>Error 404</p>
        <p>The page was not found</p>
      </div>
      <Footer scrollTo={props.scrollTo} />
    </>
  );
};

export default NotFound;
