import "./App.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer";
import Todos from "./components/Todos";
import { Add } from "./components/Add";
import { About } from "./components/About";

import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let initTodo;

  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("Deleting the Todo... : ", todo);
    console.log(typeof todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    console.log("deleted", todo);
  };

  const addtodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const newTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    console.log("Adding this TODO : ");

    setTodos([...todos, newTodo]);

    console.log(newTodo);
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const myStyle = {
    // backgroundImage: "url(/assets/bg.jpg)",
    backgroundImage:
      "linear-gradient(to right,#000B39,#003070 ,#0055AC ,#0055AC,#003070 , #000B39)",

    fontSize: "20px",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "repeat",
    backgroundAttachment: "fixed",
    color: "white",
  };
  return (
    <>
      <div style={myStyle}>
        <Router>
          <Header title="Todoly" search={false} />

          <Add addtodo={addtodo} />

          <Todos todos={todos} onDelete={onDelete} />

          <Routes>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>

          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
