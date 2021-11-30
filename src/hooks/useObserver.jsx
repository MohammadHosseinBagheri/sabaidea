import { useEffect } from "react";
import { INTERSECTION_OPTION } from "../constants/global.js";
import { interSectionCallBack } from "../utils/app.js";

export const useObserver = (videoRef, status) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      interSectionCallBack,
      INTERSECTION_OPTION
    );
    if (videoRef.current.length !== 0) {
      videoRef.current.forEach((item, i) => {
        if (typeof item === "object" && item !== null) {
          observer.observe(item);
        }
      });
    }
    return () => {
      if (videoRef.current.length !== 0) {
        videoRef.current.forEach((item, i) => {
          if (typeof item === "object" && item !== null) {
            return observer.unobserve(item);
          } else {
            return;
          }
        });
      }
    };
  }, [videoRef.current, status]);
};
