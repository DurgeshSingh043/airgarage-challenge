import './label.scss';

const Label = ({ text, children, className }) => (
  <label className={`label ${className}`}>{text || children}</label>
);

export default Label;
