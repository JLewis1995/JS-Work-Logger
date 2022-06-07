const PreviousLogs = ({ logs }) => {
  if (!logs || !logs.length) {
    return <h3>No Previous Logs</h3>;
  }

  return (
    <div>
      {logs &&
        logs.map((log) => (
          <div className="card mb-3">
            <div className="card-body bg-light p-2">
              <span className="p-3">Name: {log.name}</span>
              <span className="p-3">Role: {log.role}</span>
              <span className="p-3">Hours Worked: {log.hours_worked}</span>
              <span className="p-3">Job Site: {log.job_site}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PreviousLogs;
