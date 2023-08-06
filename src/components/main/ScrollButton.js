import classes from "./ScrollButton.module.css";

const LeftScrollButton = ({ onLeftScrollButtonClick }) => {
  return (
    <div
      className={`${classes['button']} ${classes["button-left"]}`}
      onClick={onLeftScrollButtonClick}
    >
      <img
        className={classes['button-img']}
        src="https://assets.website-files.com/60ee32414a2efcb87f4a2940/60ee32414a2efcf93a4a29b3_arrow-scroll.svg"
        alt="LeftButton"
      />
    </div>
  );
};

const RightScrollButton = ({ onRightScrollButtonClick }) => {
  return (
    <div className={classes['button']} onClick={onRightScrollButtonClick}>
      <img
        className={classes['button-img']}
        src="https://assets.website-files.com/60ee32414a2efcb87f4a2940/60ee32414a2efcf93a4a29b3_arrow-scroll.svg"
        alt="RightButton"
      />
    </div>
  );
};

export { LeftScrollButton, RightScrollButton };
