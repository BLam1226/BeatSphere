import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Card from "./components/Card";
import { CountryDropdown } from "react-country-region-selector";
import Navbar from "./Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import fetchTopTracks from "./lastFM";
import Countrypage from "./pages/Countrypage";
import Player from "./pages/Player";

function App() {
  const [country, setCountry] = useState("");
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    if (country) {
      fetchTopTracks(country)
        .then((tracks) => setTopTracks(tracks))
        .catch((error) => console.error(error));
    }
  }, [country]);

  function selectCountry(val) {
    setCountry(val);
  }

  return (
    <>
    <Navbar />
       <div className="container">
         <Routes>
           <Route exact className="loginroute" path="/Login" element={<Login />} />
           <Route exact className="signuproute" path="/Signup" element={<Signup />} />
           <Route path="/Player" element={<Player />} />
           <Route path="/Countrypage" element={<Countrypage />} />
         </Routes>
        </div>
      <h1 className='country'>{country}</h1>
      <div className='dropdown'>
        <CountryDropdown value={country} onChange={(val) => selectCountry(val)} />
      </div>
      <div className="card-container">
        {topTracks.map((track, index) => (
          <Card key={index} track={track} artist={track.artist.name} />
        ))}
      </div>
    </>
  );
}

export default App;
