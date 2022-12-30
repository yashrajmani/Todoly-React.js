import React, { useState } from "react";

export const Add = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");


  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title & Description must be provided");
    } else {
      props.addtodo(title, desc);
      setTitle('');
      setDesc('');
    }
  };

  return (
    <div className="container my-3">
      <h4>Add a TODO</h4>
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
          ADD
        </button>
      </form>
    </div>
  );
};
