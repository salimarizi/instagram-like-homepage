import {
  GET_ALL_STORIES,
  FETCH_ERROR,
} from "../constants";
import axios from "../utils/Api";

export const getStories = () => {
  return (dispatch) => {
    return axios
      .get("stories")
      .then(({ data }) => {
        dispatch({ type: GET_ALL_STORIES, payload: data.record.data.stories });
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error });
      });
  };
};
