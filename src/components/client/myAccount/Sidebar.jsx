import React from "react";
import { Link, withRouter } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div className="side-bar">
      <div className="mt-4">
        <Link to="/user-account">
          <i className="fas fa-user-circle profile-pic"></i>
        </Link>
      </div>

      <h5 className="text-light">Hi Chamara</h5>
      <div className="list-group mb-3">
        <Link
          to="/update-profile"
          className={
            props.history.location.pathname === "/my-account/create-an-ad"
              ? "sidebar-link sidebar-link-active"
              : "sidebar-link"
          }
        >
          Create an Ad
        </Link>
        <Link to="/my-orders/online" className="sidebar-link">
          My Ads
        </Link>
        <Link to="/change-password" className="sidebar-link">
          Account Settings
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Sidebar);
