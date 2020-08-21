import {
  GET_HEADLINES,
  SET_LOADING,
  GET_SEARCH_DATA,
  LOGS_ERROR,
  GET_SOURCE_DATA,
} from './types';

import {API_KEY, CATEGORY, COUNTRY_CODE} from '../config';

export const getHeadlines = () => async (dispatch) => {
  setLoading();
  fetch(
    `http://newsapi.org/v2/top-headlines?country=${COUNTRY_CODE}&category=${CATEGORY}&apiKey=${API_KEY}`,
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
  dispatch(setLoading());

  fetch(
    `http://newsapi.org/v2/everything?q=${text}&from=2020-07-17&sortBy=publishedAt&apiKey=${API_KEY}`,
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
    dispatch(setLoading());

    const res = await fetch(
      `http://newsapi.org/v2/top-headlines?sources=${sourceId}&apiKey=${API_KEY}`,
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
