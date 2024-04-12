import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function decreaseHandler() {
    setCount(count - 1);
  }
  function increaseHandler() {
    setCount(count + 1);
  }
  function resetHandler() {
    setCount(0);
  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center  flex-col gap-10 bg-[#344151]">
      <div className="text-[#0398d4] text-2xl font-medium">
        Increment && Decrement
      </div>
      <div className="bg-white flex justify-center rounded-sm text-[25px]  gap-12 py-3 text-[#344151]">
        <button
          onClick={decreaseHandler}
          className="border-r-2 text-center w-20 border-[#bfbfbf]  text-5xl"
        >
          -
        </button>
        <div className="font-bold text-5xl">{count} </div>
        <button
          onClick={increaseHandler}
          className="border-l-2 text-center w-20 border-[#bfbfbf]  text-5xl"
        >
          +
        </button>
      </div>
      <button onClick={resetHandler} className=" text-white text-bold bg-[#0398d4] py-3 px-6 text-lg rounded-sm">Reset</button>
    </div>
  );
}

export default App;
