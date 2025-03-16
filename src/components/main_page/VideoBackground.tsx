'use client';
import { useTheme } from '@/providers/ThemeProvider';
import React from 'react';
interface VideoBackgroundProps {
  src: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ src }) => {
  const { theme } = useTheme();
  
  const shouldShowVideo = theme === 'dark';
  
  return (
    <div className="video-background-wrapper">
      {shouldShowVideo ? (
        <>
          <video 
            className="video-background"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={src} type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
        </>
      ) : (
        <div className="light-theme-background"></div>
      )}
    </div>
  );
};

export default VideoBackground;