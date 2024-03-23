const TestimonialItem: React.FC<{
  img: string;
  name: string;
  subtitle: string;
  text: string;
}> = (props) => {
  return (
    <>
      <img src={props.img} />
      <h3>{props.name}</h3>
      <h3>{props.subtitle}</h3>
      <p>&ldquo;{props.text}&rdquo;</p>
    </>
  );
};

export default TestimonialItem;
