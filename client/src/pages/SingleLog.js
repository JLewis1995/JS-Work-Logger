import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_LOG } from "../utils/mutations";
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { QUERY_SINGLE_LOG } from '../utils/queries';


const SingleLog = () => {
  const { logId } = useParams();
  console.log(logId);

  const log = useQuery(QUERY_SINGLE_LOG, {
    // pass URL parameter
    variables: { logId: logId },
  });

  // const log = result?.log
  console.log(`this is the return from the query:`);
  console.log(log);



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
            <label className="p-2">{log.name}</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name here"
              onChange={handleChange}
              // value={formState.name}
            />
          </div>
          <div>
            <label className="p-2">{log.hours_worked}</label>
            <input
              type="number"
              name="hours_worked"
              // placeholder="Enter Hours Here"
              onChange={handleChange}
              value={formState.hours_worked}
            />
          </div>
          <div>
            <label className="p-2">{log.role}</label>
            <input
              type="text"
              name="role"
              // placeholder="Enter your role here"
              onChange={handleChange}
              value={formState.role}
            />
          </div>
          <div>
            <label className="p-2">{log.job_site}</label>
            <input
              type="text"
              name="job_site"
              // placeholder="Enter jobsite # here"
              onChange={handleChange}
              value={formState.job_site}
            />
          </div>
          <div>
            <label className="p-2">{log.comments}</label>
            <textarea
              name="comments"
              // placeholder="Enter additional notes here"
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

export default SingleLog;
