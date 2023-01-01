import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//import Logo from "./assets/TODOLY.png";

export default function Header(probs) {
  return (


  null
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
