// components
import FilmContainer from './FilmContainer';

// css
import classes from '../css/MainSection.module.css';

function MainSection(props) {
  return (
    <div className={classes.maincontainer}>
      <div className={classes.introduction}>
        <p>Mod</p>
        <p>Comit</p>
        <p>Project</p>
      </div>
      <FilmContainer/>
    </div>
  );
}

export default MainSection;
