import React, { useRef, useState } from 'react';

import '../../styles/videoplayer.css';

function VideoPlayer ({videoId, title}) {

  console.log(videoId);

    const videoRef = useRef(null);
    // const [isPlaying, setIsPlaying] = useState(false);
    // const [progress, setProgress] = useState(0);
    // const [duration, setDuration] = useState(0);
    // const [currentTime, setCurrentTime] = useState(0);
  
    // const togglePlayPause = () => {
    //   const video = videoRef.current;
    //   if (isPlaying) {
    //     video.pause();
    //   } else {
    //     video.play();
    //   }
    //   setIsPlaying(!isPlaying);
    // };
  
    // const handleTimeUpdate = () => {
    //   const video = videoRef.current;
    //   setProgress((video.currentTime / video.duration) * 100);
    //   setCurrentTime(video.currentTime);
    // };
  
    // const handleVideoLoaded = () => {
    //   const video = videoRef.current;
    //   setDuration(video.duration);
    // };
  
    // const handleProgressChange = (e) => {
    //   const video = videoRef.current;
    //   const newTime = (e.target.value / 100) * video.duration;
    //   video.currentTime = newTime;
    //   setProgress(e.target.value);
    // };
  
    // const formatTime = (time) => {
    //   const minutes = Math.floor(time / 60);
    //   const seconds = Math.floor(time % 60);
    //   return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    // };
  
    return (
      <div className="videoplayer">
        <iframe
          ref={videoRef}
          className="video"
          title={title}
          // onTimeUpdate={handleTimeUpdate}
          // onLoadedMetadata={handleVideoLoaded}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1`} // Replace with your video file path
        ></iframe>
        {/* <div className="controls">
          <button onClick={togglePlayPause} className="play-pause-btn">
            {isPlaying ? '❚❚' : '▶'}
          </button>
          <input
            type="range"
            className="progress-bar"
            value={progress}
            onChange={handleProgressChange}
          />
          <div className="time">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
          <button className="fullscreen-btn" onClick={() => videoRef.current.requestFullscreen()}>
            ⛶
          </button>
        </div> */}
      </div>
    );

};

export default VideoPlayer