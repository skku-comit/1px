import React from "react";
import AboutDescription from "../components/AboutPage/AboutDescription";
import AboutMember from "../components/AboutPage/AboutMember";
import classes from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={classes.body}>
      <AboutDescription />
      <AboutMember />
    </div>
  );
};

export default AboutPage;
