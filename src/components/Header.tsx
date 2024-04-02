import { useState } from "react";
import headerIcon from "../assets/images/icons/clear-view-escapes.svg";
import LargeHero from "./LargeHero";
import Navbar from "./Navbar";
import Button from "./UI/Button";
import Wrapper from "./UI/Wrapper";

const Header: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  
  function handleToggleMenu() {
    setMenuVisible((prevState) => !prevState);
  }

  let siteHeaderClasses = "site-header";
  let menuContentClasses = "site-header__menu-content";

  if (menuVisible) {
    siteHeaderClasses += " site-header--is-expanded"
    menuContentClasses += " site-header__menu-content--is-visible";
  }

  return (
    <>
      <header className={siteHeaderClasses}>
        <Wrapper>
          <div className="site-header__logo">
            <img src={headerIcon} />
          </div>

          <div
            className="site-header__menu-icon"
            onClick={handleToggleMenu}
          ></div>

          <div className={menuContentClasses}>
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
