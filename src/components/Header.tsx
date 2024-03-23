import headerIcon from "../assets/images/icons/clear-view-escapes.svg";
import heroImg from "../assets/images/hero--large.jpg";
import Navbar from "./Navbar";

const Header: React.FC = () => {
  return (
    <>
      <header>
        <img src={headerIcon} />
        <a href="#">Get in Touch</a>
        <Navbar />
      </header>

      <div className="large-hero">
        <img src={heroImg} alt="Costal landscape" />
        <div className="large-hero__text-content">
          <h1>Your clarity.</h1>
          <h2>One trip away.</h2>
          <p>We create soul restoring journeys that inspire you to be you.</p>
          <p>
            <a href="#">Get Started Today</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
