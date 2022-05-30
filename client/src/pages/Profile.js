import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';

const Profile = () => {
  // NEED TO MAKE THIS QUERY, QUERY BASED ON LOGGED IN USER
  const { loading, data } = useQuery(QUERY_MATCHUPS, {
    fetchPolicy: "no-cache"
  });

  // .MATCHUPS WILL NEED TO CHANGE
  const previousLogs = data?.matchups || [];

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to The Jobsite Work Logger!</h1>
      </div>
      <div className="card-footer text-center m-3">
        <h2>Ready to log todays work?</h2>
        <Link to="/createform">
          <button className="btn btn-lg btn-danger">Create worklog!</button>
        </Link>
      </div>
      <div className="card-body m-5">
        <h2>Here are your previous days' logs:</h2>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ul className="square">
            {previousLogs.map((logs) => {
              return (
                <li key={logs._id}>
                  <Link to={{ pathname: `/logs/${logs._id}` }}>
                    <button className='btn btn-lg btn-danger'>{logs.date}</button>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Profile;