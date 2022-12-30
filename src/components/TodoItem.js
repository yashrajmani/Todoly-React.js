import React from 'react'



let todostyle = {
  color:"white",
  background:"linear-gradient(to top ,#5D5D5D,#131313 , #0a0707)",
  borderRadius: '10px',
  padding: "10px",
  margin: "2px",
};
export default function TodoItem({todo,onDelete}) {
  return (
    <>
    <div style={todostyle}>
    <h5> 📌 {todo.sno+1} : {todo.title}</h5>
    <p> Description: {todo.desc}</p>
    <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Remove ❌</button> 
    </div>
    <hr/>
    </>
  )
}
