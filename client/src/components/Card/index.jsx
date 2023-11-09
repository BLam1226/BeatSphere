import React from 'react';

const Card = ({ track, artist }) => {
  return (
    <div className="card">
      <h2>{track.name}</h2>
      <p>Artist: {artist}</p>
    </div>
  );
};

export default Card;
