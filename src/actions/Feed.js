import {
  GET_ALL_FEEDS,
  GET_SELECTED_FEED,
  FETCH_ERROR,
} from "../constants";
import axios from "../utils/Api";

export const getFeeds = (search = "") => {
  return (dispatch) => {
    return axios
      .get("feeds", { params: { q: search } })
      .then(({ data }) => {
        dispatch({ type: GET_ALL_FEEDS, payload: data.record.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error });
      });
  };
};

export const getSelectedFeed = (feedId) => {
  return (dispatch) => {
    return axios
      .get(`feeds/${feedId}`)
      .then(({ data }) => {
        if (data) dispatch({ type: GET_SELECTED_FEED, payload: data.data });
        else dispatch({ type: FETCH_ERROR, payload: data.error });
      })
      .catch((error) => {
        throw error;
      });
  };
};
