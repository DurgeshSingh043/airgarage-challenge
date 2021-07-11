import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMoreResults } from '../../../apis/searchAPIs';

import { TOAST_TEXT } from '../../../configs/toast';
import { INITIAL_PARKINGS_COUNT } from '../../../constants';
import ParkingCard from '../../molecules/ParkingCard';

import './searchResults.scss';

const SearchResults = () => {
  const [dataSize, setDataSize] = useState(0);
  const [loadMoreText, setLoadMoreText] = useState('Load more');
  const dispatch = useDispatch();
  const {
    data: { total = 0, businesses = [] } = {},
    loading,
    error,
    searchedText,
  } = useSelector((state) => state?.search);

  useEffect(() => {
    if (dataSize !== businesses?.length) {
      setDataSize(businesses?.length);
      setLoadMoreText('Load more');
    }
    if (businesses?.length > 0) {
      require('lazysizes');
      require('picturefill');
    }
  }, [businesses, dataSize]);

  const onLoadMoreHandler = () => {
    searchedText &&
      loadMoreResults(
        dispatch,
        searchedText,
        dataSize + INITIAL_PARKINGS_COUNT,
      );
    setLoadMoreText('Loading...');
  };

  return (
    <div className="search-results">
      {error
        ? `${TOAST_TEXT.SEARCH_ERROR}`
        : loading
        ? 'loading...'
        : businesses?.map((item) => <ParkingCard key={item?.id} {...item} />)}
      {!error && !loading && businesses?.length > 0 && total > dataSize && (
        <span className="load-more" onClick={onLoadMoreHandler}>
          {loadMoreText}
        </span>
      )}
    </div>
  );
};

export default SearchResults;
