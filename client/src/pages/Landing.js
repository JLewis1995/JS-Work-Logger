import { Link } from 'react-router-dom';

const Landing = () => {

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to The Jobsite Work Logger!</h1>
      </div>
      <div className="card-footer text-center m-3">
        <h2>Ready to log todays work?</h2>
        <Link to="/login">
          <button className="btn btn-lg btn-danger">Login</button>
        </Link>
        <Link to="/register">
          <button className="btn btn-lg btn-danger">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
