import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

function LogInForm() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [loginUser, { error }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { id, value } = event.target;

    setFormState({
        ...formState,
        [id]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
        // execute addUser mutation with form data
        const { data } = await loginUser({
            variables: { ...formState }
        });

        Auth.login(data.login.token);
    } catch (error) {
        console.error(error);
    }
  };

  return (
    <div className="row">
      <h1 className="logIn">Log In</h1>
      <form className="col s12" onSubmit={handleFormSubmit}>
        <div className="row">
          <div className="input-field col s12">
            <input id="email" type="email" className="validate" onChange={handleChange} />
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="password" type="password" className="validate" onChange={handleChange} />
            <label htmlFor="password">Password</label>
          </div>
        </div>

        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default LogInForm;
