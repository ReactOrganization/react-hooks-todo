import React, { useState } from "react";
import { domainToASCII } from "url";

const Todo = ({ todo, index }) => {
  return <div className="todo">{todo.text}</div>;
};

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: "Leart React",
      inCompleted: false
    },
    {
      text: "Meet friends for lunch",
      inCompleted: false
    },
    {
      text: "Build cool to do app",
      inCompleted: false
    }
  ]);

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default App;
