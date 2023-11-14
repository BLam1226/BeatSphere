import React from 'react';
import SpotifyWebPlayer from 'react-spotify-web-playback';

const SpotifyPlayer = ({ accessToken, trackUri }) => {
  return <SpotifyWebPlayer token={accessToken} uris={trackUri ? [trackUri] : []} />;
};

export default SpotifyPlayer;
