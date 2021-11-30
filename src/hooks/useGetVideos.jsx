import { useEffect } from "react";
import { httpRequest } from "../apis/index.js";
import { connect, useSelector, useDispatch } from "react-redux";
import {
  getVideoActionSuccess,
  getVideoActionIdle,
  getVideoActionError,
} from "../redux/actions/videos.js";

//api cal has a CORS Policy error so i set static data when failed

const useGetVideos = (videoRef) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideoActionIdle());
    httpRequest("GET", "/fa/v1/video/video/mostViewedVideos", {}, {})
      .then(({ data, status }) => {
        dispatch(getVideoActionSuccess(data));
      })
      .catch((e) => {
        dispatch(getVideoActionError());
      });
  }, [videoRef]);
};

export { useGetVideos };
