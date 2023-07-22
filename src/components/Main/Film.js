import classes from './Film.module.css';

function Film(props) {
  return (
    <div
      id={props.id}
      className={classes.filmcontainer}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
}

export default Film;
