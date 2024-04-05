import Button from "./UI/Button";
import Wrapper from "./UI/Wrapper";

const Footer: React.FC<{
  onBtnClick: React.MouseEventHandler<HTMLSpanElement>;
}> = ({ onBtnClick }) => {
  return (
    <footer className="site-footer">
      <Wrapper>
        <p>
          <span className="site-footer__text">
            Copyright &copy; 2019 Clear View Escapes. All rights reserved.{" "}
          </span>
            <Button onBtnClick={onBtnClick} color="orange">Get in Touch</Button>
        </p>
      </Wrapper>
    </footer>
  );
};

export default Footer;
