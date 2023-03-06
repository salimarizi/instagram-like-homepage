import { GET_ALL_FEEDS, GET_SELECTED_FEED } from "../constants";

const INIT_STATE = {
  feeds_data: [],
  feed_data: {
    id: 0,
    user: {
      id: 0,
      username: "",
      profile_picture: "",
      full_name: "",
    },
    images: [],
  },
};

const feed = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_FEEDS: {
      return {
        ...state,
        feeds_data: action.payload,
      };
    }

    case GET_SELECTED_FEED: {
      return {
        ...state,
        feed_data: action.payload,
      };
    }

    default:
      return state;
  }
};

export default feed;
