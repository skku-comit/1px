// imports
import React,{useState} from "react";
import { Link } from "react-router-dom";

// components
import Film from "./Film";

// css
import classes from "./Filmsection.module.css";

// images
import { ReactComponent as Filmbody } from "../../assets/images/film_body.svg";
import film1 from "../../assets/images/film1alt.svg";
import film2 from "../../assets/images/film2alt.svg";
import film3 from "../../assets/images/film3alt.svg";
import film4 from "../../assets/images/film4alt.svg";
import film5 from "../../assets/images/film5alt.svg";
import film6 from "../../assets/images/film6alt.svg";
import film7 from "../../assets/images/film7alt.svg";

const FilmSection = React.forwardRef((props, ref) => {
  const [isHovered,setIsHovered] = useState(Array(7).fill(false));
  const imgHoveredHandler = (index) =>{
    const newarr = Array(7).fill(false);
    newarr[index] = true;
    setIsHovered(newarr);
  }
  const imgUnHoveredHandler = () =>{
    const newarr = Array(7).fill(false);
    setIsHovered(newarr);
  }
  
  return (
    <div className={classes["films-container"]}>
      <Filmbody />
      <div ref={ref} className={classes['films-content']}>
        <Film id="film-1">
          <Link to={"./iframe1"}
              onMouseOver={()=>imgHoveredHandler(0)}
              onMouseOut={imgUnHoveredHandler}>
            
            <img
              src={film1}
              alt="The Devil Wears Prada"
              className={classes["film-img"]}
            />
            <div className={`${classes["film-img_hover"]} ${isHovered[0] ? classes["hovered"]:""}`}>
                <div className={classes["film_description"]}>
                  <p className={classes['_title']}>악마는 프라다를 입는다</p>
                  <div className={classes['credit']}>
                    <p className={classes['_designer']}><strong>디자인</strong> 강지원</p>
                    <p className={classes['_developer']}><strong>개발</strong> 박준서</p>
                  </div>
                </div>
              </div>
          </Link>
        </Film>
        <Film id="film-2">
          <Link to={"./iframe2"}
          onMouseOver={()=>imgHoveredHandler(1)}
          onMouseOut={imgUnHoveredHandler}>
            
            <img
              src={film2}
              alt="Threads: Our Tapestry of Love"
              className={classes["film-img"]}
            />
            <div className={`${classes["film-img_hover"]} ${isHovered[1] ? classes["hovered"]:""}`}>
                <div className={classes["film_description"]}>
                  <p className={classes['_title']}>실</p>
                  <div className={classes['credit']}>
                    <p className={classes['_designer']}><strong>디자인</strong> 권하은</p>
                    <p className={classes['_developer']}><strong>개발</strong> 박태곤</p>
                  </div>
                </div>
              </div>
          </Link>
        </Film>
        <Film id="film-3">
          <Link to={"./iframe3"}
          onMouseOver={()=>imgHoveredHandler(2)}
          onMouseOut={imgUnHoveredHandler}>
            
            <img
              src={film3}
              alt="Everything Everywhere All at Once"
              className={classes["film-img"]}
            />
            <div className={`${classes["film-img_hover"]} ${isHovered[2] ? classes["hovered"]:""}`}>
                <div className={classes["film_description"]}>
                  <p className={classes['_title']}>에브리씽 에브리웨어 올 앳 원스</p>
                  <div className={classes['credit']}>
                    <p className={classes['_designer']}><strong>디자인</strong> 김동희</p>
                    <p className={classes['_developer']}><strong>개발</strong> 박상혁</p>
                  </div>
                </div>
              </div>
          </Link>
        </Film>
        <Film id="film-4">
          <Link to={"./iframe4"}
          onMouseOver={()=>imgHoveredHandler(3)}
              onMouseOut={imgUnHoveredHandler}>
            
            <img
              src={film4}
              alt="Romantic Holiday"
              className={classes["film-img"]}
            />
            <div className={`${classes["film-img_hover"]} ${isHovered[3] ? classes["hovered"]:""}`}>
                <div className={classes["film_description"]}>
                  <p className={classes['_title']}>로맨틱 홀리데이</p>
                  <div className={classes['credit']}>
                    <p className={classes['_designer']}><strong>디자인</strong> 김지연</p>
                    <p className={classes['_developer']}><strong>개발</strong> 문지웅</p>
                  </div>
                </div>
              </div>
          </Link>
        </Film>
        <Film id="film-5">
          <Link to={"./iframe5"}
          onMouseOver={()=>imgHoveredHandler(4)}
          onMouseOut={imgUnHoveredHandler}>
            
            <img
              src={film5}
              alt="Everything Everywhere All at Once"
              className={classes["film-img"]}
            />
            <div className={`${classes["film-img_hover"]} ${isHovered[4] ? classes["hovered"]:""}`}>
                <div className={classes["film_description"]}>
                  <p className={classes['_title']}>에브리씽 에브리웨어 올 앳 원스</p>
                  <div className={classes['credit']}>
                    <p className={classes['_designer']}><strong>디자인</strong> 류지혜</p>
                    <p className={classes['_developer']}><strong>개발</strong> 이재욱</p>
                  </div>
                </div>
              </div>
          </Link>
        </Film>
        <Film id="film-6">
          <Link to={"./iframe6"}
          onMouseOver={()=>imgHoveredHandler(5)}
          onMouseOut={imgUnHoveredHandler}>
            
            <img
              src={film6}
              alt="Legally Blonde"
              className={classes["film-img"]}
            />
            <div className={`${classes["film-img_hover"]} ${isHovered[5] ? classes["hovered"]:""}`}>
                <div className={classes["film_description"]}>
                  <p className={classes['_title']}>금발이 너무해</p>
                  <div className={classes['credit']}>
                    <p className={classes['_designer']}><strong>디자인</strong> 민윤지</p>
                    <p className={classes['_developer']}><strong>개발</strong> 박지환</p>
                  </div>
                </div>
              </div>
          </Link>
        </Film>
        <Film id="film-7">
          <Link to={"./iframe7"}
          onMouseOver={()=>imgHoveredHandler(6)}
          onMouseOut={imgUnHoveredHandler}>
            
            <img
              src={film7}
              alt="The French Dispatch"
              className={classes["film-img"]}
            />
            <div className={`${classes["film-img_hover"]} ${isHovered[6] ? classes["hovered"]:""}`}>
                <div className={classes["film_description"]}>
                  <p className={classes['_title']}>프렌치 디스패치</p>
                  <div className={classes['credit']}>
                    <p className={classes['_designer']}><strong>디자인</strong> 홍현기</p>
                    <p className={classes['_developer']}><strong>개발</strong> 정정환</p>
                  </div>
                </div>
              </div>
          </Link>
        </Film>
      </div>
    </div>
  );
});

export default FilmSection;
