import React, { useState } from 'react';
import FilmSection from '../component/FilmSection';
import TopHeader from '../component/TopHeaderBar';
import FilmModal from '../component/FilmModal.js';
import MainSection from '../component/MainSection';

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
