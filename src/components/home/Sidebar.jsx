import React from "react";
import { useSelector } from "react-redux";

const Sidebar = (props) => {
  const { videoRef } = props;
  const video = useSelector((state) => state.video);
  return (
    <aside
      className="col-12 col-md-4 "
      style={{ position: "relative !important" }}
    >
      <div className="home_div__menu_side mt-5">
        <h3 className="text-center my-3"> دسترسی سریع </h3>
        {video?.data?.map((item, index) => (
          <button
            key={`sideBar${item?.id}`}
            onClick={() => videoRef.current[index].scrollIntoView()}
            className="btn btn transparent text-right text-limitation home_p__card_title my-1"
          >
            {item?.attributes?.title}
          </button>
        ))}
      </div>
    </aside>
  );
};
export default Sidebar;
