import classes from './ScrollButton.module.css';

import leftScroll from '../../assets/left-scroll.svg';
import rightScroll from '../../assets/right-scroll.svg';

const LeftScrollButton = ({ onLeftScrollButtonClick }) => {
  return (
    <img
      className={classes['button-left']}
      src={leftScroll}
      alt="LeftButton"
      onClick={onLeftScrollButtonClick}
    />
  );
};

const RightScrollButton = ({ onRightScrollButtonClick }) => {
  return (
    <img
      className={classes['button-right']}
      src={rightScroll}
      alt="RightButton"
      onClick={onRightScrollButtonClick}
    />
  );
};

export { LeftScrollButton, RightScrollButton };
