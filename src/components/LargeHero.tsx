import heroLarge from "../assets/images/hero--large.jpg";
import heroLargeHiDpi from "../assets/images/hero--large-hi-dpi.jpg";
import heroMedium from "../assets/images/hero--medium.jpg";
import heroMediumHiDpi from "../assets/images/hero--medium-hi-dpi.jpg";
import heroSmall from "../assets/images/hero--small.jpg";
import heroSmallHiDpi from "../assets/images/hero--small-hi-dpi.jpg";
import heroSmaller from "../assets/images/hero--smaller.jpg";
import heroSmallerHiDpi from "../assets/images/hero--smaller-hi-dpi.jpg";

import Button from "./UI/Button";

const LargeHero: React.FC = () => {
  return (
    <div className="large-hero">
      <picture>
        <source
          srcSet={`${heroLarge} 1920w, ${heroLargeHiDpi} 3840w`}
          media="(min-width: 1380px)"
        />
        <source
          srcSet={`${heroMedium} 1380w, ${heroMediumHiDpi} 2760w`}
          media="(min-width: 990px)"
        />
        <source
          srcSet={`${heroSmall} 990w, ${heroSmallHiDpi} 1980w`}
          media="(min-width: 640px)"
        />
        <img
          srcSet={`${heroSmaller} 640w, ${heroSmallerHiDpi} 1280w`}
          alt="Costal landscape" className="large-hero__image"
        />
      </picture>

      <div className="large-hero__text-content">
        <div className="wrapper">
          <h1 className="large-hero__title">Your clarity.</h1>
          <h2 className="large-hero__subtitle">One trip away.</h2>
          <p className="large-hero__description">
            We create soul restoring journeys that inspire you to be you.
          </p>
          <p>
            <Button color="orange" size="large">
              Get Started Today
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LargeHero;
