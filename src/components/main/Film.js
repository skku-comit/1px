// css
import classes from './Film.module.css';

const Film = ({ id, children }) => {
  return (
    <div id={id} className={classes['film-container']}>
      <div className={classes['film-layer-top']}></div>
      <div className={classes['film-layer-bottom']}></div>
      {children}
    </div>
  );
};

export default Film;
