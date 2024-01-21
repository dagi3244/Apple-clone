import React, { useEffect, useState } from "react";
import "./Youtube.css";

function YoutubeVideos() {
  const [youTubeVideos, setYouTubeVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&key=AIzaSyC_bZG0W0Fy8IzmIaPXiHQaIwmxPUuqc4c"
    )
      .then((response) => response.json())
      .then((data) => {
        const videos = data.items;
        setYouTubeVideos(videos);
      });
  }, []);

  const renderVideoWrapper = (singleVideo, i) => {
    const vidId = singleVideo.id.videoId;
    const vidLink = `https://www.youtube.com/watch?v=${vidId}`;
    return (
      <div key={i} className="col-sm-12 col-md-6">
        <div className="singleVideoWrapper">
          <div className="videoThumbnail">
            <a href={vidLink} target="_blank" rel="noopener noreferrer">
              <img
                src={singleVideo.snippet.thumbnails.high.url}
                alt={singleVideo.snippet.title}
              />
            </a>
          </div>
          <div className="videoInfoWrapper">
            <div className="videoTitle">
              <a href={vidLink} target="_blank" rel="noopener noreferrer">
                {singleVideo.snippet.title}
              </a>
            </div>
            <div className="videoDesc">{singleVideo.snippet.description}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper bold video-title-wrapper">
              Latest Videos
            </div>
          </div>
          {youTubeVideos.map((singleVideo, i) =>
            renderVideoWrapper(singleVideo, i)
          )}
        </div>
      </div>
    </div>
  );
}

export default YoutubeVideos;
