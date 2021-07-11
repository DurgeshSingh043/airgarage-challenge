import { Label, Text, Title } from '../../atoms';
import './carouselCard.scss';

const CarouselCard = ({
  className,
  imageUrl,
  title,
  description,
  text,
  hoverText,
}) => {
  return (
    <div className={`carousel-card ${className}`}>
      <div className="carousel-card__image">
        <img alt={title} src={imageUrl} />
        <Label className="hover-text display" text={hoverText} />
      </div>
      <div className="carousel-card__content">
        <div className="carousel-card__content__left">
          <Title text={title} className="small" />
          <Text className="description" text={description} />
        </div>
        <div className="carousel-card__content__right">
          <Text text={text} />
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
