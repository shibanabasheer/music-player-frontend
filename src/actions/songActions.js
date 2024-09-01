import axios from 'axios';
import {
  SONG_LIST_REQUEST,
  SONG_LIST_SUCCESS,
  SONG_LIST_FAIL,
} from '../constants/songConstants';

export const listSongs = () => async (dispatch) => {
  dispatch({ type: SONG_LIST_REQUEST });

  try {
    const { data } = await axios.get('/api/songs');
    dispatch({ type: SONG_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SONG_LIST_FAIL,
      payload: error.response?.data.message || error.message,
    });
  }
};

export const listSongsByPlaylist = (playlistId) => async (dispatch) => {
  dispatch({ type: SONG_LIST_REQUEST });

  try {
    const { data } = await axios.get(`/api/playlists/${playlistId}/songs`);
    dispatch({ type: SONG_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SONG_LIST_FAIL,
      payload: error.response?.data.message || error.message,
    });
  }
};
