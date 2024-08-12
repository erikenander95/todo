import React, { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons"; // Import only the icons you need

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch todos from the backend when the component mounts
  useEffect(() => {
    fetch("http://localhost:5000/api/todos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Handle adding a new todo
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  // Handle toggling completion status
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Handle deleting a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
