const initialState = {
  loading: false,
  data: {},
  error: '',
  searchedText: '',
};

export const searchTypes = {
  LOADING_SEARCH_RESULTS: 'LOADING_SEARCH_RESULTS',
  SUCCESSFULLY_LOADED_SEARCH_RESULTS: 'SUCCESSFULLY_LOADED_SEARCH_RESULTS',
  FAILED_LOADING_SEARCH_RESULTS: 'SUCCESSFULLY_LOADED_SEARCH_RESULTS',
  SUCCESSFULLY_LOADED_MORE_SEARCH_RESULTS:
    'SUCCESSFULLY_LOADED_MORE_SEARCH_RESULTS',
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case searchTypes.LOADING_SEARCH_RESULTS:
      return { ...state, loading: true, searchedText: '' };
    case searchTypes.SUCCESSFULLY_LOADED_SEARCH_RESULTS:
      return {
        ...state,
        loading: false,
        searchedText: action.searchedText,
        data: action.payload,
      };
    case searchTypes.FAILED_LOADING_SEARCH_RESULTS:
      return {
        ...state,
        loading: false,
        searchedText: '',
        data: [],
        error: action.error,
      };
    case searchTypes.SUCCESSFULLY_LOADED_MORE_SEARCH_RESULTS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
