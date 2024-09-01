import {
  SONG_LIST_REQUEST,
  SONG_LIST_SUCCESS,
  SONG_LIST_FAIL,
} from '../constants/songConstants';

// Reducer to handle song listing
export const songListReducer = (state = { songs: [] }, action) => {
  switch (action.type) {
    case SONG_LIST_REQUEST:
      return { loading: true, songs: [] };
    case SONG_LIST_SUCCESS:
      return { loading: false, songs: action.payload };
    case SONG_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
