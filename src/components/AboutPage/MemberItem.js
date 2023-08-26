import React from "react";
import classes from "./MemberItem.module.css";

const MemeberItem = (props) => {
  return (
    <div className={classes.Member_item}>
      <div className={classes.snowman}>
        <img src={props.image} alt="member" />
      </div>
      <div className={classes.nameplus}>{props.name}</div>
      <p className={classes.job}>{props.job}</p>
    </div>
  );
};

export default MemeberItem;
