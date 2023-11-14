import React, { useEffect, useState } from 'react';
import { authenticateSpotify, setAccessToken } from '../SpotifyAuth';
import SpotifyPlayer from 'react-spotify-web-playback';

const SpotifyPlayerComponent = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const accessToken = setAccessToken();

    if (!accessToken) {
      authenticateSpotify();
    } else {
      setLoggedIn(true);
      setToken(accessToken);
    }
  }, []);

  return (
    <div>
      {loggedIn ? (
        <div>
          <SpotifyPlayer
            token={token}
            callback={(state) => {
              if (!state.isPlaying) console.log('Player is paused');
            }}
          />
        </div>
      ) : (
        <p>Logging in...</p>
      )}
    </div>
  );
};

export default SpotifyPlayerComponent;
