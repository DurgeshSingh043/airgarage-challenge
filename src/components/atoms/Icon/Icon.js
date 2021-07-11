import { call, clear, search, star, starFilled } from '../../../assests';
import { ICONS } from '../../../constants/_icons';

import './icon.scss';

const getSvgIcon = (name) => {
  switch (name) {
    case ICONS.Search:
      return search;
    case ICONS.StarFilled:
      return starFilled;
    case ICONS.Star:
      return star;
    case ICONS.Call:
      return call;
    case ICONS.Clear:
      return clear;
    default:
      return null;
  }
};

const Icon = ({ name = 'user', className, isTab = false, ...other }) => {
  if (isTab) {
    const onIconClickHandler = (event) => event.preventDefault();
    return (
      <a href="/" onClick={onIconClickHandler}>
        <img
          className={`icon ${className}`}
          alt={name}
          src={getSvgIcon(name)}
          {...other}
        ></img>
      </a>
    );
  } else {
    return (
      <img
        className={`icon ${className}`}
        alt={name}
        src={getSvgIcon(name)}
        {...other}
      ></img>
    );
  }
};

export default Icon;
