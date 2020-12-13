import React, { Component } from "react";

import Navbar from "../components/client/common/Navbar";
import CommonReg from "../components/client/register/CommonReg";
import Footer from "../components/client/common/Footer";

import "../styles/user-account.css";

export default class Register extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <nav aria-label="breadcrumb" className="cus-breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Register
            </li>
          </ol>
        </nav>
        <CommonReg />
        <Footer />
      </React.Fragment>
    );
  }
}
