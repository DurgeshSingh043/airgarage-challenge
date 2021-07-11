import Label from '../../atoms/Label/Label';

import './breadcrum.scss';

const Breadcrum = ({ text }) => (
  <div className="breadcrum">
    <Label className="upper breadcrum__label">{text}</Label>
  </div>
);

export default Breadcrum;
