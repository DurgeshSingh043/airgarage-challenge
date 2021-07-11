import { useState } from 'react';
import { ICONS } from '../../../constants/_icons';
import { Button, Icon, Logo } from '../../atoms';
import './header.scss';

const Header = () => {
  const [activeNav, setActiveNav] = useState('nav1');

  const navClickHandler = (event) => {
    event.preventDefault();
    const name = event?.target?.getAttribute('name');
    name && setActiveNav(name);
  };
  return (
    <div className="header" onClick={navClickHandler}>
      <Logo className="header__logo" />
      <div className="header__search-box"></div>
    </div>
  );
};

export default Header;
