import heroImg from "../assets/images/hero--large.jpg";
import Button from "./UI/Button";

const LargeHero: React.FC = () => {
  return (
    <div className="large-hero">
      <img src={heroImg} alt="Costal landscape" />
      <div className="large-hero__text-content">
        <h1 className="large-hero__title">Your clarity.</h1>
        <h2 className="large-hero__subtitle">One trip away.</h2>
        <p className="large-hero__description">
          We create soul restoring journeys that inspire you to be you.
        </p>
        <p>
          <Button color="orange" size="large">
            Get Started Today
          </Button>
        </p>
      </div>
    </div>
  );
};

export default LargeHero;
