// ON SUBMIT OR LINK TO ROUTE? NEED TO VERIFY LOGIN WITH EITHER ACTION AND THEN GO TO PROFILE OR RETURN HERE WITH ERROR MESSAGE
const Login = () => {
  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Please Log In</h1>
      </div>
      <div className="card-body m-5">
          {/* ADJUST FOLLOWING LINE ONCE AUTHENTICATION IS CODED */}
      <form> 
        <div>
          <label className='p-2'>Email:</label>
          <input
            type="email"
            name='email'
            placeholder='Please enter your email here'
          />
        </div>
        <div>
          <label className='p-2'>Password:</label>
          <input
            type="password"
            name='password'
            placeholder='Please enter your password here'
          />
        </div>
        <div>
          <button type='submit' className='btn btn-danger m-1'>Login</button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
