// import packages
import React, { useState } from "react";
import axios from "axios";
import classnames from "classnames";

// import components
import Navbar from "../../components/admin/Navbar";
import Sidebar from "../../components/admin/Sidebar";

import "../../styles/admin/common.css";

function AddMake() {
  const [make, setMake] = useState("");
  const [makeErr, setMakeErr] = useState("");

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setMake(e.target.value);
    setMakeErr("");
  };

  // validate
  const validate = () => {
    let makeErr = "";

    if (!make) {
      makeErr = "Make is required";
    }

    if (makeErr) {
      setMakeErr(makeErr);

      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);

      const data = {
        makeName: make,
      };

      axios
        .post(`https://riyalk.herokuapp.com/api/makemodel/saveMake`, data)
        .then((res) => {
          setMake("");
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  };

  return (
    <div className="container-fluid p-0">
      <Navbar />
      <div className="row m-0">
        <Sidebar />

        <div className="content-col">
          <nav aria-label="breadcrumb" className="inner-breadcrumb">
            <ol className="breadcrumb rounded-0 mb-0">
              <li className="breadcrumb-item" aria-current="page">
                Add Make
              </li>
            </ol>
          </nav>

          <div className="container-fluid inner-content py-4">
            <div className="ad-form-sec">
              <form noValidate>
                <div className="form-row header">
                  <div className="form-group col px-sm-2 mb-0">
                    <p className="heading mb-0">Make</p>
                    <p className="info-desc">Make must be unique. Eg: Toyota</p>
                  </div>
                </div>

                <div className="content">
                  <div className="form-row">
                    <div className="form-group col-md-6 px-sm-2 mb-4">
                      <label htmlFor="make">
                        Make <span className="required-tag">*</span>
                      </label>
                      <input
                        type="text"
                        className={classnames("form-control", {
                          "is-invalid": makeErr,
                        })}
                        id="make"
                        name="make"
                        onChange={handleChange}
                        value={make}
                      />
                      <div className="invalid-feedback">{makeErr}</div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-submit mt-3"
                  onClick={handleSubmit}
                  style={{ width: 100, float: "right" }}
                >
                  {loading ? (
                    <div
                      className="spinner-border spinner-border-sm text-light"
                      role="status"
                    >
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : null}
                  {loading ? "" : "Add"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMake;
