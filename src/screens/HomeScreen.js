import React, { useState, useEffect } from 'react';
import MusicPlayer from '../components/MusicPlayer';
import Playlist from '../components/Playlist';
import SongLibrary from '../components/SongLibrary';
// import PlaylistCard from '../components/PlaylistCard.js';
import musicPlayerIcon from '../assets/Aqualung_music_player_drop_icon.svg.png';
import './HomeScreen.css';

const HomeScreen = () => {
  const [playlists, setPlaylists] = useState([]);
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const playlistResponse = await fetch('/api/playlists');
        const playlistData = await playlistResponse.json();
        setPlaylists(playlistData);

        const songResponse = await fetch('/api/songs');
        const songData = await songResponse.json();
        setSongs(songData);
      } catch (err) {
        setError('Failed to fetch data');
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home-screen">
      <div className="background-header">
        <h1>Welcome to Music Player</h1>
      </div>
      <div className="home-container">
        <SongLibrary />
        <Playlist />
        {/* {error && <p className="error-message">{error}</p>} */}
        {/* {playlists.map((playlist) => (
          <PlaylistCard key={playlist._id} playlist={playlist} songs={songs} />
        ))} */}
        <MusicPlayer />
      </div>
    </div>
  );
};

export default HomeScreen;
