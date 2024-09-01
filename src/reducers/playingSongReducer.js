import { SET_PLAYING_SONG } from '../actions/playingSongActions';

const initialState = {
  currentSong: null,
};

export const playingSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYING_SONG:
      return {
        ...state,
        currentSong: action.payload,
      };
    default:
      return state;
  }
};
