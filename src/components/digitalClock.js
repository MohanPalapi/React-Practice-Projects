import { useState, useEffect } from "react";

export default function DiggitalClock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div>
      <h1 className="Clock_heading">Digital Clock</h1>
      <h3 className="digital_time">{time}</h3>
    </div>
  );
}
