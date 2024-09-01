export const SET_PLAYING_SONG = 'SET_PLAYING_SONG';

export const setPlayingSong = (song) => ({
  type: SET_PLAYING_SONG,
  payload: song,
});