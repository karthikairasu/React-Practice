import "./styles.css";
import RealTime from "./components/TimeComponent";
import StartStopCount from "./components/StartStopCountComponent";
import StopWatchComponet from "./components/StopWatchComponent";

export default function App() {
  return (
    <div className="App">
      <RealTime />
      <StartStopCount />
      <StopWatchComponet />
    </div>
  );
}
