// imports
import React from 'react';

// css
import classes from './MainSection.module.css';

import logo from '../../assets/Intro.svg';
import subIntro from '../../assets/subIntro.svg';
import arrow from '../../assets/arrow.svg';

const MainSection = React.forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className={classes['introduction']}>
        <img src={logo} alt="logo" className={classes.logo} />
      </div>
      <img src={subIntro} alt="sub" className={classes.sub}></img>
      <img src={arrow} alt="arrow" className={classes.arrow}></img>
    </>
  );
});

export default MainSection;
