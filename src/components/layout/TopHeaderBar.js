// imports
import { Link } from 'react-router-dom';

// css
import classes from './TopHeaderBar.module.css';

//img
import logo from '../../assets/images/logo.svg';

const TopHeaderBar = () => {
  return (
    <div className={classes['header']}>
      <Link to={'/'} className={classes['link-decoration']}>
        <img src={logo} alt="logo" className={classes['logo-container']}></img>
      </Link>
      <Link to={'./about'} className={classes['link-decoration']}>
        <div className={classes['header-container']}>ABOUT</div>
      </Link>
      <Link to={'./guest-book'} className={classes['link-decoration']}>
        <div className={classes['header-container']}>GUESTBOOK</div>
      </Link>
    </div>
  );
};

export default TopHeaderBar;
