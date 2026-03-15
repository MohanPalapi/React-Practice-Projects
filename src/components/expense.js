import { useState } from "react";

export default function Expense() {
  const [items, setItems] = useState("");
  const [cost, setCost] = useState("");
  const [expense, setExpense] = useState([]);

  const addButton = () => {
    setExpense([...expense, { items, cost }]);
    setItems("");
    setCost("");
  };
  return (
    <div>
      <div className="title-name">
        <h1>Expense Tracker</h1>
      </div>
      <div className="headings">
        <label>Item </label>
        <input
          type="text"
          placeholder="Enter item"
          value={items}
          onChange={(e) => setItems(e.target.value)}
        />
        <label>Cost </label>
        <input
          type="text"
          placeholder="Enter cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />
        <button onClick={addButton}>Add</button>
        <h3>List of Expenses</h3>
        <ul>
          {expense.map((exp, index) => (
            <li key={index}>
              {exp.items}- {exp.cost}
            </li>
          ))}
        </ul>
        <label>
          <strong>Total Expenses: </strong>
        </label>
        {expense.reduce((sum, exp) => sum + Number(exp.cost), 0)}
      </div>
    </div>
  );
}
