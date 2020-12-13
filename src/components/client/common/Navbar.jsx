import React, { Component } from "react";
import { Link } from "react-router-dom";

import Logo from "../../../images/lovelyarts.png";

import "../../../styles/navbar.css";

export default class Navbar extends Component {
  state = {
    // drawer
    rightDrawer: false,
  };

  // drawer user account
  toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({ rightDrawer: open });
  };

  closeDrawer = () => {
    this.setState({ rightDrawer: false });
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar sticky-top p-3 client-nav-bar">
          <Link to="/">
            <img src={Logo} className="logo" alt="Logo" />
          </Link>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/login" className="nav-link create-ad">
                Create Your Ad
              </Link>
              <Link to="/login" className="nav-link">
                Login
              </Link>
              <Link to="/create-an-account" className="nav-link">
                Register
              </Link>
              <Link className="nav-link" to="/my-account/create-an-ad">
                <i className="far fa-user user-icon"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}
