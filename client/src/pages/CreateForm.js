// ON SUBMIT OR LINK TO ROUTE? NEED TO VERIFY LOGIN WITH EITHER ACTION AND THEN GO TO PROFILE OR RETURN HERE WITH ERROR MESSAGE
const CreateForm = () => {
    return (
      <div className="card bg-white card-rounded w-50">
        <div className="card-header bg-dark text-center">
          <h1>Please complete the log below</h1>
        </div>
        <div className="card-body m-5">
        <form> 
          <div>
              {/* Auto fill with user's name */}
            <label className='p-2'>Name:</label>
            <input
              type="text"
              name='name'
            />
          </div>
          <div>
            <label className='p-2'>Hours Workd:</label>
            <input
              type="number"
              name='hours'
            />
          </div>
          <div>
              {/* auto fill with user's role */}
            <label className='p-2'>Role:</label>
            <input
              type="text"
              name='role'
            />
          </div>
          <div>
            <label className='p-2'>Job Site:</label>
            <input
              type="text"
              name='site'
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
  