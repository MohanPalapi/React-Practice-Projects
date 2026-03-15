import { useRef, useEffect } from "react";

export default function RefPractice() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <label>Name </label>
      <input type="text" placeholder="Enter Name" ref={inputRef} />
      <label>Email </label>
      <input type="text" placeholder="Enter Email" />
    </div>
  );
}
