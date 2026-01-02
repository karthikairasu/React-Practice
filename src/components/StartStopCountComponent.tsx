import React, { useEffect, useState } from "react";

const startStopCountComponent = () => {
  const [count, setCount] = useState<number>(300);
  const [flag, setFlag] = useState<boolean>(false);

  const startCount = () => {
    setFlag(true);
  };
  const stopCount = () => {
    setFlag(false);
  };
  useEffect(() => {
    if (flag && count > 0) {
      const Timer = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);
      return () => {
        clearInterval(Timer);
      };
    }
  }, [flag, count]);

  return (
    <>
      <h3>{count}</h3>
      <button onClick={startCount}>Start</button>&ensp;
      <button onClick={stopCount}>Stop</button>
    </>
  );
};
export default startStopCountComponent;
