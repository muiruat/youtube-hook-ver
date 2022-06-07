import React, { useEffect, useState } from 'react';

const VideoDetail = (props) => {
  const [videoInfo, setVideoInfo] = useState({});

  useEffect(() => {
    fetch('videoDetail.json')
      .then((response) => response.json())
      .then((result) => {
        const videoInfo = result.items[0];
        setVideoInfo(videoInfo);
      })
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <div>
      {videoInfo.player && videoInfo.player.embedHtml}
      <p>{videoInfo.snippet && videoInfo.snippet.title}</p>
      <p>{videoInfo.snippet && videoInfo.snippet.description}</p>
    </div>
  );
};

export default VideoDetail;
