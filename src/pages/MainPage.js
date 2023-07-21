import React, { useState, useRef, useEffect } from 'react';
import FilmSection from '../components/MainPage/FilmSection';
import TopHeaderBar from '../components/Layout/TopHeaderBar';
import FilmModal from '../components/MainPage/FilmModal.js';
import MainSection from '../components/MainPage/MainSection';
import {
  LeftScrollButton,
  RightScrollButton,
} from '../components/MainPage/ScrollButton';

import classes from './MainPage.module.css';

function MainPage(props) {
  const [currentFocusedElement, setCurrentFocusedElement] = useState(0);

  //스크롤 감지 이벤트 추가
  useEffect(() => {
    window.addEventListener('scroll', scrollGetInfoHandler);

    return () => {
      window.removeEventListener('scroll', scrollGetInfoHandler);
    };
  }, [currentFocusedElement]);
  const [clickFilm, setClickFilm] = useState(false);

  //스크롤 이동을 위한 엘리멘트 획득 목적
  const filmSectionInfo = useRef();
  const mainSectionInfo = useRef();
  const scrollData = useRef();

  function onClickFilmSectionHandler(e) {
    setClickFilm(true);
  }

  function onClickBackdropHandler(e) {
    setClickFilm(false);
  }

  //버튼 클릭시 왼쪽 필름으로 화면이동 이벤트
  function clickLeftScrollButtonHandler() {
    const filmList = [
      mainSectionInfo.current,
      ...filmSectionInfo.current.children,
    ];
    if (currentFocusedElement > 0) {
      console.log(filmList);
      filmList[currentFocusedElement - 1].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
      });
      setCurrentFocusedElement(currentFocusedElement - 1);
    }
  }

  //버튼 클릭시 오른쪽 필름으로 화면이동 이벤트
  function clickRightScrollButtonHandler() {
    const filmList = [
      mainSectionInfo.current,
      ...filmSectionInfo.current.children,
    ];
    if (currentFocusedElement < 7) {
      console.log(filmList);
      filmList[currentFocusedElement + 1].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
      });
      setCurrentFocusedElement(currentFocusedElement + 1);
    }
  }

  //스크롤 바로 이동시에 중앙에 위치한 필름 넘버 감지
  function scrollGetInfoHandler() {
    const scrollX = window.scrollX;
    console.log(scrollX);

    if (scrollX === 0) {
      console.log(0);
      setCurrentFocusedElement(0);
    }
    if (scrollX > 700 && scrollX < 1000) {
      console.log(1);
      setCurrentFocusedElement(1);
    }
    if (scrollX > 1300 && scrollX < 1500) {
      setCurrentFocusedElement(2);
    }
    if (scrollX > 2100 && scrollX < 2400) {
      setCurrentFocusedElement(3);
    }
    if (scrollX > 2700 && scrollX < 3000) {
      setCurrentFocusedElement(4);
    }
    if (scrollX > 3500 && scrollX < 3800) {
      setCurrentFocusedElement(5);
    }
    if (scrollX > 4100 && scrollX < 4400) {
      setCurrentFocusedElement(6);
    }
    if (scrollX > 4700) {
      setCurrentFocusedElement(7);
    }
  }

  return (
    <div className={classes.body} ref={scrollData}>
      <TopHeaderBar />
      <div className={classes['main-sector']}>
        <MainSection ref={mainSectionInfo} />
        <FilmSection
          ref={filmSectionInfo}
          onClickFilm={onClickFilmSectionHandler}
        ></FilmSection>
      </div>
      {clickFilm && (
        <FilmModal onClickBackdrop={onClickBackdropHandler}></FilmModal>
      )}
      <div className={classes['button-sector']}>
        <LeftScrollButton onClick={clickLeftScrollButtonHandler} />
        <RightScrollButton onClick={clickRightScrollButtonHandler} />
      </div>
    </div>
  );
}

export default MainPage;
