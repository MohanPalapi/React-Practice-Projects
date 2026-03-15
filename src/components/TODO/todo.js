import { useState, useEffect } from "react";
import Header from "./header";
import TodoList from "./todoList";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const id = setTimeout(() => {
      console.log(input);
    }, 300);
    return () => clearTimeout(id);
  }, [input]);

  const addTodo = () => {
    if (input === "") return;
    setTodos([...todos, input]);
    setInput("");
  };
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <main className="main">
      <Header />
      <div>
        <label>Enter your todo here... </label>
        <input
          type="text"
          placeholder="Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="addBtn" onClick={addTodo}>
          Add
        </button>
        <h3>List of todos</h3>
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </div>
    </main>
  );
}
