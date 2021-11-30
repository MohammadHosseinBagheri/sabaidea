import { VIDEO_INITIAL_STATE } from "../../constants/initialize";
import * as types from "../../constants/types";
import { staticData } from "../../data/static-video";
export const videoReducer = (state = VIDEO_INITIAL_STATE, action) => {
  switch (action.type) {
    case types.IDLE_GET_VIDEOS:
      return { data: [], status: "loading" };
    case types.SUCCESSFUL_GET_VIDEO:
      return { data: [...action.payload], status: "success" };
    case types.ERROR_GET_VIDEO:
      return {
        data: staticData,
        status: "fail",
      };
    default:
      return state;
  }
};
