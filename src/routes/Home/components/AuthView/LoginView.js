import React from "react";

const LoginView = ({onViewChange}) => (

  <div>
    <form className="form-inline">
      <div className="form-group mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="email@email.com"
          required
        />
      </div>
      <div className="form-group mx-sm-3 mb-2">
        <input
          type="password"
          className="form-control"
          placeholder="*******"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mb-2">
        Sign In
      </button>
      <a href="" onClick={ e => {
        e.preventDefault();
        onViewChange(3);}} >Reset Password</a>
    </form>
    <p>
      <a href="#" onClick={ e => {
        e.preventDefault();
        onViewChange(2);
      }}>Create an Account</a>
    </p>
  </div>
)

export default LoginView;
