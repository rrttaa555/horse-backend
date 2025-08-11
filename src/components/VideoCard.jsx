import React from 'react';
import { useNavigate } from 'react-router-dom';

const VideoCard = ({ video }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/cavallo/${video.horseId}`);
  };

  return (
    <div className="video-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <video src={video.url} controls autoPlay loop muted width="300" />
      <div className="video-info">
        <h2>{video.description}</h2>
        <p>Clicca per info cavallo</p>
      </div>
    </div>
  );
};

export default VideoCard;
