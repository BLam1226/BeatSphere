import { useMutation } from '@apollo/client';

import { REMOVE_SONG } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';

const SongsList = ({ songs, isLoggedInUser = false }) => {
  const [removeSong, { error }] = useMutation
  (REMOVE_SONG, {
    refetchQueries: [
      QUERY_ME,
      'me'
    ]
  });

  const handleRemoveSong = async (song) => {
    try {
      const { data } = await removeSong({
        variables: { songs },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (!songs.length) {
    return <h3>No Songs Yet</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {songs &&
          songs.map((song) => (
            <div key={song} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0 display-flex align-center">
                  <span>{song}</span>
                  {isLoggedInUser && (
                    <button
                      className="btn btn-sm btn-danger ml-auto"
                      onClick={() => handleRemoveSong(song)}
                    >
                      X
                    </button>
                  )}
                </h4>
              </div>
            </div>
          ))}
      </div>
      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
};

export default SongsList;
