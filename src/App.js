import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import PlaylistScreen from './screens/PlaylistScreen';
import SongLibrary from './components/SongLibrary';
import Playlist from './components/Playlist';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomeScreen />} exact />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/playlists/:id" element={<PlaylistScreen />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;


