import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { getSearchResults } from '../../../apis/searchAPIs';
import { useToast, TOAST_TEXT } from '../../../configs/toast';
import { debounce } from '../../../utility/helper';
import { Button, TextInput } from '../../atoms';

import './searchBox.scss';

const SearchBox = ({ className }) => {
  const [address, setAddress] = useState('');
  const dispatch = useDispatch();
  const { addErrorToast } = useToast();

  const onTextChangeHandler = (event) => {
    const { value } = event?.target;
    if (address !== value) {
      setAddress(value);
    }
  };

  const onKeyPressHandler = (event) => {
    if (event?.key === 'Enter') {
      onSearchHandler();
    }
  };

  const onSearchHandler = debounce(() => {
    if (address?.length >= 3) {
      getSearchResults(dispatch, address).catch(() => {
        addErrorToast(TOAST_TEXT.SEARCH_ERROR);
      });
      clearSearchText();
    } else if (address?.length <= 3) {
      addErrorToast(TOAST_TEXT.SEARCH_MIN_LENGTH);
    } else {
      addErrorToast(TOAST_TEXT.SEARCH_TEXT);
    }
  });

  const clearSearchText = () => setAddress('');

  return (
    <div className={`search-box mb-1 pb-3 ${className}`}>
      <TextInput
        className="search-box__address-input"
        {...{
          text: address,
          label: 'Location',
          placeholder: 'Search address...',
          onChange: onTextChangeHandler,
          onKeyPress: onKeyPressHandler,
          onClearHandler: clearSearchText,
        }}
      />
      <Button
        className="ml-3 search-box__search-button"
        {...{
          text: 'Search',
          onClick: onSearchHandler,
        }}
      />
    </div>
  );
};

export default SearchBox;
