import React, { memo } from 'react';

const VideoListItem = memo((props) => {
  const handleClick = () => {
    props.onDetail(props.id);
  };

  return (
    <li onClick={handleClick}>
      <p>{props.thumbnailUrl}</p>
      <p>{props.title}</p>
      <p>{props.channelTitle}</p>
    </li>
  );
});

export default VideoListItem;
