import React, { useState, useEffect, useRef } from "react";

const StopWatchComponet = () => {
  const [time, setTime] = useState(0);
  const stopwatchRef = useRef(0);
  const intervalRef = useRef(null);

  function handleStart() {
    stopwatchRef.current = new Date().getTime() - time;
    intervalRef.current = setInterval(() => {
      setTime(new Date().getTime() - stopwatchRef.current);
    }, 10);
  }

  function handlePause() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  function handleReset() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
  }

  function formatTime(time) {
    //means when we divide time by 1000 we get sec
    // when we mod it the remaing miliseconds we get and to show
    // upto 2 digit divide by 10
    const ms = Math.floor((time % 1000) / 10)
      .toString()
      .padStart(2, 0);
    // here we get total seconds
    // but we might get 65 seconds which is 1 min 5 sec
    // since we want sec to be less than 60 we mod it by 60
    const s = Math.floor((time / 1000) % 60)
      .toString()
      .padStart(2, 0);
    // same here get get the total minuts but
    // we mod it by 60 to get the remaing min at
    // anything above 60 will be an hour
    const m = Math.floor((time / (1000 * 60)) % 60)
      .toString()
      .padStart(2, 0);
    // same goes here we get total hours and mod it by 24
    // to get the hours if it is more that 24
    const h = Math.floor((time / (1000 * 60 * 60)) % 24)
      .toString()
      .padStart(2, 0);
    return `${h}:${m}:${s}:${ms}`;
  }

  return (
    <div className="stopWatch" style={{ padding: "10px" }}>
      <span className="timer">{formatTime(time)}</span>
      <div className="btn-container">
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default StopWatchComponet;
