// imports
import { Link, NavLink, useLocation } from 'react-router-dom';

// css
import classes from './TopHeaderBar.module.css';

//img
import logo from '../../assets/layout/logo.svg';

const TopHeaderBar = () => {
  const location = useLocation();

  const isIframe1Page = location.pathname === '/iframe1';
  const isIframe2Page = location.pathname === '/iframe2';
  const isIframe3Page = location.pathname === '/iframe3';
  const isIframe4Page = location.pathname === '/iframe4';
  const isIframe5Page = location.pathname === '/iframe5';
  const isIframe6Page = location.pathname === '/iframe6';
  const isIframe7Page = location.pathname === '/iframe7';

  const headerStyle = {
    backgroundColor: isIframe1Page
      ? 'white' // Change this to your desired style for the iframe1 page
      : isIframe2Page
      ? '' // Change this to your desired style for the iframe2 page
      : isIframe3Page
      ? 'grey' // Change this to your desired style for the iframe3 page
      : isIframe4Page
      ? 'white' // Change this to your desired style for the iframe4 page
      : isIframe5Page
      ? '#F8791D' // Change this to your desired style for the iframe5 page
      : isIframe6Page
      ? '#FCBEEA' // Change this to your desired style for the iframe6 page
      : isIframe7Page
      ? '#94E8EB'
      : 'white',
  };

  return (
    <div className={classes['header']} style={headerStyle}>
      <Link to={'/'} className={classes['link-decoration']}>
        <img src={logo} alt="logo" className={classes['logo-container']} />
      </Link>
      <NavLink
        to={'./about'}
        className={({ isActive }) =>
          isActive
            ? classes['link-decoration active']
            : classes['link-decoration']
        }
      >
        <div className={`${classes['header-container']} ${classes['about']}`}>
          ABOUT
        </div>
      </NavLink>
      <NavLink
        to={'./guest-book'}
        className={({ isActive }) =>
          isActive
            ? classes['link-decoration active']
            : classes['link-decoration']
        }
      >
        <div className={`${classes['header-container']} ${classes['guest']}`}>
          GUESTBOOK
        </div>
      </NavLink>
    </div>
  );
};

export default TopHeaderBar;
