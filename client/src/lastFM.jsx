import axios from 'axios';

const API_KEY = '13e4217f6404cdca7c524e44e5c2847e';

const fetchTopTracks = (country) => {
  return axios.get(`https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${country}&api_key=${API_KEY}&format=json`)
    .then(response => response.data.tracks.track)
    .catch(error => {
      console.error('Error fetching data:', error);
      throw error;
    });
};

export default fetchTopTracks;
