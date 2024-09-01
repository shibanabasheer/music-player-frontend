// screens/PlaylistScreen.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SongCard from '../components/SongCard';
import './PlaylistScreen.css';

const PlaylistScreen = () => {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState({});
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    // Fetch playlist details including songs
    fetch(`/api/playlists/${id}`)
      .then(res => res.json())
      .then(data => {
        setPlaylist(data);
        setSongs(data.songs); // Assuming your API returns songs as part of playlist data
      });
  }, [id]);

  return (
    <div className="playlist-screen">
      <h2>{playlist.name}</h2>
      <p>{playlist.description}</p>
      <div className="songs-grid">
        {songs.map(song => (
          <SongCard key={song._id} song={song} />
        ))}
      </div>
    </div>
  );
};

export default PlaylistScreen;
