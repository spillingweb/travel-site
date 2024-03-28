import headerIcon from "../assets/images/icons/clear-view-escapes.svg";
import LargeHero from "./LargeHero";
import Navbar from "./Navbar";
import Button from "./UI/Button";

const Header: React.FC = () => {
  return (
    <>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
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
