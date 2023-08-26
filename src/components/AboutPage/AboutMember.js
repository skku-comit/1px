import React from 'react';
import MemeberItem from './MemberItem';
import classes from "./AboutMember.module.css";

import image1 from "../../assets/AboutPage/about_member.png";
import image2 from "../../assets/AboutPage/about_member2.png";
import image3 from "../../assets/AboutPage/about_member3.png";
import image4 from "../../assets/AboutPage/about_member4.png";
import image5 from "../../assets/AboutPage/about_member5.png";
import image6 from "../../assets/AboutPage/about_member6.png";
import image7 from "../../assets/AboutPage/about_member7.png";

function AboutMember() {
    const members = [
        {name:"홍현기" , job:"ART DIRECTOR / DESIGNER", image: image1},
        {name: "강지원", job: "TEAM MANAGER / DESIGNER", image: image2},
        {name: "김지연", job: "EDITORIAL MANAGER / DESIGNER", image: image3},
        {name: "김동희", job: "WEB DESIGN MANAGER / DESIGNER", image: image4},
        {name: "권하은", job: "EXHIBITION MANAGER / DESIGNER", image: image5},
        {name: "류지혜", job: "DESIGNER", image: image6},
        {name: "민윤지", job: "DESIGNER", image: image7}
    ];
    return(<div className={classes.members}>
        <h1 className={classes['members-name']}> WHO WE ARE </h1>
        <p className={classes['members-description']}>성균관대학교 디자인학회 산하 ‘1Pixel(1PX)’ 은 타이포그래피와 편집 디자인, UXUI 디자인에 관심있는 학생들로 구성된 팀입니다.
        </p>
        <div className={classes.Members_members}>
            <MemeberItem name={members[0].name} job={members[0].job} image={members[0].image}/>
            <MemeberItem name={members[1].name} job={members[1].job} image={members[1].image}/>
            <MemeberItem name={members[2].name} job={members[2].job} image={members[2].image}/>
            <MemeberItem name={members[3].name} job={members[3].job} image={members[3].image}/>
            <MemeberItem name={members[4].name} job={members[4].job} image={members[4].image}/>
            <MemeberItem name={members[5].name} job={members[5].job} image={members[5].image}/>
            <MemeberItem name={members[6].name} job={members[6].job} image={members[6].image}/>
        </div>
    </div>)
}
export default AboutMember