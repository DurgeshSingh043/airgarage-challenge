import axios from 'axios';
import { SEARCH_API_BASE_URL } from '../constants';
import {
  failedLoadingSearchData,
  loadingSearchData,
  successfulyLoadedSearchData,
} from '../redux/actions/searchActions';

export const getSearchResults = async (dispatch, seartText) => {
  dispatch(loadingSearchData());
  try {
    const result = await axios.get(
      `${SEARCH_API_BASE_URL}/getparkingbylocation?location=${seartText}`,
    );
    dispatch(successfulyLoadedSearchData(result?.data));
  } catch (err) {
    console.error('Something went wrong due to ', err);
    dispatch(failedLoadingSearchData('Something went wrong'));
    return Promise.reject();
  }
};
