import { searchTypes } from '../reducers/searchReducer';

export const loadingSearchData = () => ({
  type: searchTypes.LOADING_SEARCH_RESULTS,
});

export const successfulyLoadedSearchData = (data, searchedText) => ({
  type: searchTypes.SUCCESSFULLY_LOADED_SEARCH_RESULTS,
  payload: data,
  searchedText,
});

export const failedLoadingSearchData = (error) => ({
  type: searchTypes.FAILED_LOADING_SEARCH_RESULTS,
  error,
});

export const successfulyLoadedMoreSearchData = (data) => ({
  type: searchTypes.SUCCESSFULLY_LOADED_MORE_SEARCH_RESULTS,
  payload: data,
});
