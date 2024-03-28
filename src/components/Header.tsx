import headerIcon from "../assets/images/icons/clear-view-escapes.svg";
import LargeHero from "./LargeHero";
import Navbar from "./Navbar";
import Button from "./UI/Button";

const Header: React.FC = () => {
  return (
    <>
      <header>
        <img src={headerIcon} />
        <Button>Get in Touch</Button>
        <Navbar />
      </header>
      <LargeHero />
    </>
  );
};

export default Header;
