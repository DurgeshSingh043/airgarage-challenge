import { ICONS } from '../../../constants/_icons';
import Icon from '../Icon';

import './textInput.scss';

const TextInput = ({
  text = '',
  label,
  className,
  onClearHandler,
  ...other
}) => {
  const onChange = () => {};

  return (
    <div className={`input-text ${className}`}>
      {label && <label>{label}</label>}
      <div className="input-text__area">
        <input value={text} onChange={onChange} {...other} />
        {text && (
          <Icon
            name={ICONS.Clear}
            className="clear"
            onClick={() => onClearHandler?.()}
          />
        )}
      </div>
    </div>
  );
};

export default TextInput;
