import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  //   let footerStyle = {
  //     position: "relative",
  //     width: "100%",
  //     top: "100vh",
  //   }

  return (
    <footer className=" text-light py-2" style={{ backgroundColor: "#004AAD" }}>
      <nav
        className="navbar navbar-dark "
        style={{ backgroundColor: "#004AAD" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="./assets/TODOLY.png"
              alt="Todoly"
              width="150"
              height="50"
            />
          </Link>
          <Link className="navbar-brand" to="/about">
            <img
              src="./assets/logoicon.png"
              alt="About"
              width="120"
              height="60"
            />
          </Link>
        </div>
      </nav>

      <hr />

      <p className="text-center">Made with ❤️ & React.js by <a style={{color:'yellow'}} href="https://www.yashrajmani.co/#/" target='_blank'>Yash Raj Mani </a></p>
    </footer>
  );
}
