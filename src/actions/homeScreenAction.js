import {
  GET_HEADLINES,
  SET_LOADING,
  GET_SEARCH_DATA,
  LOGS_ERROR,
  GET_SOURCE_DATA,
} from './types';

export const getHeadlines = () => async (dispatch) => {
  setLoading();
  fetch(
    'http://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=265c0a6f361f468f880f6ef912a16b30',
  )
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: GET_HEADLINES,
        payload: data.articles,
      });
    });
};

export const getSearchData = (text) => async (dispatch) => {
  setLoading();
  fetch(
    `http://newsapi.org/v2/everything?q=${text}&from=2020-07-17&sortBy=publishedAt&apiKey=265c0a6f361f468f880f6ef912a16b30`,
  )
    .then((res) => res.json())
    .then((data) => {
    
      dispatch({
        type: GET_SEARCH_DATA,
        payload: data.articles,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText,
      });
    });
};

export const getSourceData = (sourceId) => async (dispatch) => {
  try {
    setLoading();
   
    const res = await fetch(
      `http://newsapi.org/v2/top-headlines?sources=${sourceId}&apiKey=847e59bd8f874476998547a9ca76867d`,
    );
    const data = await res.json();
    dispatch({
      type: GET_SOURCE_DATA,
      payload: data.articles,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
