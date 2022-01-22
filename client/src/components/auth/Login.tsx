import React, { Fragment, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import axios from "axios";

//Components
import Alert from "../layout/Alert";

//Actions
import { setAlert } from "../../actions/alert";
let minLength: number = 6
const Login = () => {
  const [formData, setFormData] = useState({
    nameMail: "",
    password: "",
  });
  const { nameMail, password,  } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault()
      /* axios.post('/login', body: {
      nameMail: nameMail,
      password: password
  
      }) */
      console.log("Login Success");
    }
  return (
    <Fragment>
      <Alert />
      <section className="register">
        <h1>Login</h1>
        <p>Login To Your Account</p>
        <form className="register-form" onSubmit={(e) => onSubmit(e)}>
          <div className="form-item">
            <input
              type="text"
              placeholder="Name/Email"
              name="name"
              onChange={(e) => onChange(e)}
              required
            />
          </div>
        
          <div className="form-item">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password"
              minLength={minLength}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <input type="submit" className="" value="Register" />
        </form>
        <p>
         Don't Have an Account? <Link to="/register">Register</Link>
        </p>
      </section>
    </Fragment>
  );
};

export default Login;
