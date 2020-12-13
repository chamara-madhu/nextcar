import React, { Component } from "react";

import ShopLogo from "../../../images/user.png";

import "../../../styles/user-drawer.css";

export default class UserDrawer extends Component {
  render() {
    return (
      <div className="user-drawer" style={{ width: 300 }}>
        <div className="account-details">
          <i
            class="far fa-times-circle close-filters"
            onClick={this.props.closeDrawer}
          ></i>
          <img src={ShopLogo} className="shop-logo" alt="shop logo" />
          <p className="shop-name">ArtCAfe</p>
          <p className="shop-email">artcafe@gmail.com</p>
          <p className="status">status</p>
          <p className="live">LIVE</p>
        </div>
      </div>
    );
  }
}
