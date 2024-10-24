import React, { useRef } from "react";
import sail from "./assets/sail.mp3";

const AudioPlayer = () => {
  const audioRef = useRef(null);

  const playAudio = () => {
    audioRef.current.play();
  };

  const pauseAudio = () => {
    audioRef.current.pause();
  };

  const stopAudio = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  return (
    <div>
      <audio className="audio-player" ref={audioRef}>
        <source src={sail} type="audio/mpeg" />
        Il tuo browser non supporta l'elemento audio.
      </audio>
      <div className="custom-controls">
        <button onClick={playAudio}>Play</button>
        <button onClick={pauseAudio}>Pause</button>
        <button onClick={stopAudio}>Stop</button>
      </div>
    </div>
  );
};

export default AudioPlayer;
