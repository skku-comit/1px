import classes from "./ScrollButton.module.css";

const LeftScrollButton = ({ onLeftScrollButtonClick }) => {
  return (
      <img
        className={`${classes["button-img"]} ${classes["button-left"]}`}
        src="https://assets.website-files.com/60ee32414a2efcb87f4a2940/60ee32414a2efcf93a4a29b3_arrow-scroll.svg"
        alt="LeftButton"
        onClick={onLeftScrollButtonClick}
      />
  );
};

const RightScrollButton = ({ onRightScrollButtonClick }) => {
  return (
      <img
        className={classes["button-img"]}
        src="https://assets.website-files.com/60ee32414a2efcb87f4a2940/60ee32414a2efcf93a4a29b3_arrow-scroll.svg"
        alt="RightButton"
        onClick={onRightScrollButtonClick}
      />
  );
};

export { LeftScrollButton, RightScrollButton };
