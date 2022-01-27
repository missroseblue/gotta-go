import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

function SignUpForm() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
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
        const { data } = await addUser({
            variables: { ...formState }
        });

        Auth.login(data.addUser.token);
    } catch (error) {
        console.error(error);
    }
  };

  return (
    <div className="row">
      <h1 className="signUp">Become A Member</h1>
      <form className="col s12" onSubmit={handleFormSubmit}>
        <div className="row">
          <div className="input-field col s6">
            <input id="username" type="text" className="validate" onChange={handleChange} />
            <label htmlFor="username">Username</label>
          </div>
        </div>

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
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
