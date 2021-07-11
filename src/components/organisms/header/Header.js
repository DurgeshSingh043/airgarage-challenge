import { Logo } from '../../atoms';
import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <Logo className="header__logo" />
      <h1>Find parking</h1>
    </div>
  );
};

export default Header;
