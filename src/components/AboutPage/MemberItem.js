import React from "react";
import classes from "./MemberItem.module.css";

const MemeberItem = (props) => {
  return (
    <div className={classes.Member_item}>
      <img className={classes.snowman} src={props.image} alt="member" />
      <div className={classes.nameplus}>{props.name}</div>
      <p className={classes.job}>{props.job}</p>
    </div>
  );
};

export default MemeberItem;
