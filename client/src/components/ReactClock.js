import React, { useEffect, useState } from "react";
import Clock from "react-clock";
// import "react-clock/dist/Clock.css";

const ReactClock = () => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);
    // console.log(value);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <Clock size={250} renderNumbers={true} value={value} />
    </div>
  );
};

export default ReactClock;
