import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import spotifyApi from '../../spotify';

const redirectUri = 'https://powerful-earth-51293-6f18607437c5.herokuapp.com/Player';
const clientId = 'be06c16b9fca42da816a259817bad5b3';

const SpotifyAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    const handleAuthentication = async () => {
      if (code) {
        try {
          // Assuming your Spotify API object has a method to exchange the code for an access token
          const response = await spotifyApi.exchangeCodeForToken(code);
          const accessToken = response.data.access_token;

          // Set the access token and navigate to the player page
          spotifyApi.setAccessToken(accessToken);

          // Save the access token to localStorage with expiration time
          const expirationTime = response.data.expires_in * 1000; // Convert seconds to milliseconds
          localStorage.setItem('access_token', accessToken);
          localStorage.setItem('access_token_expires_at', Date.now() + expirationTime);

          // Set a timeout to remove the access token from localStorage when it expires
          setTimeout(() => {
            localStorage.removeItem('access_token');
            localStorage.removeItem('access_token_expires_at');
          }, expirationTime);

          navigate('/Player');
        } catch (error) {
          console.error('Error exchanging code for token:', error);
        }
      } else {
        const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=user-read-playback-state%20user-modify-playback-state`;
        window.location.href = authUrl;
      }
    };

    handleAuthentication();
  }, [navigate]);

  return <div>Redirecting to Spotify for authentication...</div>;
};

export default SpotifyAuth;
