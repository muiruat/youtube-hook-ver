import React, { memo } from 'react';
import VideoListItem from './videoListItem';

const VideoList = memo((props) => {
  return (
    <ul>
      {props.videoInfos.map((videoInfo) => {
        const id =
          typeof videoInfo.id === 'object'
            ? videoInfo.id.kind === 'youtube#video'
              ? videoInfo.id.videoId
              : videoInfo.id.playlistId
            : videoInfo.id;
        const thumbnailUrl = videoInfo.snippet.thumbnails.default.url;
        const title = videoInfo.snippet.title;
        const channelTitle = videoInfo.snippet.channelTitle;

        return (
          <VideoListItem
            key={id}
            id={id}
            thumbnailUrl={thumbnailUrl}
            title={title}
            channelTitle={channelTitle}
            onDetail={props.onDetail}
          />
        );
      })}
    </ul>
  );
});

export default VideoList;
