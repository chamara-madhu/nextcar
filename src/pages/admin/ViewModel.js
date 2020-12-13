// import packages
import React, { useState, useEffect } from "react";
import axios from "axios";

// import components
import Navbar from "../../components/admin/Navbar";
import Sidebar from "../../components/admin/Sidebar";

import "../../styles/admin/common.css";

function ViewModel() {
  const [models, setModels] = useState([]);
  const [makes, setMakes] = useState([]);
  const [make, setMake] = useState(0);

  useEffect(() => {
    axios
      .get(`https://riyalk.herokuapp.com/api/makemodel/getAllModel`)
      .then((res) => {
        // setLoading(false);

        setModels(res.data);
      })
      .catch((err) => {
        console.log(err);
        // setLoading(false);
      });

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

  const filterModels = models.filter((el) => {
    if (make) {
      return el.makeId === parseInt(make);
    } else {
      return el.makeId !== null;
    }
  });

  return (
    <div className="container-fluid p-0">
      <Navbar />
      <div className="row m-0">
        <Sidebar />

        <div className="content-col">
          <nav aria-label="breadcrumb" className="inner-breadcrumb">
            <ol className="breadcrumb rounded-0 mb-0">
              <li className="breadcrumb-item" aria-current="page">
                Manage Model
              </li>
            </ol>
          </nav>

          <div className="container-fluid inner-content py-4">
            <div className="ad-form-sec">
              <div className="form-row header">
                <div className="form-group col px-sm-2 mb-0">
                  <p className="heading mb-0">Manage Models</p>
                  <p className="info-desc">You can view, edit and delete.</p>
                </div>
              </div>

              <div className="content">
                <div className="form-row mb-4">
                  <div className="form-group col-md-6 px-sm-2 m-auto">
                    <select
                      className="form-control"
                      name="make"
                      onChange={(e) => setMake(e.target.value)}
                      value={make}
                    >
                      <option defaultValue>-- All --</option>
                      {makes.map((el, i) => (
                        <option value={el.id} key={i}>
                          {el.makeName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <table className="table table-hover common-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Model</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filterModels.map((el, i) => (
                      <tr key={i}>
                        <td>{el.id}</td>
                        <td>{el.modelName}</td>
                        <td align="center">
                          <i className="fas fa-pencil-alt mr-3"></i>
                          <i className="fas fa-trash-alt"></i>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewModel;
