import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [todos, setTodos] = useState([
    { title: "Learn React", completed: false },
    { title: "Build a React App", completed: false },
    { title: "Deploy the React App", completed: false },
  ]);

  const handleCompleteTodo = (index) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: true };
      }
      return todo;
    });

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
      {/* Do not remove the main div */}
      <h2>Child Component</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.title}
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
