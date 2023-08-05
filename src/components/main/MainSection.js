// imports
import React from "react";

// css
import classes from "./MainSection.module.css";

const MainSection = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={classes['introduction']}>
      Mod <br />
      CoMit <br />
      Project
    </div>
  );
});

export default MainSection;
