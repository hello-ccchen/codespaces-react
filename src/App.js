import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("componentDidMount");
  }, []);

  useEffect(() => {
    console.group("componentDidUpdate");
    console.log("count updated", count);
    console.groupEnd();
  }, [count]);

  const onAddCountClick = () => {
    setCount((prevscount) => prevscount + 1);
  };

  const onMinusCountClick = () => {
    setCount((prevscount) => prevscount - 1);
  };

  return (
    <div className="container">
      <h3>Hello React Counter</h3>
      <h1>{count}</h1>
      <div className="button-grp">
        <button className="button" onClick={onAddCountClick}>
          +
        </button>
        <button className="button" onClick={onMinusCountClick}>
          -
        </button>
      </div>
    </div>
  );
}

export default App;
