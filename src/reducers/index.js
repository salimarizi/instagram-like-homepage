import { combineReducers } from "redux";

import FeedReducer from "./Feed";
import StoryReducer from "./Story";

const reducer = combineReducers({
  FeedReducer,
  StoryReducer
});

export default reducer;
