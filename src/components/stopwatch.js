import { useState, useEffect, useRef } from "react";

export default function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const ref = useRef(null);

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  useEffect(() => {
    if (isRunning) {
      ref.current = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(ref.current);
    }

    return () => {
      clearInterval(ref.current);
    };
  }, [isRunning]);

  const formatTime = (time) => {
    const minutes = Math.floor((time / 60000) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const milliSeconds = Math.floor((time / 10) % 100);

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}:${String(milliSeconds).padStart(2, "0")}`;
  };

  return (
    <div>
      <heading className="stopwatch_heading">Stopwatch</heading>
      <div className="time">{formatTime(time)}</div>

      <div className="button_menu">
        <button className="buttons" onClick={() => setIsRunning(true)}>
          Start
        </button>
        <button className="buttons" onClick={handleReset}>
          Reset
        </button>
        <button className="buttons" onClick={() => setIsRunning(false)}>
          Stop
        </button>
      </div>
    </div>
  );
}
