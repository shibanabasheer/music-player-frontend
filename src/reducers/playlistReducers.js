import {
  PLAYLIST_LIST_REQUEST,
  PLAYLIST_LIST_SUCCESS,
  PLAYLIST_LIST_FAIL,
  PLAYLIST_ADD_SONG_SUCCESS,
  PLAYLIST_ADD_SONG_FAIL
} from '../constants/playlistConstants';

// Reducer to handle playlist listing
export const playlistListReducer = (state = { playlists: [] }, action) => {
  switch (action.type) {
    case PLAYLIST_LIST_REQUEST:
      return { loading: true, playlists: [] };
    case PLAYLIST_LIST_SUCCESS:
      return { loading: false, playlists: action.payload };
    case PLAYLIST_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// Reducer to handle adding a song to a playlist
export const playlistAddSongReducer = (state = {}, action) => {
  switch (action.type) {
    case PLAYLIST_ADD_SONG_SUCCESS:
      return { success: true, playlist: action.payload };
    case PLAYLIST_ADD_SONG_FAIL:
      return { error: action.payload };
    case 'ADD_SONG_TO_PLAYLIST':
      return {
        ...state,
        playlists: state.playlists.map((playlist) =>
          playlist._id === action.payload.playlistId
            ? { ...playlist, songs: [...playlist.songs, action.payload.song] }
            : playlist
        ),
      };
    default:
      return state;
  }
};
