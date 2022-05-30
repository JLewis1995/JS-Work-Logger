const Register = () => {
    return (
      <div className="card bg-white card-rounded w-50">
        <div className="card-header bg-dark text-center">
          <h1>Please Complete the following to register</h1>
        </div>
        <div className="card-body m-5">
        <form> 
          <div>
            <label className='p-2'>What is your email?</label>
            <input
              type="email"
              name='email'
              placeholder='Please enter your email here'
            />
          </div>
          <div>
            <label className='p-2'>What would you like your password to be?</label>
            <input
              type="password"
              name='password'
              placeholder='Please enter your password here'
            />
          </div>
          <div>
            <label className='p-2'>What is your role?</label>
            <input
              type="radio"
              id="Electrician"
              name='role'
              value='Electrician'
            />
            <label for='Electrician'>Electrician</label>
            <br></br>
            <input
              type="radio"
              id="Plumber"
              name='role'
              value='Plumber'
            />
            <label for='Plumber'>Plumber</label>
            <br></br>
            <input
              type="radio"
              id="Carpenter"
              name='role'
              value='Carpenter'
            />
            <label for='Carpenter'>Carpenter</label>
            <br></br>
          </div>
          <div>
            <button type='submit' className='btn btn-danger m-1'>Register</button>
          </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Register;