import { NextArrow, PrevArrow } from '../components/atoms/Button';

export const carouselConfig = {
  dots: false,
  infinite: false,
  arrows: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 668,
      settings: {
        slidesToShow: 1.3,
        arrows: false,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2.3,
        arrows: false,
      },
    },
  ],
};
