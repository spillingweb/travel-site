import { useEffect, useRef, useState } from "react";

const FadeInSection: React.FC<{
  children: any;
  threshold: number;
  className?: string;
}> = ({ children, className, threshold }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  const classes = `reveal-item ${isVisible ? "reveal-item--is-visible" : ""} ${
    className ? className : ""
  }`;

  useEffect(() => {
    const current = domRef.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(entry.isIntersecting);
          }
        });
      },
      {
        threshold: threshold,
      }
    );
    observer.observe(current);

    return () => observer.unobserve(current);
  }, []);

  return (
    <div className={classes} ref={domRef}>
      {children}
    </div>
  );
};

export default FadeInSection;
