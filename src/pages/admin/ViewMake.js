// import packages
import React, { useState, useEffect } from "react";
import axios from "axios";

// import components
import Navbar from "../../components/admin/Navbar";
import Sidebar from "../../components/admin/Sidebar";

import "../../styles/admin/common.css";

function ViewMake() {
  const [makes, setMakes] = useState([]);

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

  return (
    <div className="container-fluid p-0">
      <Navbar />
      <div className="row m-0">
        <Sidebar />

        <div className="content-col">
          <nav aria-label="breadcrumb" className="inner-breadcrumb">
            <ol className="breadcrumb rounded-0 mb-0">
              <li className="breadcrumb-item" aria-current="page">
                Manage Make
              </li>
            </ol>
          </nav>

          <div className="container-fluid inner-content py-4">
            <div className="ad-form-sec">
              <div className="form-row header">
                <div className="form-group col px-sm-2 mb-0">
                  <p className="heading mb-0">Manage Makes</p>
                  <p className="info-desc">You can view, edit and delete.</p>
                </div>
              </div>

              <div className="content">
                <table className="table table-hover common-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Make</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {makes.map((el, i) => (
                      <tr key={i}>
                        <td>{el.id}</td>
                        <td>{el.makeName}</td>
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

export default ViewMake;
