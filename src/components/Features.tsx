import { DUMMY_FEATURES } from "../features";
import FeatureItem from "./FeatureItem";
import starImg from "../assets/images/icons/star.svg";
import Row from "./UI/Row";

const Features: React.FC = () => {
  return (
    <div id="features" className="page-section page-section--blue">
      <div className="wrapper">
        <h2 className="section-title">
          <img src={starImg} className="section-title__icon" />
          Our <strong>Features</strong>
        </h2>

        <Row className="row--gutters-large generic-content-container">
          <div className="row__medium-6">
            <FeatureItem
              key={DUMMY_FEATURES[0].id}
              feature={DUMMY_FEATURES[0]}
            />
            <FeatureItem
              key={DUMMY_FEATURES[1].id}
              feature={DUMMY_FEATURES[1]}
            />
          </div>
          <div className="row__medium-6">
            <FeatureItem
              key={DUMMY_FEATURES[2].id}
              feature={DUMMY_FEATURES[2]}
            />
            <FeatureItem
              key={DUMMY_FEATURES[3].id}
              feature={DUMMY_FEATURES[3]}
            />
          </div>
        </Row>
      </div>
    </div>
  );
};

export default Features;
