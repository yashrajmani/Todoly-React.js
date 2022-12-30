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

export const Contact = () => {


  const visit=()=>{
    const url = 'https://github.com/yashrajmani/Todoly-React.js';
    window.open(url, '_blank');
  };

  return (
    <>
      <div style={stylehead}>Contact/Contribute</div>
      <hr/>

      <p style={stylebody}>
      Welcome to the Todoly project! We are always looking for talented and passionate individuals to contribute to our open source project. If you are interested in contributing, please review our contribution guidelines and send us a pull request.

We appreciate any and all contributions, whether it's a small bug fix or a new feature. Your contributions help make our project better and stronger. Thank you for considering contributing to Todoly. We look forward to working with you!
       <br/> 
       <br/> 

       We are always working to improve and grow the app, and we need your help to reach more users. If you enjoy using the app and think it could be helpful to others, please consider sharing it with your friends and colleagues.

You can also help us grow the app by leaving a review on the store or writing about it on your blog or social media. Any and all support is greatly appreciated, and will help us continue to develop and improve the app for all users. Thank you for your help in growing the reach of Todoly!
       <br/> 
       If you have any questions or feedback about Todoly, please don't hesitate to contact the developer.They would be happy to assist you with any issues or answer any questions you may have.     <br/><br/>  Thank you for using Todoly :)
  
      </p>

      <div style={todostyle}>
    <h5>For Contributions/Learning- Check Out on GITHUB!</h5>
    <button className="btn btn-info" onClick={visit}>VISIT</button> 
    </div>
  

      <hr/>
    </>
  );
};
