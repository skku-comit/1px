// imports
import { useState } from 'react';

// components
import MainSection from '../components/MainSection';

// css
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
    <>
      <div className={classes.mainsector}>
        <MainSection />
      </div>
    </>
  );
}

export default MainPage;
