import React from "react";

const VidPlayer = ({ video }) => {
  return (
    <div>
      <div>
        <iframe
          title="FoodVideo"
          className="embed-responsive-item"
          style={{ width: "70%", height: "350px" }}
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VidPlayer;
