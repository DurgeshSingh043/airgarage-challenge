import './button.scss';

const Button = ({ text, children, className, ...other }) => (
  <button className={`button ${className}`} {...other}>
    {text || children}
  </button>
);

export default Button;
