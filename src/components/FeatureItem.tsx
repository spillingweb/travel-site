const FeatureItem: React.FC<{
  feature: { img: any; text: string; title: string };
}> = ({ feature }) => {
  return (
    <div className="feature-item">
      <img className="feature-item__icon" src={feature.img} />
      <h3 className="feature-item__title">{feature.title}</h3>
      <p>{feature.text}</p>
    </div>
  );
};

export default FeatureItem;
