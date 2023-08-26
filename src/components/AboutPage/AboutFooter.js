// image
import Footer from "../../assets/aboutImages/footer.png";

// css
import classes from "./AboutFooter.module.css";


const AboutFooter = () => {
  return <img src={Footer} className={classes['footer-image']} alt="footer_image" />;
};

export default AboutFooter;
