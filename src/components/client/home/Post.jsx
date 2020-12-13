import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import Gear from "../../../images/gear.png";

import "../../../styles/post.css";

export default class Post extends Component {
  render() {
    return (
      <React.Fragment>
        xxx
        {/* {this.props.posts.map((el, i) => (
          <Link to="/fgfgfd" className="post-link">
            <div className="post" key={i}>
              <div className="img-div">
      
                <img src={el.img} alt="name" />
              </div>

              <div className="post-content">
                <p className="name">
                  {el.make.name} {el.modal.name} ({el.year}) {el.capacity} cc
                </p>
                <div className="row m-0">
                  <div className="col p-0">
                    <p className="location">
                      <i class="fas fa-map-marker-alt mr-1"></i>{" "}
                      {el.location.city}, {el.location.district}
                    </p>
                  </div>
                </div>
                <p className="size">
                  <span>
                    <i class="fas fa-tachometer-alt mr-1"></i> {el.mileage} km
                  </span>
                  <span>
                    <img src={Gear} alt="transmissin" width="15" />{" "}
                    {el.transmission.name}
                  </span>
                  <span>
                    <i class="fas fa-gas-pump mr-1"></i> {el.fuel.name}
                  </span>
                </p>

                <div className="row m-0">
                  <div className="col p-0">
                    <p className="price">Rs. {el.price}</p>
                  </div>
                  <div className="col p-0">

                    <p className="postedAt">1 day ago</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))} */}
      </React.Fragment>
    );
  }
}
