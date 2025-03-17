import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [todos, setTodos] = useState([
    { title: "Learn React", completed: false },
    { title: "Build a React App", completed: false },
    { title: "Deploy the React app", completed: false },
  ]);

  const handleCompleteTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div id="main">
      <h1>Parent Component</h1>
      <ChildComponent todos={todos} handleCompleteTodo={handleCompleteTodo} />
    </div>
  );
};

const ChildComponent = ({ todos, handleCompleteTodo }) => {
  return (
    <div id="child">
      <h2>Child Component</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.title} {todo.completed ? "(Completed)" : ""}
            {!todo.completed && (
              <button onClick={() => handleCompleteTodo(index)}>Complete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
