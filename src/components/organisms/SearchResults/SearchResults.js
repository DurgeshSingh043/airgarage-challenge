import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMoreResults } from '../../../apis/searchAPIs';

import { TOAST_TEXT } from '../../../configs/toast';
import ParkingCard from '../../molecules/ParkingCard';

import './searchResults.scss';

const SearchResults = () => {
  const [dataSize, setDataSize] = useState(0);
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
    }
  }, [businesses, dataSize]);

  const onLoadMoreHandler = () => {
    searchedText && loadMoreResults(dispatch, searchedText, dataSize + 10);
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
          load more
        </span>
      )}
    </div>
  );
};

export default SearchResults;
