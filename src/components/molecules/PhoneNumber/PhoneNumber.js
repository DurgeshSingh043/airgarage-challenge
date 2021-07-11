import { ICONS } from '../../../constants';
import { Icon } from '../../atoms';

const PhoneNumber = ({ phoneNumber, className }) => (
  <a className={`phone-number ${className}`} href={`tel:${phoneNumber}`}>
    <Icon name={ICONS.Call} />
    {phoneNumber}
  </a>
);

export default PhoneNumber;
