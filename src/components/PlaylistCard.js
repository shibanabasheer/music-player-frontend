import React, { useState } from 'react';
import Modal from 'react-modal'; // If using react-modal

const PlaylistCard = ({ playlist, songs }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSongId, setSelectedSongId] = useState('');

  const handleAddSongs = () => {
    setIsModalOpen(true);
  };

  const handleSongSelect = (songId) => {
    setSelectedSongId(songId);
  };

  const handleAddToPlaylist = async () => {
    if (selectedSongId) {
      // Make a POST request to your API to add the song to the playlist
      await fetch(`/api/playlists/${playlist._id}/add-song`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ songId: selectedSongId }),
      });

      // Close the modal after adding
      setIsModalOpen(false);
    }
  };

  return (
    <div className="playlist-card">
      <img src={playlist.imageUrl} alt={playlist.name} />
      <h3>{playlist.name}</h3>
      <p>{playlist.description}</p>
      <button onClick={handleAddSongs}>Add Songs</button>

      {/* Modal for selecting songs */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Select a Song"
      >
        <h2>Select a Song to Add to {playlist.name}</h2>
        <ul>
          {songs.map((song) => (
            <li key={song._id}>
              <label>
                <input
                  type="radio"
                  name="selectedSong"
                  value={song._id}
                  onChange={() => handleSongSelect(song._id)}
                />
                {song.name} - {song.artist}
              </label>
            </li>
          ))}
        </ul>
        <button onClick={handleAddToPlaylist}>Add to Playlist</button>
        <button onClick={() => setIsModalOpen(false)}>Cancel</button>
      </Modal>
    </div>
  );
};

export default PlaylistCard;
