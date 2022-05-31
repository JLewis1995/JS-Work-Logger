const PreviousLogs = ({ logs }) => {
  if (!logs.length) {
    return <h3>No Previous Logs</h3>;
  }

  return (
    <div>
      {logs &&
        logs.map((log) => (
          <div className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {log.date}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{log.name}</p>
              <p>{log.role}</p>
              <p>{log.hours}</p>
              <p>{log.site}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PreviousLogs;
