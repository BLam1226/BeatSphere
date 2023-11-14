import React, { useEffect, useState } from 'react';
import { authenticateSpotify, setAccessToken } from '../SpotifyAuth';
import SpotifyPlayer from 'react-spotify-web-playback';

const SpotifyPlayerComponent = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const checkAccessToken = async () => {
      const accessToken = setAccessToken();
  
      if (!accessToken) {
        // If no access token is found, authenticate Spotify
        authenticateSpotify();
      } else {
        try {
          // Check the scope (you might want to adjust the endpoint based on your needs)
          await fetch('https://api.spotify.com/v1/me', {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
  
          setLoggedIn(true);
        } catch (error) {
          // If there's an error, token might be expired, refresh it
          console.error('Error checking scope:', error);
          await refreshAccessToken();
          setLoggedIn(true);
        }
      }
    };
  
    checkAccessToken();
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
