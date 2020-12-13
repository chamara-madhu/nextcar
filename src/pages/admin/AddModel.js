// import packages
import React, { useState, useEffect } from "react";
import axios from "axios";
import classnames from "classnames";

// import components
import Navbar from "../../components/admin/Navbar";
import Sidebar from "../../components/admin/Sidebar";

import "../../styles/admin/common.css";

function AddModel() {
  const [makes, setMakes] = useState([]);
  const [make, setMake] = useState(0);
  const [makeErr, setMakeErr] = useState("");
  const [model, setModel] = useState("");
  const [modelErr, setModelErr] = useState("");

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "make") {
      setMake(e.target.value);
      setMakeErr("");
    } else if (e.target.name === "model") {
      setModel(e.target.value);
      setModelErr("");
    }
  };

  useEffect(() => {
    axios
      .get(`https://riyalk.herokuapp.com/api/makemodel/getAll`)
      .then((res) => {
        // setLoading(false);
        setMakes(res.data);
      })
      .catch((err) => {
        console.log(err);
        // setLoading(false);
      });
  }, []);

  // validate
  const validate = () => {
    let makeErr = "";
    let modelErr = "";

    if (!make) {
      makeErr = "Make is required";
    }

    if (!model) {
      modelErr = "Model is required";
    }

    if (makeErr || modelErr) {
      setMakeErr(makeErr);
      setModelErr(modelErr);

      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);

      const data = {
        makeId: make,
        modelName: model,
      };

      axios
        .post(`https://riyalk.herokuapp.com/api/makemodel/saveModel`, data)
        .then((res) => {
          setLoading(false);

          setMake("");
          setModel("");
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
                Add model
              </li>
            </ol>
          </nav>

          <div className="container-fluid inner-content py-4">
            <div className="ad-form-sec">
              <form noValidate>
                <div className="form-row header">
                  <div className="form-group col px-sm-2 mb-0">
                    <p className="heading mb-0">Model</p>
                    <p className="info-desc">Model must be unique. Eg: Axio</p>
                  </div>
                </div>

                <div className="content">
                  <div className="form-row">
                    <div className="form-group col-md-6 px-sm-2 mb-4">
                      <label htmlFor="make">
                        Make <span className="required-tag">*</span>
                      </label>
                      <select
                        className={classnames("form-control", {
                          "is-invalid": makeErr,
                        })}
                        id="make"
                        name="make"
                        onChange={handleChange}
                        value={make}
                      >
                        <option defaultValue hidden>
                          -- Select --
                        </option>
                        {makes.map((el, i) => (
                          <option value={el.id} key={i}>
                            {el.makeName}
                          </option>
                        ))}
                      </select>
                      <div className="invalid-feedback">{makeErr}</div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6 px-sm-2 mb-4">
                      <label htmlFor="model">
                        Model <span className="required-tag">*</span>
                      </label>
                      <input
                        type="text"
                        className={classnames("form-control", {
                          "is-invalid": modelErr,
                        })}
                        id="model"
                        name="model"
                        onChange={handleChange}
                        value={model}
                      />
                      <div className="invalid-feedback">{modelErr}</div>
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

export default AddModel;
