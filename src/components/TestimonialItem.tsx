import { imgProps } from "../images";
import FadeInSection from "./UI/FadeInSection";
import Image from "./UI/Image";

const TestimonialItem: React.FC<{
  testimonial: {
    img: imgProps;
    name: string;
    subtitle: string;
    text: string;
  };
  isLast: boolean;
}> = ({ testimonial, isLast }) => {
  return (
      <FadeInSection className="row__large-4" threshold={0.5}>
        <div
          className={`testimonial-item ${
            isLast ? "testimonial-item--last" : ""
          }`}
        >
          <div className="testimonial-item__photo">
            <Image imgProps={testimonial.img} />
          </div>
          <h3 className="testimonial-item__title">{testimonial.name}</h3>
          <h4 className="testimonial-item__subtitle">{testimonial.subtitle}</h4>
          <p>&ldquo;{testimonial.text}&rdquo;</p>
        </div>
      </FadeInSection>
  );
};

export default TestimonialItem;
