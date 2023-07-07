// css
import './NavigationBar.css';

const NavigationBar = () => {
  return(
    <div className="navigation-bar">
      <div className="navigation-tab">
        <a href="/">Home</a>
      </div>
      <div className="navigation-tab">
        <a href="/">About</a>
      </div>
      <div className="navigation-tab">
        <a href="/">Visit</a>
      </div>
      <div className="navigation-tab">
        <a href="/">?</a>
      </div>
    </div>
  )
}

export default NavigationBar;