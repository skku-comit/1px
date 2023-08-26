// imports
import React from 'react';

// components
import Film from './Film';

// css
import classes from './Filmsection.module.css';

// images
import filmBody from '../../assets/newFIlm.svg';
import film2 from '../../assets/main/film2alt.svg';
import film3 from '../../assets/main/film3alt.svg';
import film4 from '../../assets/main/film4alt.svg';
import film5 from '../../assets/main/film5alt.svg';
import film1 from '../../assets/main/film1alt.svg';
import film6 from '../../assets/main/film6alt.svg';
import film7 from '../../assets/main/film7alt.svg';

const FilmSection = React.forwardRef((props, ref) => {
  return (
    <div className={classes['films-container']}>
      <img src={filmBody} alt="Film body" className={classes.filmbody} />
      <div ref={ref} className={classes['films-content']}>
        <Film
          id="0"
          address="./iframe1"
          img={film1}
          alt="The Devil Wears Prada"
          title="악마는 프라다를 입는다"
          designer="강지원"
          developer="박준서"
        ></Film>
        <Film
          id="1"
          address="./iframe2"
          img={film2}
          alt="Threads: Our Tapestry of Love"
          title="실"
          designer="권하은"
          developer="박태곤"
        ></Film>
        <Film
          id="3"
          address="./iframe3"
          img={film3}
          alt="Everything Everywhere All at Once"
          title="에브리씽 에브리웨어 올 앳 원스"
          designer="김동희"
          developer="박상혁"
        ></Film>
        <Film
          id="4"
          address="./iframe4"
          img={film4}
          alt="Romantic Holiday"
          title="로맨틱 홀리데이"
          designer="김지연"
          developer="문지웅"
        ></Film>
        <Film
          id="5"
          address="./iframe5"
          img={film5}
          alt="Everything Everywhere All at Once"
          title="에브리씽 에브리웨어 올 앳 원스"
          designer="류지혜"
          developer="이재욱"
        ></Film>
        <Film
          id="6"
          address="./iframe6"
          img={film6}
          alt="Legally Blonde"
          title="금발이 너무해"
          designer="민윤지"
          developer="박지환"
        ></Film>
        <Film
          id="7"
          address="./iframe7"
          img={film7}
          alt="The French Dispatch"
          title="프렌치 디스패치"
          designer="홍현기"
          developer="정정환"
        ></Film>
      </div>
    </div>
  );
});

export default FilmSection;
