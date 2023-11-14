import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  
import spotifyApi from '../../spotify';

const redirectUri = 'localhost:3000/Player';
const clientId = 'be06c16b9fca42da816a259817bad5b3';

const SpotifyAuth = () => {
  const navigate = useNavigate();  

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    if (code) {
      spotifyApi.setAccessToken(code);
      navigate('/player');  
    } else {
      const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=user-read-playback-state%20user-modify-playback-state`;
      window.location.href = authUrl;
    }
  }, [navigate]);

  return <div>Redirecting to Spotify for authentication...</div>;
};

export default SpotifyAuth;
