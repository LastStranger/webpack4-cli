import React, { useEffect } from "react";

console.log("outside the inside component");
const ComponentTestInside = React.memo(({ message, aFunction }) => {
  console.log("componentTestInside rendered");

  useEffect(() => {
    console.log("inside component first refreshed");
  }, []);
  return (
    <div>
      component test inside
      <div>message from parent{message}</div>
      <button onClick={aFunction}>click to infect the parent's message</button>
    </div>
  );
});

export default ComponentTestInside;
