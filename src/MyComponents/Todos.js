import React from "react";
import { Todoitem } from "./todoitem";

export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center my-3">Todos List</h3>
      <Todoitem todos={props.todos[0]} onDelete={props.onDelete} />;
      <Todoitem todos={props.todos[1]} onDelete={props.onDelete} />;
      <Todoitem todos={props.todos[2]} onDelete={props.onDelete} />;
    </div>
  );
};

export default Todos;
