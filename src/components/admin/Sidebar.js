import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

function Sidebar(props) {
  const [makeAcco, setMakeAcco] = useState(true);
  const [modelAcco, setModelAcco] = useState(true);

  return (
    <div className="admin-sidebar-col">
      <div className="fixed-div">
        <div
          className={makeAcco ? "accordion active" : "accordion"}
          onClick={() => setMakeAcco((makeAcco) => !makeAcco)}
        >
          Make
        </div>
        {makeAcco ? (
          <div className="panel">
            <Link
              to="/admin/add-make"
              className={
                props.history.location.pathname === "/admin/add-make"
                  ? "active-tab"
                  : ""
              }
            >
              <i className="fas fa-plus mr-2"></i> Add Make
            </Link>
            <Link
              to="/admin/manage-make"
              className={
                props.history.location.pathname === "/admin/manage-make"
                  ? "active-tab"
                  : ""
              }
            >
              <i className="fas fa-pencil-alt mr-2"></i> Manage Make
            </Link>
          </div>
        ) : null}
        <div
          className={modelAcco ? "accordion active" : "accordion"}
          onClick={() => setModelAcco((modelAcco) => !modelAcco)}
        >
          Model
        </div>
        {modelAcco ? (
          <div className="panel">
            <Link
              to="/admin/add-model"
              className={
                props.history.location.pathname === "/admin/add-model"
                  ? "active-tab"
                  : ""
              }
            >
              <i className="fas fa-plus mr-2"></i> Add Model
            </Link>
            <Link
              to="/admin/manage-model"
              className={
                props.history.location.pathname === "/admin/manage-model"
                  ? "active-tab"
                  : ""
              }
            >
              <i className="fas fa-pencil-alt mr-2"></i> Manage Model
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default withRouter(Sidebar);
