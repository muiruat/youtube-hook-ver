import React from 'react';
import VideoListItem from './videoListItem';

const VideoList = (props) => {
  return (
    <ul>
      {props.videoInfos.map((videoInfo) => {
        const id = videoInfo.id;
        const thumbnailUrl = videoInfo.snippet.thumbnails.default.url;
        const title = videoInfo.snippet.title;
        const channelTitle = videoInfo.snippet.channelTitle;

        return (
          <VideoListItem
            key={id}
            thumbnailUrl={thumbnailUrl}
            title={title}
            channelTitle={channelTitle}
          />
        );
      })}
    </ul>
  );
};

export default VideoList;
