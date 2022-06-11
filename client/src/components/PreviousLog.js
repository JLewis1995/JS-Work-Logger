import { Link } from "react-router-dom";

const PreviousLogs = ({ logs }) => {
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
            <div className="card-body bg-light d-flex justify-content-center p-2">
              <span className="p-3 text-white">Name: {log.name}</span>
              <span className="p-3 text-white">Role: {log.role}</span>
              <span className="p-3 text-white">
                Hours Worked: {log.hours_worked}
              </span>
              <span className="p-3 text-white">Job Site: {log.job_site}</span>
              <button className="btn">Trash Can Goes Here</button>
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
