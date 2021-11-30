import * as types from "../../constants/types.js";
export const getVideoActionSuccess = paylaod => {
  return {
    type: types.SUCCESSFUL_GET_VIDEO,
    paylaod
  };
};

export const getVideoActionIdle = () => {
  return {
    type: types.IDLE_GET_VIDEOS
  };
};

export const getVideoActionError = () => {
  return {
    type: types.ERROR_GET_VIDEO
  };
};
