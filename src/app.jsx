import React, { useCallback, useEffect, useState } from 'react';
import SearchBar from './components/searchBar';
import VideoDetail from './components/videoDetail';
import VideoList from './components/videoList';

const App = () => {
  const [videoInfos, setVideoInfos] = useState([]);
  const [videoId, setVideoId] = useState();

  useEffect(() => {
    /*const requestOptions = {
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
      .catch((error) => console.log('error', error));*/

    fetch('mostPopularVideoData.json')
      .then((response) => response.json())
      .then((result) => {
        const videoInfos = result.items;
        setVideoInfos(videoInfos);
      })
      .catch((error) => console.log('error', error));
  }, []);

  const handleSearch = useCallback((searchContent) => {
    /*const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchContent}&regionCode=kr&key=AIzaSyA-fb-kXWLVsW6UbaIdzAuFRipsWu0FfX0`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        const videoInfos = result.items;
        setVideoInfos(videoInfos);
      })
      .catch((error) => console.log('error', error));*/

    fetch('searchVideoData.json')
      .then((response) => response.json())
      .then((result) => {
        const videoInfos = result.items;
        setVideoInfos(videoInfos);
      })
      .catch((error) => console.log('error', error));

    setVideoId(null);
  }, []);

  const handleDetail = useCallback((id) => {
    setVideoId(id);
  }, []);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {videoId && <VideoDetail videoId={videoId} />}
      <VideoList videoInfos={videoInfos} onDetail={handleDetail} />
    </>
  );
};

export default App;
