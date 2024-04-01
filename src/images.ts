export interface imgProp {
  name?: string;
  url: any;
  urlHiDpi?: any;
  width: number;
  sizes?: string;
  media?: number;
}

export interface imgProps {
  alt: string;
  smaller: imgProp;
  lowRes?: imgProp;
  source?: imgProp[];
}

// Large Hero image
import heroLarge from "./assets/images/hero--large.jpg";
import heroLargeHiDpi from "./assets/images/hero--large-hi-dpi.jpg";
import heroMedium from "./assets/images/hero--medium.jpg";
import heroMediumHiDpi from "./assets/images/hero--medium-hi-dpi.jpg";
import heroSmall from "./assets/images/hero--small.jpg";
import heroSmallHiDpi from "./assets/images/hero--small-hi-dpi.jpg";
import heroSmaller from "./assets/images/hero--smaller.jpg";
import heroSmallerHiDpi from "./assets/images/hero--smaller-hi-dpi.jpg";

export const heroImgProps: imgProps = {
  alt: "Costal landscape",

  smaller: {
    url: heroSmaller,
    urlHiDpi: heroSmallerHiDpi,
    width: 640,
  },

  source: [
    {
      name: "large",
      url: heroLarge,
      urlHiDpi: heroLargeHiDpi,
      width: 1920,
      media: 1380,
    },
    {
      name: "medium",
      url: heroMedium,
      urlHiDpi: heroMediumHiDpi,
      width: 1380,
      media: 990,
    },
    {
      name: "small",
      url: heroSmall,
      urlHiDpi: heroSmallHiDpi,
      width: 990,
      media: 640,
    },
  ],
};

// First trip image
import firstTrip from "./assets/images/first-trip.jpg";
import firstTripHiDpi from "./assets/images/first-trip-hi-dpi.jpg";
import firstTripLowRes from "./assets/images/first-trip-low-res.jpg";
const coupleWidth = 976;

export const firstTripProps: imgProps = {
  alt: "Couple walking down a street",

  smaller: {
    url: firstTrip,
    urlHiDpi: firstTripHiDpi,
    width: coupleWidth,
    sizes: `(min-width: ${coupleWidth}px) ${coupleWidth}px, 100vw`,
  },

  lowRes: {
    url: firstTripLowRes,
    width: 565,
  },
};

// Our Start image
import ourStart from "./assets/images/our-start.jpg";
import ourStartHiDpi from "./assets/images/our-start-hi-dpi.jpg";
import ourStartPortrait from "./assets/images/our-start-portrait.jpg";
import ourStartPortraitHiDpi from "./assets/images/our-start-portrait-hi-dpi.jpg";
import ourStartLandscape from "./assets/images/our-start-landscape.jpg";
import ourStartLandscapeHiDpi from "./assets/images/our-start-landscape-hi-dpi.jpg";

export const ourStartProps: imgProps = {
  alt: "Our founder, Jane Doe",

  smaller: {
    url: ourStartLandscape,
    urlHiDpi: ourStartLandscapeHiDpi,
    width: 800,
  },

  source: [
    {
      name: "large",
      url: ourStart,
      urlHiDpi: ourStartHiDpi,
      width: 404,
      sizes: "404px",
      media: 1020,
    },
    {
      name: "medium",
      url: ourStartPortrait,
      urlHiDpi: ourStartPortraitHiDpi,
      width: 382,
      sizes: "320px",
      media: 800,
    },
  ],
};

// Testimonials
import janeImg from "./assets/images/testimonial-jane.jpg";
import janeImgHiDpi from "./assets/images/testimonial-jane-hi-dpi.jpg";
import johnImg from "./assets/images/testimonial-john.jpg";
import johnImgHiDpi from "./assets/images/testimonial-john-hi-dpi.jpg";
import catImg from "./assets/images/testimonial-cat.jpg";
import catImgHiDpi from "./assets/images/testimonial-cat-hi-dpi.jpg";

const testWidth = 160;

export const testJaneProps: imgProps = {
  alt: "Jane Doe",
  smaller: {
    url: janeImg,
    urlHiDpi: janeImgHiDpi,
    width: testWidth,
    sizes: `${testWidth}px`,
  },
};

export const testJohnProps: imgProps = {
  alt: "John Smith",
  smaller: {
    url: johnImg,
    urlHiDpi: johnImgHiDpi,
    width: testWidth,
    sizes: `${testWidth}px`,
  },
};

export const testCatProps: imgProps = {
  alt: "Cat  McKitty",
  smaller: {
    url: catImg,
    urlHiDpi: catImgHiDpi,
    width: testWidth,
    sizes: `${testWidth}px`,
  },
};
