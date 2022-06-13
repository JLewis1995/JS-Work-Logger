import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { REMOVE_LOG } from "../utils/mutations";
import { useNavigate } from "react-router-dom";

const PreviousLogs = ({ logs }) => {
  let navigate = useNavigate();

  const [removeLog, { error }] = useMutation(REMOVE_LOG);

  const handleRemoveLog = async (logId) => {
    try {
      const { data } = await removeLog({
        variables: {
          logId,
        },
      });

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };


    // if no previous logs, display h3 heading with that fact
    if (!logs || !logs.length) {
      return <h3>No Previous Logs</h3>;
    }

  return (
    <div>
      {logs &&
        logs.map((log) => (
          // Card to display each previous work log
          <div className="card mb-3">
            <div className="card-body bg-light d-flex justify-content-around p-2">
              <span className="p-3 text-white">Name: {log.name}</span>
              <span className="p-3 text-white">Role: {log.role}</span>
              <span className="p-3 text-white">
                Hours Worked: {log.hours_worked}
              </span>
              <span className="p-3 text-white">Job Site: {log.job_site}</span>
              <button onClick={() => handleRemoveLog(log._id)} class="btn btn-delete" className="btn mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
              </button>
              <Link to={`/logs/${log._id}`}>
                <button className="btn btn-lg btn-danger">Edit worklog</button>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PreviousLogs;
