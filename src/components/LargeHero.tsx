import Button from "./UI/Button";
import Source from "./UI/Source";
import { heroImgProps } from "../images";
import Image from "./UI/Image";
import Wrapper from "./UI/Wrapper";
import { useEffect, useRef } from "react";

const LargeHero: React.FC<{ onScrollChange: Function; onBtnClick: React.MouseEventHandler<HTMLButtonElement> }> = ({
  onScrollChange,
  onBtnClick
}) => {
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = domRef.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => onScrollChange(!entry.isIntersecting));
      },
      { threshold: 0.8 }
    );
    observer.observe(current);

    return () => observer.unobserve(current);
  }, []);

  return (
    <div ref={domRef} className="large-hero">
      <picture className="large-hero__image">
        <Source sourceArray={heroImgProps.source!} />
        <Image imgProps={heroImgProps} />
      </picture>

      <div className="large-hero__text-content">
        <Wrapper>
          <h1 className="large-hero__title">Your clarity.</h1>
          <h2 className="large-hero__subtitle">One trip away.</h2>
          <p className="large-hero__description">
            We create soul restoring journeys that inspire you to be you.
          </p>
          <p>
            <Button onBtnClick={onBtnClick} color="orange" size="large">
              Get Started Today
            </Button>
          </p>
        </Wrapper>
      </div>
    </div>
  );
};

export default LargeHero;
