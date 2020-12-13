import React, { useState } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import axios from "axios";

import "../../../styles/login-reg.css";

function CommonReg() {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [conPasswordErr, setConPasswordErr] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
      setNameErr("");
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
      setEmailErr("");
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
      setPasswordErr("");
    } else {
      setConPassword(e.target.value);
      setConPasswordErr("");
    }
  };

  // validate
  const validate = () => {
    let nameErr = "";
    let emailErr = "";
    let passwordErr = "";
    let conPasswordErr = "";

    if (!name) {
      nameErr = "Name is required";
    }

    if (!email) {
      emailErr = "Email is required";
    } else if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      emailErr = "Email is invalid";
    }

    if (!password) {
      passwordErr = "Password is required";
    } else if (password.length < 8 || password.length > 20) {
      passwordErr = "Password must be between 8 to 20 characters long";
    } else if (
      !password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      )
    ) {
      passwordErr =
        "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character";
    }

    if (!conPassword) {
      conPasswordErr = " Confirm password is required";
    } else if (password !== conPassword) {
      conPasswordErr = "Passwords should match";
    }

    if (nameErr || emailErr || passwordErr || conPasswordErr) {
      setNameErr(nameErr);
      setEmailErr(emailErr);
      setPasswordErr(passwordErr);
      setConPasswordErr(conPasswordErr);

      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);

      const data = {
        username: name,
        email: email,
        password: password,
      };

      axios
        .post(`https://riyalk.herokuapp.com/api/auth/signup`, data)
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
          <p className="heading">CREATE AN ACCOUNT</p>
          <form noValidate>
            <div className="form-group p-0">
              <label htmlFor="name">
                Name <span className="required-tag">*</span>
              </label>
              <input
                type="name"
                className={classnames("form-control", {
                  "is-invalid": nameErr,
                })}
                id="name"
                name="name"
                onChange={handleChange}
                value={name}
              />
              <div className="invalid-feedback">{nameErr}</div>
            </div>
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
            <div className="form-group p-0">
              <label htmlFor="password">
                Password <span className="required-tag">*</span>
              </label>
              <input
                type="password"
                className={classnames("form-control", {
                  "is-invalid": passwordErr,
                })}
                id="password"
                name="password"
                onChange={handleChange}
                value={password}
              />
              <div className="invalid-feedback">{passwordErr}</div>
            </div>
            <div className="form-group p-0 mb-0">
              <label htmlFor="conPassword">
                Confirm Password <span className="required-tag">*</span>
              </label>
              <input
                type="password"
                className={classnames("form-control", {
                  "is-invalid": conPasswordErr,
                })}
                id="conPassword"
                name="conPassword"
                onChange={handleChange}
                value={conPassword}
              />
              <div className="invalid-feedback">{conPasswordErr}</div>
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
              {loading ? "" : "Create Now"}
            </button>
          </form>
          <p className="mt-3 text-center" style={{ fontSize: 13 }}>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CommonReg;
