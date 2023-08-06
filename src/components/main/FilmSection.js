// imports
import React from "react";
import { Link } from "react-router-dom";

// components
import Film from "./Film";

// css
import classes from "./Filmsection.module.css";

// images
import { ReactComponent as Filmbody } from "../../assets/images/film_body.svg";
import film1 from "../../assets/images/film1.png";
import film2 from "../../assets/images/film2.png";
import film3 from "../../assets/images/film3.png";
import film4 from "../../assets/images/film4.png";
import film5 from "../../assets/images/film5.png";
import film6 from "../../assets/images/film6.png";
import film7 from "../../assets/images/film7.png";

const FilmSection = React.forwardRef((ref) => {



  return (
    <div className={classes["films-container"]}>
      <Filmbody />
      <div ref={ref} className={classes['films-content']}>
        <Film id="film-1">
          <Link to={"./iframe1"}>
            Section1
            <img
              src={film1}
              alt="The Devil Wears Prada"
              className={classes["film-img"]}
            />
          </Link>
        </Film>
        <Film id="film-2">
          <Link to={"./iframe2"}>
            Section2
            <img
              src={film2}
              alt="Threads: Our Tapestry of Love"
              className={classes["film-img"]}
            />
          </Link>
        </Film>
        <Film id="film-3">
          <Link to={"./iframe3"}>
            Section3
            <img
              src={film3}
              alt="Everything Everywhere All at Once"
              className={classes["film-img"]}
            />
          </Link>
        </Film>
        <Film id="film-4">
          <Link to={"./iframe4"}>
            Section4
            <img
              src={film4}
              alt="Romantic Holiday"
              className={classes["film-img"]}
            />
          </Link>
        </Film>
        <Film id="film-5">
          <Link to={"./iframe5"}>
            Section5
            <img
              src={film5}
              alt="Everything Everywhere All at Once"
              className={classes["film-img"]}
            />
          </Link>
        </Film>
        <Film id="film-6">
          <Link to={"./iframe6"}>
            Section6
            <img
              src={film6}
              alt="Legally Blonde"
              className={classes["film-img"]}
            />
          </Link>
        </Film>
        <Film id="film-7">
          <Link to={"./iframe7"}>
            Section7
            <img
              src={film7}
              alt="The French Dispatch"
              className={classes["film-img"]}
            />
          </Link>
        </Film>
      </div>
    </div>
  );
});

export default FilmSection;
