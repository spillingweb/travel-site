export interface imgProp {
  url: any;
  urlHiDpi?: any;
  width: number;
}

export interface sourceProp extends imgProp {
  name: string;
  media: number;
  sizes?: number;
}

export interface imgProps {
  alt: string;
  smaller: imgProp;
  lowRes?: imgProp;
  source?: sourceProp[];
}

// Large Hero image
import heroLarge from "./assets/images/hero--large-i.jpg";
import heroLargeHiDpi from "./assets/images/hero--large-hi-dpi-i.jpg";
import heroMedium from "./assets/images/hero--medium-i.jpg";
import heroMediumHiDpi from "./assets/images/hero--medium-hi-dpi-i.jpg";
import heroSmall from "./assets/images/hero--small-i.jpg";
import heroSmallHiDpi from "./assets/images/hero--small-hi-dpi-i.jpg";
import heroSmaller from "./assets/images/hero--smaller-i.jpg";
import heroSmallerHiDpi from "./assets/images/hero--smaller-hi-dpi-i.jpg";

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
import firstTrip from "./assets/images/first-trip-i.jpg";
import firstTripHiDpi from "./assets/images/first-trip-hi-dpi-i.jpg";
import firstTripLowRes from "./assets/images/first-trip-low-res-i.jpg";

export const firstTripProps: imgProps = {
  alt: "Couple walking down a street",

  smaller: {
    url: firstTrip,
    urlHiDpi: firstTripHiDpi,
    width: 976,
  },

  lowRes: {
    url: firstTripLowRes,
    width: 565,
  },
};

// Our Start image
import ourStart from "./assets/images/our-start-i.jpg";
import ourStartHiDpi from "./assets/images/our-start-hi-dpi-i.jpg";
import ourStartPortrait from "./assets/images/our-start-portrait-i.jpg";
import ourStartPortraitHiDpi from "./assets/images/our-start-portrait-hi-dpi-i.jpg";
import ourStartLandscape from "./assets/images/our-start-landscape-i.jpg";
import ourStartLandscapeHiDpi from "./assets/images/our-start-landscape-hi-dpi-i.jpg";

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
      sizes: 404,
      media: 1020,
    },
    {
      name: "medium",
      url: ourStartPortrait,
      urlHiDpi: ourStartPortraitHiDpi,
      width: 382,
      sizes: 320,
      media: 800,
    },
  ],
};
