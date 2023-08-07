import React from 'react';
import AboutDescription from '../components/AboutPage/AboutDescription';
import AboutMember from '../components/AboutPage/AboutMember';
import classes from "./AboutPage.module.css";

function AboutPage() {
  return <div className={classes.body}>
    <div className={classes.description}><AboutDescription /></div>
    <div className={classes.member} ><AboutMember/></div>
  </div>;
}

export default AboutPage;
