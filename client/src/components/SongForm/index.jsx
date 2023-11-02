import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_SONG } from '../../utils/mutations';

import Auth from '../../utils/auth';

const SongForm = ({ profileId }) => {
  const [song, setSong] = useState('');

  const [addSong, { error }] = useMutation(ADD_SONG);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addSong({
        variables: { profileId, song },
      });

      setSong('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h4>Add some more songs.</h4>

      {Auth.loggedIn() ? (
        <form
          className="flex-row justify-center justify-space-between-md align-center"
          onSubmit={handleFormSubmit}
        >
          <div className="col-12 col-lg-9">
            <input
              placeholder="Add some songs..."
              value={song}
              className="form-input w-100"
              onChange={(event) => setSong(event.target.value)}
            />
          </div>

          <div className="col-12 col-lg-3">
            <button className="btn btn-info btn-block py-3" type="submit">
              Add Song
            </button>
          </div>
          {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              {error.message}
            </div>
          )}
        </form>
      ) : (
        <p>
          You need to be logged in to add songs. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default SongForm;
