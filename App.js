import React from "react";
import RecordView from "./recordView";
import DisplaySpeed from "./dispalySpeed";
import Permissions from "./permissions";
import "./styles.css"

function App() {
  return (
    <>
      <h1 id="title">Video Recorder with Audio, Video and GeoLocation Permissions</h1>
      <br/>
      <RecordView />
      <DisplaySpeed />
      <Permissions />
    </>
  );
}

export default App;
