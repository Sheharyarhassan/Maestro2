import React, { useRef, useState, useEffect } from "react";

const VideoPlayer = ({ videoSrc, tags }) => {
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleTimeUpdate = () => {
      const currentTime = videoElement.currentTime;
      setProgress((currentTime / videoElement.duration) * 100);
      setCurrentTime(currentTime); // Update the current time state
    };

    const handleLoadedMetadata = () => {
      setDuration(videoElement.duration); // Update duration when video metadata is loaded
    };

    videoElement.addEventListener('timeupdate', handleTimeUpdate);
    videoElement.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      videoElement.removeEventListener('timeupdate', handleTimeUpdate);
      videoElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  const handleSeekBarClick = (e) => {
    const seekBar = e.currentTarget; 
    const rect = seekBar.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newTime = (offsetX / rect.width) * videoRef.current.duration; 
    
    console.log("Seek Bar Element:", seekBar);
    console.log("Bounding Rect:", rect);
    console.log("OffsetX:", offsetX);
    console.log("New Time:", newTime);
  
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
    setProgress((newTime / videoRef.current.duration) * 100);
  };
  

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="custom-video-player">
      <video
        ref={videoRef}
        src={videoSrc}
        controls={false}
        className="video-element"
      />
      <div className="seek-bar" onClick={handleSeekBarClick}>
        <div className="progress" style={{ width: `${progress}%` }} />
        {tags.map((tag, index) => (
          <div
            key={index}
            className="tag"
            style={{
              left: `${(tag.time / duration) * 100}%`,
            }}
          >
            🎵
            <span className="tag-text">{tag.text}</span>
          </div>
        ))}
      </div>
      <div className="controls">
        <button className="play-pause-btn" onClick={handlePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <div className="time-display">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
