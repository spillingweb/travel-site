import Button from "./UI/Button";

const Footer: React.FC = () => {
  return (
    <footer>
      <p>
        Copyright &copy; 2019 Clear View Escapes. All rights reserved.{" "}
        <Button color="orange">Get in Touch</Button>
      </p>
    </footer>
  );
};

export default Footer;