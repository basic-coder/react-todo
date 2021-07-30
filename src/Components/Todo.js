import React from 'react';

export const Todo = ({todo,onDelete}) => {
    return (
        <div className="box">
        <h4>{todo.title}</h4>
        <button className="deleteBtn" onClick={()=>onDelete(todo)}>-</button> 
        </div>
    );
}