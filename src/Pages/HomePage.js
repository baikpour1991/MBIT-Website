import React, { useLayoutEffect } from "react";
import Header from "../Components/Header";
import Services from "../Components/Services";
import About from "../Components/About";
import Team from "../Components/Team";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const HomePage = (props) => {
  const scrollTo = props.scrollTo;
  useLayoutEffect(() => {
    if (props.profiles) {
      scrollTo("profiles");
    }
  }, [scrollTo, props.profiles]);
  return (
    <>
      <Header scrollTo={props.scrollTo} />
      <Services />
      <About />
      <Team />
      <Contact />
      <Footer scrollTo={props.scrollTo} />
    </>
  );
};

export default HomePage;
