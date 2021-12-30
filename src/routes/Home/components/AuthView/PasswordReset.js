import React from "react";  

 const PasswordReset = ({onViewChange}) => (

    <div>
        <form style={{'justifyContent':'center'}} className="form-inline">
      <div className="form-group mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="email@email.com"
          required
        />
      </div>
      
      <button type="submit" style={{'marginLeft':"5px"}} className="btn btn-primary mb-2">
        SignUp
      </button>
      
    </form>
    <p style={{'textAlign':'center'}}>If you are already a member of our site, 
      <a href="#" onClick={ e => {
        e.preventDefault();
        onViewChange(1);
      }} > click here </a>to log in.
    </p>
    <p style={{'textAlign':'center'}}><a href="#" onClick={ e => {
        e.preventDefault();
        onViewChange(2);
      }} >Click</a> to become a member
       
    </p>
    </div>
)

export default PasswordReset