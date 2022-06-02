import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Register(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

// const Register = () => {
    return (
      <div className="card bg-white card-rounded w-50">
        <div className="card-header bg-dark text-center">
          <h1>Please Complete the following to register</h1>
        </div>
        <div className="card-body m-5">
        <form> 
        <div>
            <label className='p-2'>What is your name?</label>
            <input
              type="text"
              name='name'
              placeholder='Please enter your name here'
            />
          </div>
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
            <br></br>
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
          </div>
          <div>
          <br></br>
            <button type='submit' className='btn btn-danger m-1'>Register</button>
          </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Register;