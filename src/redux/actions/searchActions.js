import { searchTypes } from '../reducers/searchReducer';

export const loadingSearchData = () => ({
  type: searchTypes.LOADING_SEARCH_RESULTS,
});

export const successfulyLoadedSearchData = (data) => ({
  type: searchTypes.SUCCESSFULLY_LOADED_SEARCH_RESULTS,
  payload: data,
});

export const failedLoadingSearchData = (error) => ({
  type: searchTypes.FAILED_LOADING_SEARCH_RESULTS,
  error,
});
