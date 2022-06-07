import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "./utils/queries";
import { Link } from "react-router-dom";
import Auth from "./utils/auth";

const Nav = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const meResult = useQuery(QUERY_ME, {
    fetchPolicy: "no-cache",
  });

  let userInfo = {};

  if (meResult && meResult.data && meResult.data.me) {
    userInfo = meResult.data.me;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <p className="navbar-brand">Jobsite Work Logger</p>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          {Auth.loggedIn() ? (
            <>
              <li>
                <Link className="btn btn-lg btn-primary m-2" to="/profile">
                  View My Profile
                </Link>
              </li>
              <li>
                <button className="btn btn-lg btn-light m-2" onClick={logout}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link className="btn btn-lg btn-primary m-2" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="btn btn-lg btn-light m-2" to="/register">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
        <span className="navbar-text">Welcome {userInfo.name}</span>
      </div>
    </nav>
  );
};

export default Nav;
