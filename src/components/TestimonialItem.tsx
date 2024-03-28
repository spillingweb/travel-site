const TestimonialItem: React.FC<{
  testimonial: {
    img: string;
    name: string;
    subtitle: string;
    text: string;
  };
  isLast: boolean;
}> = ({ testimonial, isLast }) => {
  return (
    <div className="row__medium-4">
      <div className={`testimonial-item ${isLast ? 'testimonial-item--last' : ''}`}>
        <div className="testimonial-item__photo">
          <img src={testimonial.img} />
        </div>
        <h3 className="testimonial-item__title">{testimonial.name}</h3>
        <h4 className="testimonial-item__subtitle">{testimonial.subtitle}</h4>
        <p>&ldquo;{testimonial.text}&rdquo;</p>
      </div>
    </div>
  );
};

export default TestimonialItem;
