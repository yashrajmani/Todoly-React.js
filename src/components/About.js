import React from "react";

let todostyle = {
  color: "white",
  background: "linear-gradient(to top ,#5D5D5D,#131313 , #0a0707)",
  borderRadius: "10px",
  padding: "10px",
  margin: "20px",
  justifyContent: "center",
  alignItems: "center",
};

let stylebody = {
  color: "white",
  padding: "30px",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "justify",
};
let stylehead = {
  color: "yellow",
  fontSize: "35px",
  display: "flex",
  padding: "3px",
  justifyContent: "center",
  alignItems: "center",
};

export const About = () => {
  const visit = () => {
    const url = "https://linktr.ee/yashrajmani";
    window.open(url, "_blank");
  };

  const visitrepo = () => {
    const url = "https://github.com/yashrajmani/Todoly-React.js";
    window.open(url, "_blank");
  };

  return (
    <>
      <div style={stylehead}>Thank You!</div>
      <hr />

      <p style={stylebody}>
        The project is a web-based application that utilizes the power of
        React.js to create a dynamic and interactive user interface. The app is
        built using React.js, a popular JavaScript library for building user
        interfaces, and is designed to be fast and responsive The app allows
        users to create, view, and manage their todo items. When the user opens
        the app, they are presented with a list of their current todos. 😉
        <br />
        The user interface is intuitive and easy to navigate, with clear and
        concise instructions and helpful graphics and icons. Overall, the
        project is a powerful and flexible tool that helps users achieve their
        tasks and get things done. 🤗
      </p>
      <hr />



     

      <p style={stylebody}>
        Welcome to the Todoly project! We are always looking for talented and
        passionate individuals to contribute to our open source project. If you
        are interested in contributing, please review our contribution
        guidelines and send us a pull request.
        <br />
        If you have any questions or feedback about Todoly, please don't
        hesitate to contact the developer.They would be happy to assist you with
        any issues or answer any questions you may have.🤗 <br />
        <br /> Thank you for using Todoly! 🥰
      </p>

      <hr />

      <div style={todostyle}>
        <h5>Feel free to reach me out , Regards Yash Raj Mani</h5>
        <button className="btn btn-info" onClick={visit}>
          Reach Out 👨‍💻
        </button>
      </div>

      <div style={todostyle}>
        <h5>For Contributions/Learning- Check Out on GITHUB!</h5>
        <button className="btn btn-info" onClick={visitrepo}>
          VISIT ⚙️
        </button>
      </div>

      <hr />
    </>
  );
};
