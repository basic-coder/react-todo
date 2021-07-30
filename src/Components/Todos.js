import React from "react";
import { Todo } from "./Todo";
import "../index.css";

export const Todos = (props) => {
  return (
    <div className="main-container">
      <h3>Todos List</h3>
      <div className="content">
      {props.todos.length === 0
        ? "No Todos to display"
        : props.todos.map((todo) => {
            return (
              <Todo todo={todo} key={todo.srno} onDelete={props.onDelete} />
            );
          })}
          </div>
    </div>
  );
};
