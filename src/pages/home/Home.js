import React, { useCallback, useRef } from 'react';

import { Button, Icon, Title, Text, Label } from '../../components/atoms';
import { Breadcrum, CarouselCard } from '../../components/molecules';
import { ICONS } from '../../constants/_icons';
import Slider from 'react-slick';

import './home.scss';
import { carouselConfig } from '../../configs/carousel';
import { homePageData } from '../../apis/mocks/homePage';

const Home = React.memo(() => {
  const slickSliderRef = useRef(null);
  const {
    breadcrum,
    title,
    subTitle,
    description,
    carouselData,
  } = homePageData;

  const onButtonClickHandler = useCallback((name) => {
    if (name === 'left') {
      slickSliderRef?.current?.slickPrev();
    } else if (name === 'right') {
      slickSliderRef?.current?.slickNext();
    }
  }, []);

  return (
    <div className="main-content">
      <Breadcrum text={breadcrum} />
      <div className="main-content__nav">
        <Title text={title} component="h1" />
        <div className="main-content__nav__cta">
          <Label className="upper mr-2">Explore more</Label>
          <Button name="left" onClick={() => onButtonClickHandler('left')}>
            <Icon name={ICONS.ArrowLeft} />
          </Button>
          <Button
            name="right"
            className="ml-2"
            onClick={() => onButtonClickHandler('right')}
          >
            <Icon name={ICONS.ArrowRight} />
          </Button>
        </div>
      </div>
      <div className="main-content__header">
        <Text className="caption" text={subTitle} />
        <Text
          className="main-content__header__description"
          text={description}
        />
      </div>
      <div className="main-content__carousel">
        <Slider
          // ref={(sliderRef) => (slickSliderRef = sliderRef)}
          ref={slickSliderRef}
          {...carouselConfig}
        >
          {carouselData.map((item) => (
            <CarouselCard key={item.imageUrl} {...item} />
          ))}
        </Slider>
      </div>
    </div>
  );
});

export default Home;
