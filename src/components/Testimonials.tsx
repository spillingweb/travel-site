import TestimonialItem from "./TestimonialItem";
import { DUMMY_TESTIMONIALS } from "../testimonials";
import commentImg from "../assets/images/icons/comment.svg";
import Wrapper from "./UI/Wrapper";
import Row from "./UI/Row";

const Testimonials: React.FC = () => {
  return (
    <div id="testimonials" className="page-section page-section--testimonials">
      <Wrapper className="wrapper--no-padding-until-medium">
        <h2 className="section-title section-title--blue">
          <img className="section-title__icon" src={commentImg} />
          Real <strong>Testimonials</strong>
        </h2>
        <Row className="row--equal-height-at-medium row--gutters-small row--t-padding generic-content-container">
          {DUMMY_TESTIMONIALS.map((item, index) => {
            
            const isLast =
              DUMMY_TESTIMONIALS.length - 1 === index ? true : false;

            return <TestimonialItem key={item.id} testimonial={item} isLast={isLast}/>;
          })}
        </Row>
      </Wrapper>
    </div>
  );
};

export default Testimonials;
