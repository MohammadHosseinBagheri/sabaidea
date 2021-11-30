export const interSectionCallBack = entries => {
  entries.forEach((item, i) => {
    if (item.isIntersecting) {
      item.target.style["box-shadow"] = "0px 0px 8px #ffd637";
      item.target.muted = true;
      if (item.target && item.target.paused) {
        let promise = item.target.play();
        let autoPlayAllowed = true;

        if (promise instanceof Promise) {
          promise
            .catch(function(error) {
              if (error.name == "NotAllowedError") {
                autoPlayAllowed = false;
              } else {
                throw error;
              }
            })
            .then(function() {
              if (autoPlayAllowed) {
                item.target.play();
              } else {
                console.log(item.intersectionRatio, item.target.paused);
              }
            });
        } else {
          console.log(item.intersectionRatio, item.target.paused);
        }
      }
    } else {
      item.target.style["box-shadow"] = "0px 0px 8px #ff4433";
      item.target.pause();
    }
  });
};
