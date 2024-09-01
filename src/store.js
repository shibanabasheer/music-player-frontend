import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import {
  userLoginReducer,
  userRegisterReducer,
} from './reducers/userReducers';
import { playlistListReducer } from './reducers/playlistReducers';
import { songListReducer } from './reducers/songReducers';
import { playingSongReducer } from './reducers/playingSongReducer';

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  playlistList: playlistListReducer,
  songList: songListReducer,
  playingSong: playingSongReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);



export default store;
