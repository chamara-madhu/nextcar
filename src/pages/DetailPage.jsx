import React, { Component } from "react";

import "../styles/detail.css";

import Navbar from "../components/client/common/Navbar";
import Detail from "../components/client/detailPage/Detail";
import SimilarProd from "../components/client/detailPage/SimilarProd";
import Footer from "../components/client/common/Footer";

import "../styles/home.css";
import "../styles/breadcrumb.css";

export default class DetailPage extends Component {
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
              Jaguar XF3.0 V6 (2012) 2200cc
            </li>
          </ol>
        </nav>
        <Detail />
        <SimilarProd />
        <Footer />
      </React.Fragment>
    );
  }
}
