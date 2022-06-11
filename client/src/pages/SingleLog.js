import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../utils/mutations";
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QUERY_SINGLE_LOG } from '../utils/queries';


const SingleLog = () => {
  const { logId } = useParams();
  const { data } = useQuery(QUERY_SINGLE_LOG, {
    // pass URL parameter
    variables: { logId: logId },
  });

  const log = data?.log || 'none';

  const [comment, setComment] = useState({
    comment: "",
  }
  );

  const [addComment, { error }] = useMutation(ADD_COMMENT);
  const [characterCount, setCharacterCount] = useState(0);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addComment({
        variables: {
          logId,
          comment,
        },
      });

      setComment('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'comment' && value.length <= 280) {
      setComment(value);
      setCharacterCount(value.length);
    }
};

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Please add a new comment in the space below</h1>
      </div>
      <div className="card-body m-5">
        <form onSubmit={handleFormSubmit}>
          <div>
            <label className="p-2">Name:</label>
            <input
              type="text"
              name="name"
              placeholder={`${log.name}`}
            disabled/>
          </div>
          <div>
            <label className="p-2">Hours Worked:</label>
            <input
              type="number"
              name="hours_worked"
              placeholder={`${log.hours_worked}`}
            disabled/>
          </div>
          <div>
            <label className="p-2">Role:</label>
            <input
              type="text"
              name="role"
              placeholder={`${log.role}`}
            disabled/>
          </div>
          <div>
            <label className="p-2">Job Site:</label>
            <input
              type="text"
              name="job_site"
              placeholder={`${log.job_site}`}
            disabled/>
          </div>
          {/* <span className="p-2">Previous Comments: {log.comments}</span> */}
          <div>
            <label className="p-2">Comments:</label>
            <textarea
              name="comment"
              placeholder="New Comment Here"
              value={comment.comment}
              onChange={handleChange}
            ></textarea>
            <p>{characterCount}</p>
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
