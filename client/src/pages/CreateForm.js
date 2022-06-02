import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_FORM } from '../utils/mutations';
import Auth from '../utils/auth';

const CreateForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    hours_worked: '',
    role: '',
    job_site: '',
    comments: '',
  });
  const [createForm, { error, data }] = useMutation(CREATE_FORM);

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
      const { data } = await createForm({
        variables: { ...formState },
      });

      Auth.login(data.createForm.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Please complete the log below</h1>
      </div>
      <div className="card-body m-5">
        <form onSubmit={handleFormSubmit}>
          <div>
            {/* Auto fill with user's name */}
            <label className='p-2'>Name:</label>
            <input
              type="text"
              name='name'
              onChange={handleChange}
            />
          </div>
          <div>
            <label className='p-2'>Hours Worked:</label>
            <input
              type="number"
              name='hours'
              onChange={handleChange}
            />
          </div>
          <div>
            {/* auto fill with user's role */}
            <label className='p-2'>Role:</label>
            <input
              type="text"
              name='role'
              onChange={handleChange}
            />
          </div>
          <div>
            <label className='p-2'>Job Site:</label>
            <input
              type="text"
              name='site'
              onChange={handleChange}
            />
          </div>
          <div>
            <button type='submit' className='btn btn-danger m-1'>Submit Log</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateForm;
