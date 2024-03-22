import classes from "./Header.module.css";
import headerIcon from "../assets/images/icons/clear-view-escapes.svg";
import heroImg from "../assets/images/hero--large.jpg";
import { Router } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <>
      <header>
        <img src={headerIcon} />
        <a href="#">Get in Touch</a>
        <nav>
          <ul>
            <li>
              <a href="#our-beginning">Our Beginning</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
          </ul>
        </nav>
      </header>

      <div className={classes.largeHero}>
        <img src={heroImg} />
        <h1>Your clarity.</h1>
        <h2>One trip away.</h2>
        <p>We create soul restoring journeys that inspire you to be you.</p>
        <p>
          <a href="#">Get Started Today</a>
        </p>
      </div>
    </>
  );
};

export default Header;