import React from "react";
import PropTypes from "prop-types";

export default function Header(props) {
  return (
    <nav classname="navbar navbar-expand-lg navbar-light bg-light">
      <div classname="container-fluid">
        <a classname="navbar-brand" href="0">
          {props.title}
        </a>
        <button
          classname="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
        >
          <span classname="navbar-toggler-icon"></span>
        </button>
        <div classname="collapse navbar-collapse" id="navbarSupportedContent">
          <ul classname="navbar-nav me-auto mb-2 mb-lg-0">
            <li classname="nav-item">
              <a classname="nav-link active" aria-current="page" href="0">
                Home
              </a>
            </li>
          </ul>
          <li classname="nav-item">
            <a classname="nav-link" href="0">
              About
            </a>
          </li>
          {props.searchBar ? (
            <form classname="d-flex" role="search">
              <input
                classname="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button classname="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          ) : (
            "No Search Bar"
          )}
        </div>
      </div>
    </nav>
  );
}

Header.defaultProps = {
  title: "Your Title Here",
  searchBar: "Your title here",
};

Header.propTypesropTypes = {
  title: PropTypes.string,
};
