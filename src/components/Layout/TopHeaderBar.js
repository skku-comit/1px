import {Link} from 'react-router-dom';
import Logo from '../Common/Logo';
import classes from '../../css/topheaderbar.module.css';

function TopHeaderBar(props) {
  return (
    <div className={classes.header}>
      <Link to={"/"}><Logo/></Link>
      <Link to={"/about"} className={classes["nav-container"]}>About</Link>
      <Link to={"/guest-book"} className={classes["nav-container"]}>Guest Book</Link>
    </div>
  );
}

export default TopHeaderBar;
