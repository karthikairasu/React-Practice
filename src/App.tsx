import "./styles.css";
import RealTime from "./components/TimeComponent";
import StartStopCount from "./components/StartStopCountComponent";

export default function App() {
  return (
    <div className="App">
      <RealTime />
      <StartStopCount />
    </div>
  );
}
