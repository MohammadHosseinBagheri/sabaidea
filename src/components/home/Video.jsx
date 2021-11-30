import React from "react";
import { connect, useSelector } from "react-redux";
import { IoIosEye } from "react-icons/io";

const Video = props => {
  const { video } = props;
  return (
    <>
      <div className="d-flex flex-row justify-content-between py-2">
        <span className="home_small__card_header">
          <small className="mx-1">{video?.attributes?.visit_cnt}</small>
          <IoIosEye size={12} />
        </span>
        <small className="home_small__card_header">
          {video?.attributes?.sdate}
        </small>
      </div>
      <p className="text-right text-limitation home_p__card_title my-1">
        {video?.attributes?.title}
      </p>
    </>
  );
};
export default Video;
