import classes from './Film.module.css';

const Film = ({id, onClick, children}) => {
  return (
    <div
      id={id}
      className={classes.filmcontainer}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Film;
