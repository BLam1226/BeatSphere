import React from 'react';
import SpotifyLogin from "../SpotifyLogin";
import Dashboard from "../Dashboard";
// import 'bootstrap/dist/css/bootstrap.min.css';

const code = new URLSearchParams(window.location.search).get("code");

const Player = () => {
  return code ? <Dashboard code={code} /> : <SpotifyLogin />;
};

export default Player;
