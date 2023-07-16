import classes from '../css/MainSection.module.css';
import FilmContainer from './FilmContainer';

function MainSection(props) {
  return (
    <div className={classes.maincontainer}>
      <div className={classes.introduction}>
        <p className={classes.font}>Mod</p>
        <p>Comit</p>
        <p>Project</p>
      </div>
      <FilmContainer/>
    </div>
  );
}

export default MainSection;
