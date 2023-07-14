import { useState } from 'react';

import FilmSection from './FilmSection';
import FilmModal from './FilmModal';
import classes from '../css/MainSection.module.css';

function MainSection(props) {
  return (
    <div className={classes.introduction}>
      <p className={classes.font}>Mod</p>
      <p>Comit</p>
      <p>Project</p>
    </div>
  );
}

export default MainSection;
