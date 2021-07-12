import React, { useState, useEffect } from "react";

const Measeg = () => {
  const [sey, setSey] = useState();

  useEffect(() => {
    console.log("son");
  }, [sey]);
  return (
    <div>
      {sey ? <h3>Practuse</h3> : <h1>react</h1>}
      <button onClick={() => setSey(!sey)}>son</button>
    </div>
  );
};

export default Measeg;
