import "./App.css";
import Btnchng from "./components/Btnchng";
import Parent from "./components/Parent";
import Reducer from "./components/Reducer";
import Timer from "./components/Timer";
import Todo from "./components/Todo";
import UseKeyPress from "./components/UseKeyPress";

function App() {
  const { key } = UseKeyPress();
  console.log(key);
  return (
    <>
      <Todo />
      <Btnchng />
      <Parent />
      <Reducer />
      <Timer />
    </>
  );
}

export default App;
