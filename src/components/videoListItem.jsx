import React from 'react';

const VideoListItem = (props) => {
  return (
    <li>
      <p>{props.thumbnailUrl}</p>
      <p>{props.title}</p>
      <p>{props.channelTitle}</p>
    </li>
  );
};

export default VideoListItem;
