import './title.scss';

const Title = ({ text, className, component = 'p', ...others }) => {
  const CustomTag = component;
  return (
    <CustomTag className={`title ${className}`} {...others}>
      {text}
    </CustomTag>
  );
};

export default Title;
