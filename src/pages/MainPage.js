// imports
import { useState, useRef, useEffect } from 'react';

// components
import FilmSection from '../components/main/FilmSection';
// import MainSection from '../components/main/MainSection';
import {
  LeftScrollButton,
  RightScrollButton,
} from '../components/main/ScrollButton';

// css
import classes from './MainPage.module.css';

const MainPage = () => {
  const [currentFocusedElement, setCurrentFocusedElement] = useState(0);

  //스크롤 감지 이벤트 추가
  useEffect(() => {
    window.addEventListener('scroll', scrollGetInfoHandler);

    return () => {
      window.removeEventListener('scroll', scrollGetInfoHandler);
    };
  }, [currentFocusedElement]);

  //스크롤 이동을 위한 엘리멘트 획득 목적
  const filmSectionInfo = useRef();
  // const mainSectionInfo = useRef();
  const scrollData = useRef();

  //버튼 클릭시 왼쪽 필름으로 화면이동 이벤트
  const clickLeftScrollButtonHandler = () => {
    const filmList = [...filmSectionInfo.current.children];
    if (currentFocusedElement > 0) {
      // console.log(filmList);
      filmList[currentFocusedElement - 1].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
      });
      setCurrentFocusedElement(currentFocusedElement - 1);
    }
  };

  //버튼 클릭시 오른쪽 필름으로 화면이동 이벤트
  const clickRightScrollButtonHandler = () => {
    const filmList = [...filmSectionInfo.current.children];
    if (currentFocusedElement < 6) {
      filmList[currentFocusedElement + 1].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
      });
      setCurrentFocusedElement(currentFocusedElement + 1);
    }
  };

  //스크롤 바로 이동시에 중앙에 위치한 필름 넘버 감지
  const scrollGetInfoHandler = () => {
    const scrollX = window.scrollX;

    if (scrollX === 0) {
      setCurrentFocusedElement(0);
    }
    if (scrollX > 300 && scrollX < 1000) {
      setCurrentFocusedElement(1);
    }
    if (scrollX > 1000 && scrollX < 1700) {
      setCurrentFocusedElement(2);
    }
    if (scrollX > 1700 && scrollX < 2400) {
      setCurrentFocusedElement(3);
    }
    if (scrollX > 2400 && scrollX < 3100) {
      setCurrentFocusedElement(4);
    }
    if (scrollX > 3100 && scrollX < 3600) {
      setCurrentFocusedElement(5);
    }
    if (scrollX > 3600) {
      setCurrentFocusedElement(6);
    }
  };

  return (
    <div className={classes['body']} ref={scrollData}>
      <div className={classes['main-sector']}>
        {/* <MainSection ref={mainSectionInfo} /> */}
        <FilmSection ref={filmSectionInfo}></FilmSection>
      </div>
      <div className={classes['button-sector']}>
        <LeftScrollButton
          onLeftScrollButtonClick={clickLeftScrollButtonHandler}
        />
        <RightScrollButton
          onRightScrollButtonClick={clickRightScrollButtonHandler}
        />
      </div>
    </div>
  );
};

export default MainPage;
