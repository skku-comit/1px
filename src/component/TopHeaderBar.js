import React from 'react';
import Logo from './Logo';
import GuestBook from './GuestBook';
import About from './About';
import classes from '../css/topheaderbar.module.css';

function TopHeaderBar(props) {
  return (
    <div className={classes.header}>
      <Logo></Logo>
      <About></About>
      <GuestBook></GuestBook>
    </div>
  );
}

export default TopHeaderBar;
