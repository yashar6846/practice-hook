import React from "react";
import State from "./component/steate/state";
import Measeg from "./component/steate/Measeg";
import Form from "./component/form/Form";
import Condition from "./component/conditional/Condition";

const App = () => {
  return (
    <div>
      <State />
      <Measeg />
      <Form />
      <br />
      <Condition />
    </div>
  );
};

export default App;
