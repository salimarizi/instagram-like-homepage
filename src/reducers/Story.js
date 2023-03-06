import { GET_ALL_STORIES } from "../constants";

const INIT_STATE = {
  stories_data: []
};

const feed = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_STORIES: {
      return {
        ...state,
        stories_data: action.payload,
      };
    }

    default:
      return state;
  }
};

export default feed;
