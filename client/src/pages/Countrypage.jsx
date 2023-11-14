import { useState } from 'react'
import '../pages/Countrypage.css';
import CountryCard from '../components/CountryCard/CountryCard';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


function Countrypage() {
    const [country, setCountry] = useState('');
    const [currentTrack, setCurrentTrack] = useState(null);
    const [currentArtist, setCurrentArtist] = useState(null);
  
    const [currentTrack2, setCurrentTrack2] = useState(null);
    const [currentArtist2, setCurrentArtist2] = useState(null);
  
    const [currentTrack3, setCurrentTrack3] = useState(null);
    const [currentArtist3, setCurrentArtist3] = useState(null);
  
    const [currentTrack4, setCurrentTrack4] = useState(null);
    const [currentArtist4, setCurrentArtist4] = useState(null);
  
    const [currentTrack5, setCurrentTrack5] = useState(null);
    const [currentArtist5, setCurrentArtist5] = useState(null);
  
    const [currentTrack6, setCurrentTrack6] = useState(null);
    const [currentArtist6, setCurrentArtist6] = useState(null);
  
  
    function selectCountry(val) {
      setCountry(val);
      fetch(`https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${val}&api_key=13e4217f6404cdca7c524e44e5c2847e&format=json`)
      .then(response => response.json())
      .then(data => {
        setCurrentTrack(data.tracks.track[0]);
        setCurrentArtist(data.tracks.track[0].artist.name);
  
        setCurrentTrack2(data.tracks.track[1]);
        setCurrentArtist2(data.tracks.track[1].artist.name);
  
        setCurrentTrack3(data.tracks.track[2]);
        setCurrentArtist3(data.tracks.track[2].artist.name);
  
        setCurrentTrack4(data.tracks.track[3]);
        setCurrentArtist4(data.tracks.track[3].artist.name);
  
        setCurrentTrack5(data.tracks.track[4]);
        setCurrentArtist5(data.tracks.track[4].artist.name);
  
        setCurrentTrack6(data.tracks.track[5]);
        setCurrentArtist6(data.tracks.track[5].artist.name);
  
        setCurrentTrack7(data.tracks.track[6]);
        setCurrentArtist7(data.tracks.track[6].artist.name);
        console.log(data);
      });
    }
  
    return (
      <div className='Cpage'>
        <h1 className='country'>{country}</h1>
        <div className='dropdown'><CountryDropdown
          value={country}
          onChange={(val) => selectCountry(val)}
        /></div>
        
        <div className="Card1">
        <CountryCard 
        track={currentTrack}
        artist={currentArtist}
         />
        </div>
        
  <div className="Cardrow">
        <div className="Card2">
        <CountryCard 
        track={currentTrack2}
        artist={currentArtist2}
         />
        </div>
  
        <div className="Card2">
        <CountryCard
        track={currentTrack3}
        artist={currentArtist3}
         />
        </div>
        
        <div className="Card2">
        <CountryCard
        track={currentTrack4}
        artist={currentArtist4}
         />
        </div>
  
        <div className="Card2">
        <CountryCard
        track={currentTrack5}
        artist={currentArtist5}
         />
        </div>
  
        <div className="Card2">
        <CountryCard
        track={currentTrack6}
        artist={currentArtist6}
         />
        </div>
        </div>
        
      </div>
    );
  }
  
    export default Countrypage; 