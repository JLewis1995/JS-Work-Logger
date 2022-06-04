import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_EMPLOYEE } from '../utils/mutations';

const Register = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [addEmployee, { error, data }] = useMutation(ADD_EMPLOYEE);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addEmployee({
        variables: { ...formState },
      });

      Auth.login(data.addEmployee.token);
    } catch (e) {
      console.error(e);
    }
  };

    return (
      <div className="card bg-white card-rounded w-50">
        <div className="card-header text-center">
          <h1>Please Complete the following to register</h1>
        </div>
        <div className="card-body m-5">
        
          {data ? (
              <p>
                You did it!!{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
        
        
        <form onSubmit={handleFormSubmit}> 
        <div>
            <label className='p-2'>What is your name?</label>
            <input
              type="text"
              name='name'
              placeholder='Please enter your name here'
              value={formState.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className='p-2'>What is your email?</label>
            <input
              type="email"
              name='email'
              placeholder='Please enter your email here'
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className='p-2'>What would you like your password to be?</label>
            <input
              type="password"
              name='password'
              placeholder='Please enter your password here'
              value={formState.password}
              onChange={handleChange}
            />
          </div>
          {/* <div>
            <label className='p-2'>What is your role?</label>
            <br></br>
            <input
              type="radio"
              id="Electrician"
              name='role'
              value="Electrician"
              onChange={handleChange}
            />
            <label>Electrician</label>
            <br></br>
            <input
              type="radio"
              id="Plumber"
              name='role'
              value="Plumber"
              onChange={handleChange}
            />
            <label>Plumber</label>
            <br></br>
            <input
              type="radio"
              id="Carpenter"
              name='role'
              value="Carpenter"
              onChange={handleChange}
            />
            <label>Carpenter</label>
          </div> */}
          <div>
          <br></br>
            <button type='submit' className='btn btn-danger m-1'>Register</button>
          </div>
          </form>
        
        )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
        
        </div>
      </div>
    );
  };
  
  export default Register;