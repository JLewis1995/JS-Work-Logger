import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import { LOGIN } from '../utils/mutations';
import {useState} from 'react';


function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }}

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
// ON SUBMIT OR LINK TO ROUTE? NEED TO VERIFY LOGIN WITH EITHER ACTION AND THEN GO TO PROFILE OR RETURN HERE WITH ERROR MESSAGE
  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Please Log In</h1>
      </div>
      <div className="card-body m-5">
          {/* ADJUST FOLLOWING LINE ONCE AUTHENTICATION IS CODED */}
      <form onSubmit={handleFormSubmit}> 
        <div>
          <label className='p-2'>Email:</label>
          <input
            type="email"
            name='email'
            placeholder='Please enter your email here'
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='p-2'>Password:</label>
          <input
            type="password"
            name='password'
            placeholder='Please enter your password here'
            value={formState.password}
            onChange={handleChange}
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
