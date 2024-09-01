import axios from 'axios';
import {
  PLAYLIST_LIST_REQUEST,
  PLAYLIST_LIST_SUCCESS,
  PLAYLIST_LIST_FAIL,
  PLAYLIST_ADD_SONG_SUCCESS,
  PLAYLIST_ADD_SONG_FAIL,
  PLAYLIST_DETAILS_REQUEST,
  PLAYLIST_DETAILS_SUCCESS,
  PLAYLIST_DETAILS_FAIL,
} from '../constants/playlistConstants';

export const listPlaylists = () => async (dispatch) => {
  dispatch({ type: PLAYLIST_LIST_REQUEST });

  try {
    const { data } = await axios.get('/api/playlists');
    dispatch({ type: PLAYLIST_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PLAYLIST_LIST_FAIL,
      payload: error.response?.data.message || error.message,
    });
  }
};

export const addSongToPlaylist = (playlistId, songId) => async (dispatch, getState) => {
  const { userLogin: { userInfo } } = getState();

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  try {
    const { data } = await axios.post('/api/playlists/add-song', { playlistId, songId }, config);
    dispatch({ type: PLAYLIST_ADD_SONG_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PLAYLIST_ADD_SONG_FAIL,
      payload: error.response?.data.message || error.message,
    });
  }
};

export const getPlaylistDetails = (id) => async (dispatch) => {
  dispatch({ type: PLAYLIST_DETAILS_REQUEST });

  try {
    const { data } = await axios.get(`/api/playlists/${id}`);
    dispatch({ type: PLAYLIST_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PLAYLIST_DETAILS_FAIL,
      payload: error.response?.data.message || error.message,
    });
  }
};
