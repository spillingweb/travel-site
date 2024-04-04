import { DUMMY_FEATURES } from "../features";
import FeatureItem from "./FeatureItem";
import starImg from "../assets/images/icons/star.svg";
import Row from "./UI/Row";

const Features: React.FC = () => {
  return (
    <section id="features" className="page-section page-section--blue">
      <div className="wrapper">
        <h2 className="section-title">
          <img src={starImg} className="section-title__icon" />
          Our <strong>Features</strong>
        </h2>

        <Row className="row--gutters-large generic-content-container">
          {DUMMY_FEATURES.map((feature) => (
            <FeatureItem key={feature.id} feature={feature} />
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Features;
