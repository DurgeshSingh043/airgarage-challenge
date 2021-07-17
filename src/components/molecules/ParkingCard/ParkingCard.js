import { PARKING_STATUS } from '../../../constants';
import { Text, Title } from '../../atoms';
import PhoneNumber from '../PhoneNumber/PhoneNumber';
import RatingBar from '../RatingBar/RatingBar';
import './parkingCard.scss';

const ParkingCard = (props) => {
  const {
    name,
    image_url,
    is_closed,
    url,
    review_count,
    rating,
    display_phone,
    phone,
    location: { display_address },
  } = props;
  const score = ((review_count * rating) / (review_count + 1)).toFixed(1);
  return (
    <a className='parking-card' href={url} target='_blank' rel='noreferrer'>
      <div className='parking-card__image-area'>
        <img className='lazyload' data-src={image_url} alt={name} />
      </div>
      <div className='parking-card__content-area'>
        <Title
          className='parking-card__content-area__name small mb-2'
          text={name}
          component='h2'
          title={name}
        />
        <div className='parking-card__content-area__score-rating-reviews mb-2'>
          <RatingBar className='score mr-1' score={score} tooltip='Score' />
          <div className='rating-reviews'>
            <Text text={`${rating} Ratings & ${review_count} Reviews`} />
          </div>
        </div>
        <div className='parking-card__content-area__address mb-2'>
          <div className='address'>
            <span>Address:</span> {display_address.join(' ')}
          </div>
          {display_phone && <PhoneNumber className='phone' phoneNumber={display_phone} phone={phone} />}
        </div>
        <div className='parking-card__content-area__status'>
          <span className={`status ${is_closed ? 'red' : 'green'}`}>
            {is_closed ? PARKING_STATUS.close : PARKING_STATUS.open}
          </span>
          <span className='explore-more'>Explore more</span>
        </div>
      </div>
    </a>
  );
};

export default ParkingCard;
