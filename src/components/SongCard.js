import React from 'react';
import { useDispatch } from 'react-redux';
import { addSongToPlaylist } from '../actions/playlistActions';

const SongCard = ({ song, playlistId }) => {
  const dispatch = useDispatch();

  const handleAddToPlaylist = () => {
    dispatch(addSongToPlaylist(playlistId, song._id));
  };

  return (
    <div className="song-card">
      <img src={song.image} alt={song.title} className="song-image" />
      <h3>{song.title}</h3>
      <p>{song.artist}</p>
      <button onClick={handleAddToPlaylist}>Add to Playlist</button>
    </div>
  );
};

export default SongCard;