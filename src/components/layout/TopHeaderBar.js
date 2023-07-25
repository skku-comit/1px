import { Link } from 'react-router-dom';
import classes from './TopHeaderBar.module.css';

function TopHeaderBar(props) {
  return (
    <div className={classes.header}>
      <Link to={'/'} className={classes.linkdecoration}>
        <div className={classes['logo-container']}>
          <h1 className={classes.logo}>1PX</h1>
        </div>
      </Link>
      <Link to={'./about'} className={classes.linkdecoration}>
        <div className={classes['about-container']}>
          <p className={classes.about}>About</p>
        </div>
      </Link>
      <Link to={'./guest-book'} className={classes.linkdecoration}>
        <div className={classes['guestbook-container']}>
          <p className={classes.guestbook}>Guest Book</p>
        </div>
      </Link>
    </div>
  );
}

export default TopHeaderBar;
