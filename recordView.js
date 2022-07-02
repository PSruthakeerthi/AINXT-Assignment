import { useReactMediaRecorder } from "react-media-recorder";
import { useState, useRef } from "react";
import "./styles.css";
const RecordView = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: true });
  const [timer, setTimer] = useState(0);

  let interval = useRef(null);
  const timerHandler = () => {
    interval.current = setInterval(() => {
      interval = setTimer((timer) => timer + 1);
    }, 1000);
  };

  const stopTimerHandler = () => {
    clearInterval(interval.current);
    setTimer(0);
  };
  return (
    <div>
    <div id="video-div">
     <video src={mediaBlobUrl} controls autoPlay />
     <div id="timer-div">
     <h4 id="timer">{timer}s</h4>
     </div>
     </div>
    
      <button id="startBtn"
        onClick={() => {
          timerHandler();
          startRecording();
        }}
      >
        Start
      </button>
      <button id="stopBtn"
        onClick={() => {
          stopRecording();
          stopTimerHandler();
        }}
      >
        Stop
      </button><br/>
      <p id="video-status">Recording Status:{status}</p><br/>
     
      
    </div>
  );
};

export default RecordView;
