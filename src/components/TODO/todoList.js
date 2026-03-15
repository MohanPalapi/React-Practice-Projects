export default function TodoList({ todos, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button className="deleteBtn" onClick={() => deleteTodo(index)}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
}
