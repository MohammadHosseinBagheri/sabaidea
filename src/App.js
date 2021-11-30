import React, { useRef } from "react";
import Header from "./components/common/Header.jsx";
import Sidebar from "./components/home/Sidebar.jsx";
import Video from "./components/home/Video.jsx";
import { useGetVideos } from "./hooks/useGetVideos";
import { useObserver } from "./hooks/useObserver";
import { useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
const App = (props) => {
  //get video data from redux
  const video = useSelector((state) => state.video);
  const videoRef = useRef([]);
  //get videos
  useGetVideos(videoRef);
  //handle video is in center of viewport or not
  useObserver(videoRef, video?.status);
  return (
    <>
      <Header />
      <div className="row ">
        {video?.status === "loading" || video?.status === "idle" ? (
          <div style={{minHeight:'50vh'}} className="d-flex align-items-center justify-content-center" >
            <Spinner animation="border" variant="light" />
          </div>
        ) : (
          <>
            <Sidebar videoRef={videoRef} />
            <div className="d-flex flex-column  align-items-center align-items-md-start col-12 col-md-8 ">
              {video?.data?.map((video, index) => {
                return (
                  <div
                    key={`video${video?.id}`}
                    className="d-flex flex-column col-6 col-md-4 col-lg-3"
                    style={{ padding: "2%" }}
                  >
                    <video
                      muted
                      poster={video?.attributes?.small_poster}
                      className="home_div__card_container"
                      ref={(element) => (videoRef.current[index] = element)}
                      width="100%"
                      src={video?.attributes?.preview_src}
                    ></video>
                    <Video video={video} />
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default App;
