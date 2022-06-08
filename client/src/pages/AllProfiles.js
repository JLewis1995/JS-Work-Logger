import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_LOGS } from "../utils/queries";
import PreviousLogs from "../components/PreviousLog";

const AllProfiles = () => {

  let previousLogs = [];

  const allLogsResult = useQuery(QUERY_LOGS, {
    fetchPolicy: "no-cache",
  });

  if (allLogsResult && allLogsResult.data && allLogsResult.data.logs) {
    previousLogs = allLogsResult.data.logs;
  }

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header text-center">
        <h1>Welcome to The Jobsite Work Logger!</h1>
      </div>
      <div className="card-body m-5">
        <h2>Here are the previous days' logs:</h2>
        <PreviousLogs logs={previousLogs} />
      </div>
    </div>
  );
};

export default AllProfiles;
