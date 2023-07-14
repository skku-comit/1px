import React, { useState } from 'react';
import FilmSection from '../components/FilmSection';
import TopHeader from '../components/TopHeaderBar';
import FilmModal from '../components/FilmModal.js';
import MainSection from '../components/MainSection';

import classes from '../css/MainPage.module.css';

function MainPage(props) {
  const [clickFilm, setClickFilm] = useState(false);

  function onClickFilmSectionHandler(e) {
    setClickFilm(true);
  }

  function onClickBackdropHandler(e) {
    setClickFilm(false);
  }
  return (
    <React.Fragment>
      <TopHeader />
      <div className={classes.mainsector}>
        <MainSection />
        <FilmSection onClickFilm={onClickFilmSectionHandler}></FilmSection>
      </div>
      {clickFilm && (
        <FilmModal onClickBackdrop={onClickBackdropHandler}></FilmModal>
      )}
    </React.Fragment>
  );
}

export default MainPage;
