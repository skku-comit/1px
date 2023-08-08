// imports
import { Link } from "react-router-dom";

// css
import classes from "./TopHeaderBar.module.css";

const TopHeaderBar = () => {
  return (
    <div className={classes["header"]}>
      <Link to={"/"} className={classes["link-decoration"]}>
        <div className={classes["logo-container"]}>1PX</div>
      </Link>
      <Link to={"./about"} className={classes["link-decoration"]}>
        <div className={classes["about-container"]}>About</div>
      </Link>
      <Link to={"./guest-book"} className={classes["link-decoration"]}>
        <div className={classes["guestbook-container"]}>Guest Book</div>
      </Link>
    </div>
  );
};

export default TopHeaderBar;
