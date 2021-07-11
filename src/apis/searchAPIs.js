import axios from 'axios';
import { SEARCH_API_BASE_URL } from '../constants';
import {
  failedLoadingSearchData,
  loadingSearchData,
  successfulyLoadedMoreSearchData,
  successfulyLoadedSearchData,
} from '../redux/actions/searchActions';

const _getSearchResult = async (seartText, limit) =>
  await axios.get(
    `${SEARCH_API_BASE_URL}/getparkingbylocation?location=${seartText}&limit=${limit}`,
  );

export const getSearchResults = async (dispatch, seartText, limit = 10) => {
  dispatch(loadingSearchData());
  try {
    const result = await _getSearchResult(seartText, limit);
    dispatch(successfulyLoadedSearchData(result?.data, seartText));
  } catch (err) {
    console.error('Something went wrong due to ', err);
    dispatch(failedLoadingSearchData('Something went wrong'));
    return Promise.reject();
  }
};

export const loadMoreResults = async (dispatch, seartText, limit) => {
  try {
    const result = await _getSearchResult(seartText, limit);
    dispatch(successfulyLoadedMoreSearchData(result?.data));
  } catch (err) {
    console.error('Something went wrong due to ', err);
    dispatch(failedLoadingSearchData('Something went wrong'));
    return Promise.reject();
  }
};
