// css
import classes from './Film.module.css';

import { Link } from 'react-router-dom';
import { useState } from 'react';

const Film = (props) => {
  const [isHovered, setIsHovered] = useState(Array(7).fill(false));
  const imgHoveredHandler = (index) => {
    const newarr = Array(7).fill(false);
    newarr[index] = true;
    setIsHovered(newarr);
  };
  const imgUnHoveredHandler = () => {
    const newarr = Array(7).fill(false);
    setIsHovered(newarr);
  };

  const idNum = Number(props.id);

  return (
    <div id={props.id} className={classes['film-container']}>
      <Link
        to={props.address}
        onMouseOver={() => imgHoveredHandler(idNum)}
        onMouseOut={imgUnHoveredHandler}
      >
        <img src={props.img} alt={props.alt} className={classes['film-img']} />
        <div
          className={`${classes['film-img_hover']} ${
            isHovered[idNum] ? classes['hovered'] : ''
          }`}
        >
          <div className={classes['film_description']}>
            <p className={classes['_title']}>{props.title}</p>
            <div className={classes['credit']}>
              <p className={classes['_designer']}>
                <strong>디자인</strong> {props.designer}
              </p>
              <p className={classes['_developer']}>
                <strong>개발</strong> {props.developer}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Film;
