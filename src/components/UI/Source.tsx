import { sourceProp } from "../../images";

const Source: React.FC<{ sourceArray: sourceProp[] }> = ({ sourceArray }) => {
  
    function makeSrcSet(source: sourceProp) {
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
