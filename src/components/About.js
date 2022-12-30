import React from "react";





let todostyle = {
  color:"white",
  background:"linear-gradient(to top ,#5D5D5D,#131313 , #0a0707)",
  borderRadius: '10px',
  padding: "10px",
  margin: "20px",
};

let stylebody = {
  color: "white",
  padding: "30px",
  justifyContent: "center",
  alignItems: "center",

    textAlign: 'justify'

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



  const visit=()=>{
    const url = 'https://linktr.ee/yashrajmani';
    window.open(url, '_blank');
  };

  return (
    <>
      <div style={stylehead}>About</div>
      <hr/>

      <p style={stylebody}>
        The project is a web-based application that utilizes the power of
        React.js to create a dynamic and interactive user interface. The app is
        built using React.js, a popular JavaScript library for building user
        interfaces, and is designed to be fast and responsive The app allows
        users to create, view, and manage their todo items. When the user opens
        the app, they are presented with a list of their current todos,The user
        can add a new todo by typing it into the input field at the top of the
        screen and hitting the "Add" button. The user can also delete a todo by
        clicking on the trash icon next to it. Overall, the todo list app is a
        simple and intuitive tool that helps users stay organized and on top of
        their tasks. 😉
       <br/> 
       <br/> 
        The user interface is intuitive and easy to navigate, with
        clear and concise instructions and helpful graphics and icons. The app
        utilizes a variety of technologies and tools to provide a seamless and
        efficient user experience. This includes the use of React.js for the
        front-end, as well as other technologies such as HTML, CSS, and
        JavaScript for styling and functionality. The app also makes use of
        various libraries and frameworks to enhance its performance and
        capabilities. The app features a clean and intuitive interface that
        makes it easy for users to navigate and interact with the various
        features and functionality. It is a user-friendly application that helps
        users accomplish their goals and TODOs in an efficient and enjoyable
        way. Overall, the project is a powerful and flexible tool that helps
        users achieve their tasks and get things done. 🤗
      </p>


      <div style={todostyle}>
    <h5>Feel free to reach me out , Regards Yash Raj Mani</h5>
    <button className="btn btn-info" onClick={visit}>Reach Out 👨‍💻</button> 
    </div>
  
      <hr/>
    </>
  );
};
