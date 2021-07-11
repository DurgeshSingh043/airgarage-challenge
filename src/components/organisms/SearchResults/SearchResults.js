import { useSelector } from 'react-redux';
import { TOAST_TEXT } from '../../../configs/toast';

import ParkingCard from '../../molecules/ParkingCard';

const SearchResults = () => {
  const {
    data: { total = 0, businesses = [] } = {},
    loading,
    error,
  } = useSelector((state) => state?.search);
  return (
    <div className="search-results">
      {error
        ? `${TOAST_TEXT.SEARCH_ERROR}`
        : loading
        ? 'loading...'
        : businesses?.map((item) => <ParkingCard key={item?.id} {...item} />)}
    </div>
  );
};

export default SearchResults;
