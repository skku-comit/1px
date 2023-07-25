import React from 'react';
import classes from './MainSection.module.css';

const MainSection = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={classes.introduction}>
      <p>Mod</p>
      <p>Comit</p>
      <p>Project</p>
    </div>
  );
});

export default MainSection;
