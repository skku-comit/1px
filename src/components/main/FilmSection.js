import React from "react";
import classes from "./Filmsection.module.css";
import Film from "./Film";
import { ReactComponent as Filmbody } from "../../assets/images/film_body.svg";

import film1 from "../../assets/images/film1.png";
import film2 from "../../assets/images/film2.png";
import film3 from "../../assets/images/film3.png";
import film4 from "../../assets/images/film4.png";
import film5 from "../../assets/images/film5.png";
import film6 from "../../assets/images/film6.png";
import film7 from "../../assets/images/film7.png";
import { Link } from "react-router-dom";

const filmStyle = {
  width: "100%",
  height: "100%",
};

const FilmSection = React.forwardRef((props, ref) => {
  return (
    <div className={classes["filmsection-container"]}>
      <Filmbody></Filmbody>
      <div ref={ref} className={classes.filmcontentContainer}>
        <Film id="film-1" onClick={props.onClickFilm}>
          <Link to={"./iframe-page"}>
            Section1
            <img src={film1} alt="The Devil Wears Prada" style={filmStyle} />
          </Link>
        </Film>
        <Film id="film-2" onClick={props.onClickFilm}>
          Section2
          <img
            src={film2}
            alt="Threads: Our Tapestry of Love"
            style={filmStyle}
          />
        </Film>
        <Film id="film-3" onClick={props.onClickFilm}>
          Section3
          <img
            src={film3}
            alt="Everything Everywhere All at Once"
            style={filmStyle}
          />
        </Film>
        <Film id="film-4" onClick={props.onClickFilm}>
          Section4
          <img src={film4} alt="Romantic Holiday" style={filmStyle} />
        </Film>
        <Film id="film-5" onClick={props.onClickFilm}>
          Section5
          <img
            src={film5}
            alt="Everything Everywhere All at Once"
            style={filmStyle}
          />
        </Film>
        <Film id="film-6" onClick={props.onClickFilm}>
          Section6
          <img src={film6} alt="Legally Blonde" style={filmStyle} />
        </Film>
        <Film id="film-7" onClick={props.onClickFilm}>
          Section7
          <img src={film7} alt="The French Dispatch" style={filmStyle} />
        </Film>
      </div>
    </div>
  );
});

export default FilmSection;
