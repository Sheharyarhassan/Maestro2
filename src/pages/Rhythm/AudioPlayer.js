import React, { useRef, useState, useEffect } from "react";
import Icon from "../../assets/images/Images-Maestro/New Assets/musicPlayer.png"
const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    const updateDuration = () => setDuration(audio.duration);
    const updateTime = () => setCurrentTime(audio.currentTime);

    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("timeupdate", updateTime);

    return () => {
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    const newTime = (e.target.value / 100) * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div style={styles.audioPlayer}>
      <audio ref={audioRef} src={src} />
      <button onClick={togglePlayPause} style={styles.controlButton}>
        {/* {isPlaying ? <span>Pause</span> : <span>Play</span>} */}
        <img src={Icon} className="mw-100 h-auto" alt="music note"/>
      </button>
    <span style={{position:'relative',zIndex:'1',width:'7px', borderRadius:'4px', marginRight:'-21px' ,height:'35px', backgroundColor:'white'}}></span>
      <input
        type="range"
        min="0"
        max="100"
        value={(currentTime / duration) * 100 || 0}
        onChange={handleSeek}
        style={{
          ...styles.progressBar,
          background: `linear-gradient(to right, yellow ${(currentTime / duration) * 100}%, #FFFFFF 0%)`,
        }}
      />
    <span style={{position:'relative',zIndex:'1',width:'7px', borderRadius:'4px', marginLeft:'-21px' ,height:'35px', backgroundColor:'white'}}></span>
    <div style={styles.timeDisplay}>
        <p className="text-light mb-0">{formatTime(currentTime)} / {formatTime(duration)}</p>
      </div>
    </div>
  );
};

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

const styles = {
  audioPlayer: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    padding: "0rem 1rem 0rem 0rem",
    borderRadius: "10px",
    backgroundColor: "#666666",
    width: "100%",
    // maxWidth: "400px",
    // margin: "0 auto",
  },
  controlButton: {
    fontSize: "1.5rem",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    marginLeft:'-24px' 
  },
  progressBar: {
    flex: 1,
    height: "10px",
    cursor: "pointer",
    appearance: "none",
    borderRadius: "5px",
    outline: "none",
  },
  timeDisplay: {
    fontSize: "0.875rem",
    color: "#555",
  },
};

export default AudioPlayer;
