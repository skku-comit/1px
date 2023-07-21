import React from 'react';
import classes from './Filmsection.module.css';
import Film from './Film';
import { ReactComponent as Filmbody } from '../../assets/images/film_body.svg';

const FilmSection = React.forwardRef((props, ref) => {
  return (
    <div className={classes['filmsection-container']}>
      <Filmbody></Filmbody>

      <div ref={ref} className={classes.filmcontentContainer}>
        <Film id="film-1" onClick={props.onClickFilm}>
          Section1
        </Film>
        <Film id="film-2" onClick={props.onClickFilm}>
          Section2
        </Film>
        <Film id="film-3" onClick={props.onClickFilm}>
          Section3
        </Film>
        <Film id="film-4" onClick={props.onClickFilm}>
          Section4
        </Film>
        <Film id="film-5" onClick={props.onClickFilm}>
          Section5
        </Film>
        <Film id="film-6" onClick={props.onClickFilm}>
          Section6
        </Film>
        <Film id="film-7" onClick={props.onClickFilm}>
          Section7
        </Film>
      </div>
    </div>
  );
});

export default FilmSection;
