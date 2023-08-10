// css
import classes from './Film.module.css';

const Film = ({id, children}) => {
  return (
    <div
      id={id}
      className={classes['film-container']}
    >
      {children}
    </div>
  );
}

export default Film;
