const FeatureItem: React.FC<{ img: string; title: string; text: string }> = (
  props
) => {
  return (
    <>
      <img src={props.img} />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </>
  );
};

export default FeatureItem;