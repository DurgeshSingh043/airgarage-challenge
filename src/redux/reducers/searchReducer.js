const initialState = {
  loading: false,
  data: {},
  error: '',
};

export const searchTypes = {
  LOADING_SEARCH_RESULTS: 'LOADING_SEARCH_RESULTS',
  SUCCESSFULLY_LOADED_SEARCH_RESULTS: 'SUCCESSFULLY_LOADED_SEARCH_RESULTS',
  FAILED_LOADING_SEARCH_RESULTS: 'SUCCESSFULLY_LOADED_SEARCH_RESULTS',
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case searchTypes.LOADING_SEARCH_RESULTS:
      return { ...state, loading: true };
    case searchTypes.SUCCESSFULLY_LOADED_SEARCH_RESULTS:
      return { ...state, loading: false, data: action.payload };
    case searchTypes.FAILED_LOADING_SEARCH_RESULTS:
      return { ...state, loading: false, data: [], error: action.error };
    default:
      return state;
  }
};

export default searchReducer;
