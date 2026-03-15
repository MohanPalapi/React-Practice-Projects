import { useState } from "react";

export default function Tasks() {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setData([...data, { task, priority }]);

    setTask("");
    setPriority("");
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <form className="task-form" onSubmit={handleSubmit}>
        <label className="task-label">Task </label>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <label>Priority </label>
        <input
          type="number"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        />
        <button className="taskAdd-btn" type="submit">
          Add
        </button>
      </form>
      <div>
        <table className="task-table">
          <thead>
            <tr>
              <th>Task</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.task}</td>
                <td>{item.priority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
