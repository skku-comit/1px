// css
import './NavigationBar.css';

const NavigationBar = () => {
  return(
    <div className="navigation-bar">
      <div className="navigation-tab">
        <a href="/">About</a>
      </div>
      <div className="navigation-tab">
        <a href="/">GUEST BOOK</a>
      </div>
      <div className="navigation-tab">
        <a href="/">CONTACT US</a>
      </div>
    </div>
  )
}

export default NavigationBar;