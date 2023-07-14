import React, { useEffect, useRef, useState } from 'react';
import classes from '../css/filmsection.module.css';
import Film from './Film';

const FilmSection = (props) => {
  useEffect(() => {
    const element = sectionSize.current;
    const style = window.getComputedStyle(element);
    const size = parseInt(style.getPropertyValue('width'));
    const whiteSectionNumber = Math.floor(size / 30);

    if (whiteSectionNumber !== whiteSection) {
      setWhiteSection(whiteSectionNumber);
    }
  });

  const [whiteSection, setWhiteSection] = useState(0);

  const renderingWhiteSection = () => {
    const renderingList = [];
    for (let i = 0; i < whiteSection; i++) {
      renderingList.push(<li key={i} className={classes.whiteSection}></li>);
    }
    return <ul className={classes.border}>{renderingList}</ul>;
  };
  console.log(whiteSection);
  const sectionSize = useRef();

  return (
    <div ref={sectionSize} className={classes.filmcontainer}>
      <div className={classes.filmborder}>{renderingWhiteSection()}</div>
      <div className={classes.filmcontentContainer}>
        <Film onClick={props.onClickFilm}>Section1</Film>
        <Film onClick={props.onClickFilm}>Section2</Film>
        <Film onClick={props.onClickFilm}>Section3</Film>
        <Film onClick={props.onClickFilm}>Section4</Film>
        <Film onClick={props.onClickFilm}>Section5</Film>
        <Film onClick={props.onClickFilm}>Section6</Film>
        <Film onClick={props.onClickFilm}>Section7</Film>
        <Film onClick={props.onClickFilm}>Section8</Film>
      </div>
      <div className={classes.filmborder}>{renderingWhiteSection()}</div>
    </div>
  );
};

export default FilmSection;
