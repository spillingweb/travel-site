import { DUMMY_FEATURES } from "../features";
import FeatureItem from "./FeatureItem";
import starImg from "../assets/images/icons/star.svg";

const Features: React.FC = () => {
  return (
    <div id="features" className="page-section page-section--blue">
      <div className="wrapper">
        <img src={starImg} />
        <h2>Our Features</h2>

        {DUMMY_FEATURES.map((feature) => (
          <FeatureItem
            key={feature.id}
            img={feature.img}
            title={feature.title}
            text={feature.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
