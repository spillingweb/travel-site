import heroLarge from "../assets/images/hero--large.jpg";
import heroLargeHiDpi from "../assets/images/hero--large-hi-dpi.jpg";
import heroMedium from "../assets/images/hero--medium.jpg";
import heroMediumHiDpi from "../assets/images/hero--medium-hi-dpi.jpg";
import heroSmall from "../assets/images/hero--small.jpg";
import heroSmallHiDpi from "../assets/images/hero--small-hi-dpi.jpg";
import heroSmaller from "../assets/images/hero--smaller.jpg";
import heroSmallerHiDpi from "../assets/images/hero--smaller-hi-dpi.jpg";

import Button from "./UI/Button";
import Source from "./UI/Source";
import { heroImgProps } from "../images";
import Image from "./UI/Image";
import Wrapper from "./UI/Wrapper";

const LargeHero: React.FC = () => {
  return (
    <div className="large-hero">
      <picture>
        <Source sourceArray={heroImgProps.source!} />
        <Image imgProps={heroImgProps} className="large-hero__image" />
      </picture>

      <div className="large-hero__text-content">
        <Wrapper>
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
        </Wrapper>
      </div>
    </div>
  );
};

export default LargeHero;
