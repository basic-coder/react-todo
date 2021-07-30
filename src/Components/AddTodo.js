import React, { useState } from "react";

function AddTodo(props) {
    const [title, setTitle] = useState("");
    const submit = (e) =>{
        e.preventDefault();
        if(!title){
            alert("fill it");
        }else{
        props.addTodo(title);
        setTitle("");
        }

    }
  return (
    <div className="add-container">
    <h3>Add Todos</h3>
      <form onSubmit={submit} className="searchBx">
          <input type="text" className="searchTxt" id="title" value={title} onChange={(e)=>(
                setTitle(e.target.value)
            )}/>
        <button type="submit" className="searchBtn">
          +
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
