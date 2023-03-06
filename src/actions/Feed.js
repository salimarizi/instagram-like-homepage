import {
  GET_ALL_FEEDS,
  GET_SELECTED_FEED,
  FETCH_ERROR,
} from "../constants";
import axios from "../utils/Api";

export const getFeeds = () => {
  return (dispatch) => {
    return axios
      .get("feeds")
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
        dispatch({ type: GET_SELECTED_FEED, payload: data.record.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error });
      });
  };
};
