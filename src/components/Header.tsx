import { useState } from "react";
import headerIcon from "../assets/images/icons/clear-view-escapes.svg";
import LargeHero from "./LargeHero";
import Navbar from "./Navbar";
import Button from "./UI/Button";
import Wrapper from "./UI/Wrapper";

const Header: React.FC<{visibleSection: string}> = ({visibleSection}) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [dark, setDark] = useState(false);

  function handleToggleMenu() {
    setMenuVisible((prevState) => !prevState);
  }

  let siteHeaderClasses = `site-header ${
    dark === true ? "site-header--dark" : ""
  }`;
  let menuIconClasses = "site-header__menu-icon";
  let menuContentClasses = "site-header__menu-content";

  if (menuVisible) {
    siteHeaderClasses += " site-header--is-expanded";
    menuIconClasses += " site-header__menu-icon--close-x";
    menuContentClasses += " site-header__menu-content--is-visible";
  }

  return (
    <>
      <header className={siteHeaderClasses}>
        <Wrapper>
          <div className="site-header__logo">
            <img src={headerIcon} />
          </div>

          <div className={menuIconClasses} onClick={handleToggleMenu}>
            <div className="site-header__menu-icon__middle"></div>
          </div>

          <div className={menuContentClasses}>
            <div className="site-header__btn-container">
              <Button>Get in Touch</Button>
            </div>
            <Navbar visibleSection={visibleSection} />
          </div>
        </Wrapper>
      </header>
      <LargeHero onScrollChange={setDark} />
    </>
  );
};

export default Header;
