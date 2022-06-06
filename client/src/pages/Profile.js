import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_LOGS } from '../utils/queries';
import { QUERY_LOGS_USER, QUERY_ME_LOGS } from '../utils/queries';
import PreviousLogs from '../components/PreviousLog';
import Auth from '../utils/auth';

const Profile = () => {
  // NEED TO MAKE THIS QUERY, QUERY BASED ON LOGGED IN USER
  const user = Auth.getProfile()
  // console.log('user', user);

  let previousLogs = [];

  const loading = false;

  const meLogsResult = useQuery(QUERY_ME_LOGS, {
    fetchPolicy: "no-cache",
    variables: { email: user.data.email },
  });

  // console.log('meLogsResult', meLogsResult);

  if (meLogsResult && meLogsResult.data && meLogsResult.data.meLogs) {
    previousLogs = meLogsResult.data.meLogs;
    // console.log('meLogs', meLogsResult.data.meLogs);
  }

  // .MATCHUPS WILL NEED TO CHANGE
  // console.log(previousLogs);

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header text-center">
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
          <PreviousLogs
            logs={previousLogs}
          />
        )}
      </div>
    </div>
  );
};

export default Profile;