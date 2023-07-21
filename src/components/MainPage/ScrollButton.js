import classes from './ScrollButton.module.css';

function LeftScrollButton(props) {
  return (
    <div
      className={`${classes.button} ${classes['button-left']}`}
      onClick={props.onClick}
    >
      <img
        className={classes.buttonImg}
        src="https://assets.website-files.com/60ee32414a2efcb87f4a2940/60ee32414a2efcf93a4a29b3_arrow-scroll.svg"
        alt="LeftButton"
      />
    </div>
  );
}

function RightScrollButton(props) {
  return (
    <div className={classes.button} onClick={props.onClick}>
      <img
        className={classes.buttonImg}
        src="https://assets.website-files.com/60ee32414a2efcb87f4a2940/60ee32414a2efcf93a4a29b3_arrow-scroll.svg"
        alt="RightButton"
      />
    </div>
  );
}

export { LeftScrollButton, RightScrollButton };
