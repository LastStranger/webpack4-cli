import React, {
  useContext,
  useEffect,
  useReducer,
  useLayoutEffect,
  useState
} from "react";
import { ConfigContext } from "../index";
import componentTwoReducer from "../reducers/componentTwoReducer";

const ComponentTwo = () => {
  const context = useContext(ConfigContext);
  const [Person, dispatch] = useReducer(componentTwoReducer, {
    name: "li",
    age: 19
  });

  const [num, setNum] = useState("111111111111111111111111111");
  useEffect(() => {
    dispatch({
      type: "add",
      data: 100
    });
  }, []);
  //
  // useEffect(() => {
  //     document.title = 'ddddddddddddd';
  // });

  useLayoutEffect(() => {
    // document.title = 'ssss';
    setNum(1000);
  }, []);

  // useEffect(() => {
  //     // document.title = 'ssss';
  //     setNum(1000);
  // }, []);

  return (
    <div>
      componentTwo
      <div>{num}</div>
      <div>{context.something}</div>
      <div>{Person.name}</div>
      <div>{Person.age}</div>
    </div>
  );
};

export default ComponentTwo;
