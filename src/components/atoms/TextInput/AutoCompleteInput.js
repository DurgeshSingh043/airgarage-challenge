import { forwardRef, useEffect, useRef } from 'react';
import { ICONS } from '../../../constants/_icons';
import useGoogleMapsApi from '../../../customeHooks/googleMapApi';
import Icon from '../Icon';

import './textInput.scss';

const AutoCompleteInput = forwardRef(
  ({ text = '', label, className, onClearHandler, ref, ...other }) => {
    const inputRef = useRef();
    const autocompleteRef = useRef();
    const googleMapsApi = useGoogleMapsApi();

    useEffect(() => {
      if (googleMapsApi) {
        autocompleteRef.current = new googleMapsApi.places.Autocomplete(
          inputRef.current,
          { types: ['(cities)'] },
        );
        autocompleteRef.current.addListener('place_changed', () => {
          const place = autocompleteRef.current.getPlace();
          // Do something with the resolved place here (ie store in redux state)
          console.log('place ', place);
        });
      }
    }, [googleMapsApi]);

    const onChange = () => {};

    return (
      <div className={`input-text ${className}`}>
        {label && <label>{label}</label>}
        <div className="input-text__area">
          <input
            ref={inputRef}
            autoComplete="off"
            value={text}
            onChange={onChange}
            {...other}
          />
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
  },
);

export default AutoCompleteInput;
