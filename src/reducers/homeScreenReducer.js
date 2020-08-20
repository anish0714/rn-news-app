import {
  GET_HEADLINES,
  SET_LOADING,
  GET_SEARCH_DATA,
  LOGS_ERROR,
  GET_SOURCE_DATA,
} from '../actions/types';

const initialState = {
  newsData: null,
  loading: true,
  searchData: null,
  err: null,
  sourceData: null,
};
export const homeScreenReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HEADLINES:
      return {
        ...state,
        newsData: action.payload,
        loading: false,
      };

    case GET_SEARCH_DATA:
      return {
        ...state,
        searchData: action.payload,
        loading: false,
      };

    case GET_SOURCE_DATA:
      return {
        ...state,
        sourceData: action.payload,
        loading: false,
      };

    case LOGS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
