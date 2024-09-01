import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { listPlaylists, getPlaylistDetails } from '../actions/playlistActions';
import './Playlist.css';

import image1 from '../assets/pngtree-pink-pink-headphone-is-arranged-on-a-grey-background-with-purple-image_2583072.jpg';
import image2 from '../assets/white-music-headphones-disk-wallpaper-preview.jpg';
import image3 from '../assets/playlist-cover-design-template-7dd4f20145b44bab7da20e33ecbcada6_screen.jpg';

// Sample demo playlists with images
const demoPlaylists = [
  { _id: '1', title: 'Playlist 1', description: 'Description 1', image: image1, songs: [] },
  { _id: '2', title: 'Playlist 2', description: 'Description 2', image: image2, songs: [] },
  { _id: '3', title: 'Playlist 3', description: 'Description 3', image: image3, songs: [] },
];

const Playlist = ({ songs, addSongToSelectedPlaylist }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const [playlists, setPlaylists] = useState(demoPlaylists);
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(id || null);
  const [selectedAddPlaylistId, setSelectedAddPlaylistId] = useState('');
  const selectedPlaylist = playlists.find((playlist) => playlist._id === selectedPlaylistId);


  // const playlistList = useSelector((state) => state.playlistList);
  // const { loading, error, playlists = [] } = playlistList; // Default to an empty array

  // const playlistDetails = useSelector((state) => state.playlistDetails);
  // const { playlist = { songs: [] } } = playlistDetails || {}; // Default to an object with an empty songs array

  // const [selectedPlaylistId, setSelectedPlaylistId] = useState(id || null);

  // useEffect(() => {
  //   dispatch(listPlaylists());
  // }, [dispatch]);

  useEffect(() => {
    if (id) {
      setSelectedPlaylistId(id);
      // dispatch(getPlaylistDetails(id));
    }
  }, [id]);

  const handleCardClick = (id) => {
    setSelectedPlaylistId(id);
    navigate(`/playlist/${id}`);
  };

  const handleAddSongToPlaylist = (song) => {
    if (selectedAddPlaylistId) {
      // Update the selected playlist with the new song
      const updatedPlaylists = playlists.map((playlist) => {
        if (playlist._id === selectedAddPlaylistId) {
          return { ...playlist, songs: [...playlist.songs, song] };
        }
        return playlist;
      });

      // Update the state with the updated playlists
      setPlaylists(updatedPlaylists);
    }
  };

  const handleAddSongs = (playlistId) => {
    // Logic to handle adding songs to the playlist
    // Example: opening a modal to select songs
    console.log(`Adding songs to playlist with ID: ${playlistId}`);
  };
  

  // const addSongToPlaylist = (song) => {
  //   if (selectedPlaylistId) {
  //     // Update the selected playlist with the new song
  //     const updatedPlaylists = playlists.map((playlist) => {
  //       if (playlist._id === selectedPlaylistId) {
  //         return { ...playlist, songs: [...playlist.songs, song] };
  //       }
  //       return playlist;
  //     });

  //     // Update the state with the updated playlists
  //     setPlaylists(updatedPlaylists);
  //   }
  // };

  return (
    <div className="playlist-library">
      <h2>Your Playlists</h2>
      {/* {loading ? (
        <p>Loading...</p>
      ) : ( */}
        <div className="playlists-grid">
        {playlists.length > 0 && playlists.map((playlist) => (
          <div
            key={playlist._id}
            className={`playlist-card ${selectedPlaylistId === playlist._id ? 'selected' : ''}`}
            onClick={() => handleCardClick(playlist._id)}
          >
            <img src={playlist.image} alt={playlist.title} className="playlist-image" />
            <h3>{playlist.title}</h3>
            <p>{playlist.description}</p>
            <button onClick={() => handleAddSongs(playlist._id)}>Add Songs</button>
          </div>
          ))}
        </div>
      {/* )} */}

      {selectedPlaylist && (
        <div>
          <h2>{selectedPlaylist.title}</h2>
          <div className="songs-grid">
          {selectedPlaylist.songs.length > 0 && selectedPlaylist.songs.map((song) => (
              <div key={song._id} className="song-card">
                <img src={song.image} alt={song.title} className="song-image" />
                <h3>{song.title}</h3>
                <p>{song.artist}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* <div>
        <h2>{playlist.name}</h2>
        <div className="songs-grid">
          {playlist?.songs?.map((song) => (
            <div key={song._id} className="song-card">
              <img src={song.image} alt={song.title} className="song-image" />
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
            </div>
          ))}
        </div>
      </div> */}

{/* <h2>Add Songs to Selected Playlist</h2>
      <div className="songs-grid">
        {songs && songs.length > 0 && songs.map((song) => (
          <div key={song._id} className="song-card">
            <img src={song.image} alt={song.title} className="song-image" />
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
            <select
              value={selectedAddPlaylistId}
              onChange={(e) => setSelectedAddPlaylistId(e.target.value)}
              className="playlist-select"
            >
              <option value="">Select Playlist</option>
              {playlists.map((playlist) => (
                <option key={playlist._id} value={playlist._id}>
                  {playlist.title}
                </option>
              ))}
            </select>
            <button
              onClick={() => handleAddSongToPlaylist(song)}
              disabled={!selectedAddPlaylistId}
            >
              Add to Playlist
            </button>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Playlist;



