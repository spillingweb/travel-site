import { imgProps } from "../../images";

const Image: React.FC<{ imgProps: imgProps; className?: string }> = (props) => {
  const { smaller: image, lowRes, alt } = props.imgProps;

  let srcSetString = `${image.url} ${image.width}w, ${image.urlHiDpi} ${
    image.width * 2
  }w`;

  if (lowRes) {
    srcSetString = `${lowRes.url} ${lowRes.width}w, ` + srcSetString;
  }

  return (
    <img
      srcSet={srcSetString}
      alt={alt}
      className={props.className ? props.className : undefined}
    />
  );
};

export default Image;
