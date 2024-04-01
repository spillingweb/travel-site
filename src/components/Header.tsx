import headerIcon from "../assets/images/icons/clear-view-escapes.svg";
import LargeHero from "./LargeHero";
import Navbar from "./Navbar";
import Button from "./UI/Button";
import Wrapper from "./UI/Wrapper";

const Header: React.FC = () => {
  return (
    <>
      <header className="site-header">
        <Wrapper>
          <div className="site-header__logo">
            <img src={headerIcon} />
          </div>

          <div className="site-header__menu-icon"></div>

          <div className="site-header__menu-content">
            <div className="site-header__btn-container">
              <Button>Get in Touch</Button>
            </div>
            <Navbar />
          </div>
        </Wrapper>
      </header>
      <LargeHero />
    </>
  );
};

export default Header;
