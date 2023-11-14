import React from 'react';
import SpotifyPlayer from '../components/SpotifyPlayer';

const Player = () => {
  return (
    <div>
      <h2>Spotify Player Page</h2>
      <SpotifyPlayer accessToken={localStorage.getItem('access_token')} />
    </div>
  );
};

export default Player;
