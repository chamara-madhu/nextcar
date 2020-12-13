// import packages
import React, { Component } from "react";
import { Link } from "react-router-dom";

// import css
// import "../../css/client/userAccountStyle.css";

// import components
import Navbar from "../components/client/common/Navbar";
import Sidebar from "../components/client/myAccount/Sidebar";
import CreateAdForm from "../components/client/myAccount/CreateAdForm";
import Footer from "../components/client/common/Footer";
// import PageTitle from "../../components/client/PageTitle";

// load isAuthenticated method
// import { isAuthenticated } from "../../auth/auth.js";

export default class CreateAd extends Component {
  render() {
    // get authenticated user info
    // const {
    //   user: { fName, lName, mobile, email },
    // } = isAuthenticated();

    return (
      <React.Fragment>
        {/* <PageTitle title="My Profile - Ransis Arcade" /> */}

        <Navbar />

        <nav aria-label="breadcrumb" className="cus-breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Create an Ad
            </li>
          </ol>
        </nav>

        <div className="container my-5">
          <div className="row">
            <Sidebar />

            <div className="profile-content px-0">
              <h5>Create an Ad</h5>
              <CreateAdForm />
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
