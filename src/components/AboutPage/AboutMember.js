import React from 'react';
import MemeberItem from './MemberItem';
import classes from "./AboutMember.module.css";

function AboutMember() {
    const members = [
        {name:"홍현기" , job:"ART DIRECTOR / DESIGNER"},
        {name: "강지원", job: "DESIGNER"},
        {name: "김지연", job: "EDITORIAL MANAGER / DESIGNER"},
        {name: "김동희", job: "DESIGNER"},
        {name: "권하은", job: "DESIGNER"},
        {name: "류지혜", job: "DESIGNER"},
        {name: "민윤지", job: "DESIGNER"}
    ];
    return(<div className={classes.Members}>
        <h1 className={classes.Members_name}> WHO WE ARE </h1>
        <p className={classes.Members_description}>성균관대학교 디자인학회 산하 ‘1Pixel(1PX)’ 은 타이포그래피와 편집 디자인, UXUI 디자인에 관심있는 학생들로 구성된 팀입니다.
        </p>
        <div className={classes.Members_members}>
            <MemeberItem name={members[0].name} job={members[0].job} />
            <MemeberItem name={members[1].name} job={members[1].job} />
            <MemeberItem name={members[2].name} job={members[2].job} />
            <MemeberItem name={members[3].name} job={members[3].job} />
            <MemeberItem name={members[4].name} job={members[4].job} />
            <MemeberItem name={members[5].name} job={members[5].job} />
            <MemeberItem name={members[6].name} job={members[6].job} />
        </div>
    </div>)
}
export default AboutMember