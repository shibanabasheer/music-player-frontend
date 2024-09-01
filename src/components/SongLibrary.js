import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listSongs } from '../actions/songActions';
import { setPlayingSong } from '../actions/playingSongActions';
import './SongLibrary.css';

import demoImage1 from '../assets/random-music-notes-with-pencil-music-and-compose-concept-2PJ6BDB.jpg';
import demoImage2 from '../assets/random-music-note-song-melody-blue-gradient-pattern-background-vector.jpg';
import demoImage3 from '../assets/abstract-grid-line-blue-square-gradient-vivid-wave-banner-presentation-background-vector.jpg';
import demoImage4 from '../assets/pngtree-note-music-logo-watercolor-background-image_903000.png';
import demoImage5 from '../assets/istockphoto-460149761-612x612.jpg';

const SongLibrary = () => {
  const dispatch = useDispatch();
  const songList = useSelector((state) => state.songList);
  const { loading, error, songs } = songList;

  const demoSongs = [
    { _id: '1', title: 'Song 1', artist: 'Artist 1', audio: require('../assets/songs/a-random-piece-of-cheese-please-125340.mp3'), image: demoImage1 },
    { _id: '2', title: 'Song 2', artist: 'Artist 2', audio: require('../assets/songs/ambient-relaxing-music-for-you-15969.mp3'), image: demoImage2 },
    { _id: '3', title: 'Song 3', artist: 'Artist 3', audio: require('../assets/songs/random-acoustic-electronic-guitar-136427.mp3'), image: demoImage3 },
    { _id: '4', title: 'Song 4', artist: 'Artist 4', audio: require('../assets/songs/random-drop-play-house-206930.mp3'), image: demoImage4 },
    { _id: '5', title: 'Song 5', artist: 'Artist 5', audio: require('../assets/songs/random-thoughts-20586.mp3'), image: demoImage5 },
  ];

  useEffect(() => {
    dispatch(listSongs());
  }, [dispatch]);

  const handleSongClick = (song) => {
    dispatch(setPlayingSong(song));
  };

  const onAddToPlaylist = (song) => {
    console.log('Adding song to playlist:', song);
    dispatch({
      type: 'ADD_SONG_TO_PLAYLIST',
      payload: song,
    });
  };

  return (
    <div className="song-library">
      <h2>Song Library</h2>
      <div className="songs-grid">
        {(songs && songs.length > 0 ? songs : demoSongs).map((song) => (
          <div key={song._id} className="song-card" onClick={() => handleSongClick(song)}>
            <img src={song.image} alt={song.title} className="song-image" />
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
            <button onClick={() => onAddToPlaylist(song)}>Add to Playlist</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongLibrary;
