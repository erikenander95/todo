import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons"; // Import icons

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: false },
  ]);

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app-container">
      <div className="App">
        <h1>Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span
                className={todo.completed ? "completed" : ""}
                onClick={() => toggleComplete(todo.id)}
              >
                {todo.text}
              </span>
              <button className="delete" onClick={() => deleteTodo(todo.id)}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
