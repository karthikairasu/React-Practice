import "./styles.css";
import RealTime from "./components/TimeComponent";
import StartStopCount from "./components/StartStopCountComponent";
import StopWatchComponet from "./components/StopWatchComponent";
import TodosList from "./components/todoListApi/TodoList";
import FetchUsers from "./practice/FetchUsers";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      {/* <RealTime />
      <StartStopCount />
      <StopWatchComponet />
      <TodosList /> */}
      <FetchUsers />
    </div>
  );
}
