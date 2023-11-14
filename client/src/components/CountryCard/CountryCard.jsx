import React from 'react';
import './CountryCard.css';

function CountryCard({track}) {
    return (
      <div className="card-container">
        <div className="image-placeholder"></div>
        <div className="album-info">
          <div className="album-name">{track ? track.name : ''}</div>
          <div className="artist">{track ? track.artist.name : ''}</div>
        </div>
      </div>
    );
  }
    

export default CountryCard;
