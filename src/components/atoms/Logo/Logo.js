import { LOGO_IMAGE } from '../../../constants';

const Logo = () => {
  return (
    <a href="/" alt="Logo">
      <img src={LOGO_IMAGE} alt="air-garage-logo" width="138" />
    </a>
  );
};

export default Logo;
