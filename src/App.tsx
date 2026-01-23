import "./styles.css";
import RealTime from "./components/TimeComponent";
import StartStopCount from "./components/StartStopCountComponent";
import StopWatchComponet from "./components/StopWatchComponent";
import TodosList from "./components/todoListApi/TodoList";

export default function App() {
  return (
    <div className="App">
      <RealTime />
      <StartStopCount />
      <StopWatchComponet />
      <TodosList />
    </div>
  );
}
