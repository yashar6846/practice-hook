import React, { useState, useEffect } from "react";

const State = () => {
  const [count, setCount] = useState("yash");

  useEffect(() => {
    console.log("yange thes is ");
  }, [count]);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount("geza")}>click</button>
    </div>
  );
};

export default State;
