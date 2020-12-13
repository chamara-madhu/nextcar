import React, { Component } from "react";

import Post from "../home/Post";

import { posts } from "../../../pages/post";

export default class SimilarProd extends Component {
  render() {
    return (
      <div className="similar-prod mb-5">
        <div className="row m-0">
          <div className="col p-0">
            <p className="heading">SIMILAR ADS</p>
            <Post posts={posts} />
          </div>
        </div>
      </div>
    );
  }
}
