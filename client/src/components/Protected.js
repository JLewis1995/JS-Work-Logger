import { Navigate } from "react-router-dom";
import Auth from "../utils/auth";

const Protected = ({ children }) => {
  if (!Auth.loggedIn()) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default Protected;
