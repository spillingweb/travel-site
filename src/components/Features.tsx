import { DUMMY_FEATURES } from "../features";
import FeatureItem from "./FeatureItem";
import starImg from "../assets/images/icons/star.svg";

const Features: React.FC = () => {
  return (
    <div id="features">
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
  );
};

export default Features;
