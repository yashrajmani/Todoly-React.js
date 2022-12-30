import React from "react";

import TodoItem from "./TodoItem";

let stylebody = {
  minHeight: "80vh",
  color:"white",
  //padding: "20px",
};
let stylehead = {
  color:"yellow",
  fontSize:"35px",
  padding: "5px",

};
let itemstyle = {

  display: 'flex',
  padding: "20px",
  justifyContent: 'center',
  alignItems: 'center'
 
};

export default function Todos(props) {
  return (

    <>

   
    <div className="container my-5" style={stylebody}>

<br/>
      <h3 className="text-center my-2" style={stylehead}> 📋 TODOs:
      <hr/>
      </h3>
   

      {props.todos.length === 0 ? (
        <>
          <div className="container" style={itemstyle}>
            {/* <img
              src="./assets/notodo.png"
              alt="No TODO"
              width="200"
              height="200"
            /> */}
            <h4 > Wohoo 🤩 No More Todos !</h4>
          </div>
        </>
      ) : (
        props.todos.map((todo) => {
          console.log(todo.sno);
          return (
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          );
        })
      )}
    </div>

    
    </>
  );
}
