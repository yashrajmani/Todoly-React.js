import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//import Logo from "./assets/TODOLY.png";

export default function Header(probs) {
  return (
    <nav
      className="navbar navbar-dark "
      style={{ backgroundColor: "#004AAD" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="./assets/TODOLY.png"
            alt="Bootstrap"
            width="150"
            height="50"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home 🏠
              </Link>
            </li>


            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About 🔍
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                More 💬
              </Link>
            </li>
         


          </ul>

          {probs.search ? (
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
}

Header.prototype = {
  title: PropTypes.string,
  search: PropTypes.bool,
};

Header.defaultProps = {
  title: "Default Title",
  search: true,
};
