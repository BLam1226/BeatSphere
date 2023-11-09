import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import gql from 'graphql-tag';

const GET_SONGS = gql`
  query {
    songs {
      _id
      title
      artist
    }
  }
`;

const ADD_SONG = gql`
  mutation AddSong($title: String!, $artist: String!) {
    addSong(title: $title, artist: $artist) {
      _id
      title
      artist
    }
  }
`;

function MusicMapping() {
  const { loading, error, data } = useQuery(GET_SONGS);
  const [addSong] = useMutation(ADD_SONG);

  const handleAddSong = () => {
    addSong({
      variables: { title: 'New Song', artist: 'Unknown Artist' },
      refetchQueries: [{ query: GET_SONGS }],
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <button onClick={handleAddSong}>Add New Song</button>
      <ul>
        {data.songs.map((song) => (
          <li key={song._id}>
            {song.title} - {song.artist}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MusicMapping;
