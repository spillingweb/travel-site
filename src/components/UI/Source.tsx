import { imgProp } from "../../images";

const Source: React.FC<{ sourceArray: imgProp[] }> = ({ sourceArray }) => {
  
    function makeSrcSet(source: imgProp) {
    return `${source.url} ${source.width}w, ${source.urlHiDpi} ${source.width * 2}`;
  }

  return (
    sourceArray.map((source) => (
        <source key={source.name}
        sizes={source.sizes ? `${source.sizes}px` : undefined}
        srcSet={makeSrcSet(source)}
        media={`(min-width: ${source.media}px)`}
        />
    ))
  ) 
};

export default Source;
