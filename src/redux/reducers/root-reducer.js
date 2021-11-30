import { combineReducers } from "redux";
//reducers
import { videoReducer } from "./video";

const reducer = combineReducers({
  video: videoReducer,
});
export default reducer;
