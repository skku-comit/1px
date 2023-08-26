import React from 'react';
import image from "../../assets/images/AboutPage/about_member.png";
import plus from  "../../assets/images/AboutPage/about_+.svg";
import classes from "./MemberItem.module.css";

function MemeberItem(props) {
    return(<div className={classes.Member_item}>
        <img className={classes.snowman} src={image} alt="snowman" />
        <div className={classes.nameplus}>
            <p>{props.name}</p>
            <img className={classes.plus} src={plus} alt="plus sign" />
        </div>
        <p className={classes.job}>{props.job}</p>
    </div>)
}

export default MemeberItem;