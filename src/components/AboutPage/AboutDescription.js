import React from "react";

// images
import img1 from "../../assets/aboutImages/mod_exhibition.png";
import img2 from "../../assets/aboutImages/main_poster.png";
import classes from "./AboutDescription.module.css";

function AboutDescription() {
  return (
    <div className={classes.description}>
      <div className={classes["image-container"]}>
        <img
          className={classes["description-img"]}
          src={img1}
          alt="meeting img"
        />
        <img
          className={classes["description-img"]}
          src={img2}
          alt="meeting img"
        />
      </div>

      <div className={classes["description-heading"]}>
        <p className={classes.subtitle}>
          2023 성균관대학교 디자인학회 ‘MOD’의 첫 번째 전시
        </p>
        <h1 className={classes.title}>성장무한육면각체</h1>
        <p className={classes.summary}>
          성균관대학교 디자인학회는 2023년 신설되었으며, 디자인과 학생들이 모여
          활발한 교류 환경과 디자인 역량 강화를 도모하기 위해 만들어졌습니다.
          학회 내에서 각 디자인 분야별로 팀을 구성하여 프로젝트를 진행하였고, 그
          성과를 보여주는 첫 번째 전시 ‘성장무한육면각체'가 2023년 8월 열리게
          되었습니다.
        </p>
        <div className={classes["description-content"]}>
          <p>
            타이포그래피와 편집 디자인, UXUI 디자인에 관심있는 학생들로 구성된
            <mark>‘1Pixel(1PX)’</mark> 팀은 2023년 상반기 학기 중 프로젝트를
            통해 타이포그래피 작업을 기반으로 한 영화 포스터를 제작하고 이를
            소개하는 잡지를 제작하였습니다. 이를 발전시켜 이어지는 여름 방학에
            인터렉티브 웹사이트 사이트를 구성하는 프로젝트를 진행하였고, 최종
            성과를 ‘성장무한육면각체' 전시에 보여주게 되었습니다.
          </p>
          <p>
            취향은 자아를 탐구하는 데에 있어 중요한 힌트가 됩니다. 1PX은 자신의
            취향을 연구하는 것이 자아의 정립에 도움을 주어 나아가 디자인학회에
            모인 궁극적인 목적이라고 할 수 있는 ‘나의 고유한 디자인 세계 확립’의
            토대가 될 수 있을 것임에 동의하였습니다. 영화는 창작자의 취향을
            효과적인 방법으로 표현하는 매체이며, 적어도 수용자가 영화를 보는
            동안만큼은 설득력 있는 논리와 장치로 그를 전혀 다른 세계에 몰입하게
            만듭니다. 이러한 취향을 경험하게 된 관객들은 창작자가 되어 영화를
            받아들인 각자의 문법, 즉 그의 자신의 취향에 맞추어 이를
            재생산합니다. 
          </p>
          <p>
            각자가 좋아하는 영화를 고르고 이를 표현하는 맥락에서
            보여지는 1PX 팀원들의 취향이 어떤 방식으로 재생산 될 수 있는지를
            다양한 매체 위에서 실험해 볼 수 있었던 이번 프로젝트는 팀원들의
            개성있는 작업물들을 모아볼 수 있도록 영화 필름 형태에 나열된 프리뷰
            페이지에서 시작하여, 전시회장에 마련된 화면을 통해 직접 구현된
            인터렉션을 체험해 볼 수 있습니다. 관람자와 작품의 상호작용을 통해
            관람자는 다른 세계에의 몰입을 경험할 수 있고 경험은 그를 새롭게
            구성할 것입니다. 우리의 전시가 계속하여 새로 태어나는 메시지의
            파장을 만들기를 기대합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
export default AboutDescription;
