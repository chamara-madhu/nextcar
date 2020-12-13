import React, { useState } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import axios from "axios";

import "../../../styles/login-reg.css";

function CommonLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
      setEmailErr("");
    } else {
      setPassword(e.target.value);
      setPasswordErr("");
    }
  };

  // validate
  const validate = () => {
    let emailErr = "";
    let passwordErr = "";

    if (!email) {
      emailErr = "Email is required";
    } else if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      emailErr = "Email is invalid";
    }

    if (!password) {
      passwordErr = "Password is required";
    }

    if (emailErr || passwordErr) {
      setEmailErr(emailErr);
      setPasswordErr(passwordErr);

      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);

      const data = {
        username: "kaving",
        password: password,
      };

      axios
        .post(`https://riyalk.herokuapp.com/api/auth/login`, data)
        .then((res) => {
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  };

  return (
    <div className="container login-reg-container">
      <div className="row m-0">
        <div className="col p-0">
          <p className="heading">LOGIN</p>
          <form noValidate>
            <div className="form-group p-0">
              <label htmlFor="email">
                Email <span className="required-tag">*</span>
              </label>
              <input
                type="email"
                className={classnames("form-control", {
                  "is-invalid": emailErr,
                })}
                id="email"
                name="email"
                onChange={handleChange}
                value={email}
              />
              <div className="invalid-feedback">{emailErr}</div>
            </div>
            <div className="form-group p-0 mb-0">
              <label htmlFor="inputPassword4">
                Password <span className="required-tag">*</span>
              </label>
              <input
                type="password"
                className={classnames("form-control", {
                  "is-invalid": passwordErr,
                })}
                id="pwd"
                name="password"
                onChange={handleChange}
                value={password}
              />
              <div className="invalid-feedback">{passwordErr}</div>
            </div>

            <button
              type="submit"
              className="btn-submit mt-4"
              onClick={handleSubmit}
            >
              {loading ? (
                <div
                  className="spinner-border spinner-border-sm text-light"
                  role="status"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              ) : null}
              {loading ? "" : "Login"}
            </button>
          </form>
          <Link
            to="forget-password"
            data-toggle="modal"
            data-target="#forgetpasswordModel"
            className="forget-password-link"
          >
            Forgot your Password?
          </Link>
          <p className="mt-2 text-center" style={{ fontSize: 13 }}>
            New to cars.lk? <Link to="/Create-an-account">Join now</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CommonLogin;
