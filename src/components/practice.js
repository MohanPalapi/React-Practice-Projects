import { useState, useCallback } from "react";
import React from "react";

const Child = React.memo(function ({ doSomething }) {
  console.log("child renders");

  return (
    <div>
      <h2>Child</h2>
      <button onClick={doSomething}>Click</button>
    </div>
  );
});

export default function Parent() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    console.log("clicked child button");
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child doSomething={handleClick} />
    </div>
  );
}
