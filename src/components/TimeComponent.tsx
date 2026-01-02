import React, { useEffect, useState } from "react";

const TimeComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h3>{time.toLocaleTimeString()}</h3>
    </>
  );
};

export default TimeComponent;
