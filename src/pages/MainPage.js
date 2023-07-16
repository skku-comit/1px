import React, { useState } from 'react';
import TopHeader from '../components/TopHeaderBar';
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
      </div>
    </React.Fragment>
  );
}

export default MainPage;
