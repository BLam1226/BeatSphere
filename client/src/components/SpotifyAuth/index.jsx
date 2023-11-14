import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

export const authenticateSpotify = () => {
  const clientId = 'be06c16b9fca42da816a259817bad5b3';
  const redirectUri = 'https://powerful-earth-51293-6f18607437c5.herokuapp.com/Player';
  const scopes = ['user-read-private', 'user-read-email', 'streaming'];

  const loginUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;

  window.location.href = loginUrl;
};

export const setAccessToken = () => {
  const params = window.location.hash
    .substring(1)
    .split('&')
    .reduce((acc, item) => {
      const parts = item.split('=');
      acc[parts[0]] = decodeURIComponent(parts[1]);
      return acc;
    }, {});

  if (params.access_token) {
    spotifyApi.setAccessToken(params.access_token);
    return true;
  } else {
    return false;
  }
};
