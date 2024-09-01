import React from 'react';
import { useSelector } from 'react-redux';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const currentSong = useSelector((state) => state.playingSong.currentSong);

  return (
    <div className="music-player-container">
      <h3>Now Playing</h3>
      {currentSong ? (
        <div>
          <p>{currentSong.title} - {currentSong.artist}</p>
          {currentSong.audio ? (
            <AudioPlayer
              autoPlay
              src={currentSong.audio}
              showJumpControls={false}
              customAdditionalControls={[]}
              layout="horizontal-reverse"
              customVolumeControls={[]}
              style={{ width: '100%', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}
            />
          ) : (
            <p>No audio URL provided</p>
          )}
        </div>
      ) : (
        <p>No song selected</p>
      )}
    </div>
  );
};

export default MusicPlayer;