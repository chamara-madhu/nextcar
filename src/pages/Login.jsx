import React, { Component } from "react";

import "../styles/detail.css";

import Navbar from "../components/client/common/Navbar";
import CommonLogin from "../components/client/login/CommonLogin";
import Footer from "../components/client/common/Footer";

import "../styles/home.css";
import "../styles/breadcrumb.css";

export default class Login extends Component {
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
              Login
            </li>
          </ol>
        </nav>
        <CommonLogin />
        <Footer />
      </React.Fragment>
    );
  }
}
