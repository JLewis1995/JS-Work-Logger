import { Navigate } from "react-router-dom";
import Auth from "../utils/auth";

const Redirect = ({ children }) => {
  if (Auth.loggedIn()) {
    return <Navigate to="/profile" replace />;
  }
  return children;
};
export default Redirect;
