import TestimonialItem from "./TestimonialItem";
import { DUMMY_TESTIMONIALS } from "../testimonials";
import commentImg from "../assets/images/icons/comment.svg";

const Testimonials: React.FC = () => {
  return (
    <div id="testimonials">
      <img src={commentImg} />
      <h2>Real Testimonials</h2>
      {DUMMY_TESTIMONIALS.map((item) => (
        <TestimonialItem
          key={item.id}
          img={item.img}
          name={item.name}
          subtitle={item.subtitle}
          text={item.text}
        />
      ))}
    </div>
  );
};

export default Testimonials;