import { searchResults } from '../../../apis/mocks/searchResults';
import { ICONS } from '../../../constants';
import { Icon, Title, Text } from '../../atoms';

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
    location: { display_address },
  } = props;
  const score = ((review_count * rating) / (review_count + 1)).toFixed(1);
  return (
    <a className="parking-card" href={url} target="_blank" rel="noreferrer">
      <div className="parking-card__image-area">
        <img src={image_url} alt={name} />
      </div>
      <div className="parking-card__content-area">
        <Title
          className="parking-card__content-area__name small mb-2"
          text={name}
          component="h2"
          title={name}
        />
        <div className="parking-card__content-area__score-rating-reviews mb-2">
          <div className="score mr-1" title="Score">
            <Icon name={ICONS.StarFilled} />
            <span className="ml-1">{score}</span>
          </div>
          <div className="rating-reviews">
            <Text text={`${rating} Ratings & ${review_count} Reviews`} />
          </div>
        </div>
        <div className="parking-card__content-area__address mb-2">
          <div className="address">
            <span>Address:</span> {display_address.join(' ')}
          </div>
          {display_phone && (
            <a className="phone" href={`tel:${display_phone}`}>
              <Icon name={ICONS.Call} />
              {display_phone}
            </a>
          )}
        </div>
        <div className="parking-card__content-area__status">
          <span className={`status ${is_closed ? 'red' : 'green'}`}>
            {is_closed ? 'Closed' : 'Opened'}{' '}
          </span>
          <span className="explore-more">Explore more</span>
        </div>
      </div>
    </a>
  );
};

export default ParkingCard;
