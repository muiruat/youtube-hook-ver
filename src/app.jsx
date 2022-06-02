import React, { useEffect, useState } from 'react';
import VideoList from './components/videoList';

const App = () => {
  const [videoInfos, setVideoInfos] = useState();

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=kr&key=AIzaSyA-fb-kXWLVsW6UbaIdzAuFRipsWu0FfX0',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        const videoInfos = result.items;
        setVideoInfos(videoInfos);
      })
      .catch((error) => console.log('error', error));
  }, []);

  return <VideoList videoInfos={videoInfos} />;
};

export default App;
