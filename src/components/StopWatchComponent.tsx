import React, { useState, useEffect, useRef } from "react";

const StopWatchComponet = () => {
  const [time, setTime] = useState(0); // time in centiseconds
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 10); // 10 ms = 1 centisecond
    }

    return () => {
      if (interval !== null) {
        clearInterval(interval);
      }
    };
  }, [running]);

  const formatTime = () => {
    const cs = time % 100;
    const seconds = Math.floor(time / 100) % 60;
    const minutes = Math.floor(time / 6000) % 60;
    const hours = Math.floor(time / 360000);

    const pad = (num: number) => String(num).padStart(2, "0");

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(cs)}`;
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "monospace" }}>
      <h1>{formatTime()}</h1>

      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>
      <button
        onClick={() => {
          setRunning(false);
          setTime(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default StopWatchComponet;
