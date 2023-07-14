import React, { useRef } from 'react';
import classes from '../css/film.module.css';

function Film(props) {
  return (
    <div className={classes.filmcontainer} onClick={props.onClick}>
      {props.children}
    </div>
  );
}

export default Film;
