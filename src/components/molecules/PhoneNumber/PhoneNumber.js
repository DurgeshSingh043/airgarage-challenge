import { ICONS } from '../../../constants';
import { Icon } from '../../atoms';

const PhoneNumber = ({ phoneNumber, phone, className }) => (
  <a className={`phone-number ${className}`} href={`tel:${phone || phoneNumber}`}>
    <Icon name={ICONS.Call} />
    {phoneNumber}
  </a>
);

export default PhoneNumber;
