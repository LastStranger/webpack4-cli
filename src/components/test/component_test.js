import React, { useCallback, useMemo, useState } from "react";
import ComponentTestInside from "./component_test_inside";

function calculate() {
  setTimeout(() => {
    return "done";
  }, 2000);
  return "first done";
}

const ComponentTest = () => {
  const [num, setNum] = useState(1);
  const [test, setTest] = useState(2);

  console.log("componetTest rendered");
  const callback = useCallback(() => {
    return num;
  }, [num]);

  const testFunction = () => {
    setNum(num + 1);
  };

  const testTwoFunction = useCallback(() => {
    setNum(num + 1);
  }, [num]);

  // const testThreeFunction = useMemo(() => ()=>setNum(num+1), [num]);
  return (
    <div>
      test
      <div>{calculate()}</div>
      <button onClick={() => setNum(num + 1)}>click to change the num</button>
      <button onClick={() => setTest(test + 1)}>
        click to change the test
      </button>
      <button onClick={() => setNum(1)}>click not to change the num</button>
      <div>the num is {num}</div>
      <div>the test is {test}</div>
      {/*<ComponentTestInside message={num}/>*/}
      {/*<ComponentTestInside message={num} aFunction={() => setNum(num+1)}/>*/}
      {/*<ComponentTestInside message={num} aFunction={testFunction}/>*/}
      <ComponentTestInside message={num} aFunction={testTwoFunction} />
      {/*<ComponentTestInside message={num} aFunction={testThreeFunction}/>*/}
    </div>
  );
};

export default ComponentTest;
