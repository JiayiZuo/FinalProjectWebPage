// src/components/ui/video-background.tsx
import React from 'react';

interface VideoBackgroundProps {
  src: string;
  poster?: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ src, poster }) => {
  return (
    <div className="video-background-wrapper">
      <video 
        className="video-background"
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="video-overlay"></div>
    </div>
  );
};

export default VideoBackground;