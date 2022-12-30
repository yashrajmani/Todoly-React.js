import React, { useState, useEffect } from "react";

let cs = {
  padding: "20px",
};

let child = {
  width: "50%",
  float: "left",
  padding: "30px",
  border: "10px ",
};
let child2 = {
  width: "50%",
  float: "left",
  padding: "30px",
  paddingBottom:'30px',
  marginBottom: "20px",
  backgroundColor: "#466AD8",
  borderRadius: '20px'
};

let time = {
  color: "yellow",
  fontSize: "70px",
};
let date = {
  color: "white",
  fontSize: "40px",
};


// let vertical= {
//   borderLeft: "6px solid black",
//   height: "300px",
//   position:"absolute",
//   left: "50%",
// }

export const Add = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title & Description must be provided");
    } else {
      props.addtodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  return (
    <>
    <div className="float-container" style={cs}>
      <div className="float-child" style={child}>
        <h1 style={time}>
          {dateState.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </h1>
        <h2 style={date}>
          {" "}
          {dateState.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </h2>

        <br></br>
        <h3 style={{color:"yellow"}}>👋 Hey, What are your goals today?</h3>





      </div>


      {/* <div className = "vertical" style={vertical}></div> */}


      <div className="float-child" style={child2}>
        <h2 style={{ color: "yellow" }}> 📝 Add a Todo : </h2>

        <form onSubmit={submit}>
          <div className="c-3">
            <label className="form-label">Todo Title:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Todo Description:</label>
            <input
              type="text"
              value={desc}
              className="form-control"
              id="desc"
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            ADD ✔️
          </button>
        </form>
   
      </div>

    </div>




</>

  );
};
