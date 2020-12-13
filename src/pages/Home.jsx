import React, { Component } from "react";

import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Drawer,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import Navbar from "../components/client/common/Navbar";
import Filterbar from "../components/client/home/Filterbar";
import Post from "../components/client/home/Post";
import FilterMobile from "../components/client/home/FilterMobile";
import Footer from "../components/client/common/Footer";

import "../styles/home.css";

export default class Home extends Component {
  state = {
    posts: [
      {
        name: "axio",
        modal: {
          id: 1,
          name: "axio",
        },
      },
    ],
    itemsPerPage: 1,

    leftDrawer: false,
  };

  toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({ leftDrawer: open });
  };

  render() {
    // pagination
    const noOfPages = Math.ceil(
      this.state.posts.length / this.state.itemsPerPage
    );
    const indexOfLast = this.state.page * this.state.itemsPerPage;
    const indexOfFirst = indexOfLast - this.state.itemsPerPage;
    const currentItems = this.state.posts.slice(indexOfFirst, indexOfLast);
    return (
      <React.Fragment>
        <Navbar />

        <div className="container-fluid home-page p-0">
          <div className="row m-0">
            <div className="filter-bar">
              <Filterbar />

              <Drawer
                anchor={"left"}
                open={this.state.leftDrawer}
                onClose={this.toggleDrawer(false)}
              >
                <FilterMobile />
              </Drawer>
            </div>
            <div className="content">
              <div className="sort-result-div">
                <i
                  className="fas fa-filter show-filter-menu-btn"
                  onClick={this.toggleDrawer(true)}
                >
                  {" "}
                  <span style={{ fontFamily: "Roboto", cursor: "pointer" }}>
                    Filter
                  </span>
                </i>
                <p className="post-results pt-4 d-inline-block">
                  {this.state.posts.length > 0
                    ? `Showing ${indexOfFirst + 1} - ${
                        indexOfFirst + currentItems.length
                      } out of ${this.state.posts.length} posts`
                    : "No Posts"}
                </p>
                <div style={{ display: "inline-block", float: "right" }}>
                  <FormControl className="post-sort-by">
                    <InputLabel id="demo-simple-select-label">
                      Sort By
                    </InputLabel>
                    <Select value={this.state.sort} onChange={this.handleSort}>
                      <MenuItem className="sort-value" value="latest" selected>
                        Latest First
                      </MenuItem>
                      <MenuItem className="sort-value" value="oldest">
                        Oldest First
                      </MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <Post posts={this.state.posts} />

              <div className="row m-0">
                <div className="col p-0">
                  <div className="pagination-div">
                    {noOfPages > 1 ? (
                      <Pagination
                        count={noOfPages}
                        page={this.state.page}
                        onChange={this.handlePagination}
                        className="pagi"
                      />
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
