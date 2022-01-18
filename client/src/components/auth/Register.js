import React, { Fragment, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//Components
import Alert from "../layout/Alert";

//Actions
import { setAlert } from "../../actions/alert";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      //   console.log("Passwords Do Not Match");
      setAlert("Passwords Do Not Match !", "danger");
    } else {
      console.log("Register Success");
    }
  };
  return (
    <Fragment>
      <Alert />
      <section className="register">
        <h1>Register</h1>
        <p>Create Your Account</p>
        <form className="register-form" onSubmit={(e) => onSubmit(e)}>
          <div className="form-item">
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="form-item">
            <input
              type="email"
              placeholder="Email Adress"
              name="email"
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="form-item">
            <input
              type="password"
              placeholder="Password"
              name="password"
              minLength="6"
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="form-item">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              minLength="6"
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <input type="submit" className="" value="Register" />
        </form>
        <p>
          Already Have an Account? <Link to="/login">Login</Link>
        </p>
      </section>
    </Fragment>
  );
};

export default connect()(Register);
