import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_LOG } from "../utils/mutations";
import { useNavigate } from "react-router-dom";

const CreateForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    hours_worked: "",
    role: "",
    job_site: "",
    comments: "",
  });

  let navigate = useNavigate();

  const [createLog, { error, data }] = useMutation(ADD_LOG);

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
    try {
      // use ADD_LOG mutation to create database entry with current form state data
      const { data } = await createLog({
        variables: {
          name: formState.name,
          hours_worked: parseInt(formState.hours_worked),
          role: formState.role,
          job_site: parseInt(formState.job_site),
          comments: formState.comments,
        },
      });
      // reset form state
      setFormState({
        name: "",
        hours_worked: "",
        role: "",
        job_site: "",
        comments: "",
      });
      // return to profile after form submission
      navigate(`/profile`);
    } catch (err) {
      console.error(err);
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
            <label className="p-2">Name:</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formState.name}
            />
          </div>
          <div>
            <label className="p-2">Hours Worked:</label>
            <input
              type="number"
              name="hours_worked"
              onChange={handleChange}
              value={formState.hours_worked}
            />
          </div>
          <div>
            <label className="p-2">Role:</label>
            <input
              type="text"
              name="role"
              onChange={handleChange}
              value={formState.role}
            />
          </div>
          <div>
            <label className="p-2">Job Site:</label>
            <input
              type="text"
              name="job_site"
              onChange={handleChange}
              value={formState.job_site}
            />
          </div>
          <div>
            <label className="p-2">Comments:</label>
            <textarea
              name="comments"
              onChange={handleChange}
              value={formState.comments}
            />
          </div>
          <div>
            <button type="submit" className="btn btn-danger m-1">
              Submit Log
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateForm;
