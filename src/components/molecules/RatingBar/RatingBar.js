import { ICONS } from '../../../constants';
import { Icon } from '../../atoms';

const RatingBar = ({ score, className, tooltip }) => (
  <div className={`rating-bar ${className}`} title={tooltip}>
    <Icon name={ICONS.StarFilled} />
    <span className="ml-1">{score}</span>
  </div>
);

export default RatingBar;
