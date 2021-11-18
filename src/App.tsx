import { useState } from "react";
import useInterval from "./hooks/useInterval";
import AlarmWAV from './alarm1.wav';
import Countdown from "./components/countdown";
import AudioImg from "./audio.png";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [startTimer, setStartTimer] = useState<boolean>(false);
  const Alarm = new Audio(AlarmWAV);

  const playAudio = () => Alarm.play();

  // How to use setInterval w/ React
  // https://overreacted.io/making-setinterval-declarative-with-react-hooks/
  
  useInterval(() => {
    if (startTimer) {
      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1)
        } else {
          playAudio();
          setStartTimer(false);
          setMinutes(25);
          setSeconds(0);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }
  }, 1000);

  const handleStartTimer = (duration?: number) => {
    if (duration) {
      setMinutes(duration);
    }
    setStartTimer(true);
  }

  const handleReset = () => {
    setStartTimer(false);
    setMinutes(25);
    setSeconds(0);
  }

  const secondsTimer = seconds < 10 ? `0${seconds}` : seconds;
  const minutesTimer = minutes < 10 ? `0${minutes}` : minutes;

  return (
    <div className="container">
      <main>
        <h1>POMODORO</h1>
        <Countdown seconds={secondsTimer} minutes={minutesTimer} />
        <div className="controls">
          <div>
            <button onClick={() => handleStartTimer()} disabled={startTimer ? true : false}>START</button>
            <button onClick={() => setStartTimer(false)} disabled={!startTimer ? true : false}>PAUSE</button>
            <button onClick={handleReset}>RESET</button>
          </div>
          <div>
            <p className="break">BREAK</p>
            <button onClick={() => handleStartTimer(5)}>SHORT</button>
            <button onClick={() => handleStartTimer(15)}>LONG</button>
            <div className="preview-audio">
              <img src={AudioImg} alt="audio" /><button onClick={playAudio}>ALARM SOUND</button>
            </div>
          </div>
        </div>

        <div className="info">
          <p className="how-it-works">HOW IT WORKS:</p>
          <ol>
            <li>Pick a task.</li>
            <li>Start a 25 minute timer.</li>
            <li>Focus on your task until time is up.</li>
            <li>Take a 5 minute break.</li>
            <li>Every 4 pomodoros, take a 15-30 minute break.</li>
          </ol>
        </div>
      </main>
    </div>
  );
}

export default App;
