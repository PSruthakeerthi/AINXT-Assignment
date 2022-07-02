import React from "react";
import { useState, useEffect } from "react";
import "./styles.css";
function Permissions() {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [error, setError] = useState("");

  const geolocationAPI = navigator.geolocation;

  useEffect(() => getUserCoordinates());

  const getUserCoordinates = () => {
    if (!geolocationAPI) {
      setError("Geolocation API is not available in your browser!");
    } else {
      geolocationAPI.getCurrentPosition(
        (position) => {
          const { coords } = position;

          setLat(coords.latitude);
          setLong(coords.longitude);
        },
        (error) => {
          setError("Something went wrong getting your position!");
        }
      );
    }
  };

  navigator.mediaDevices
    .getUserMedia({ audio: true, video: true })
    .then((MediaStream) => {
      // videoElem.srcObject = MediaStream;
      // videoElem.autoplay = true;
    });
  return (
    <div className="geocoord">
      <h3>Lat:{lat}</h3>
      <h3>Long:{long}</h3>
      <h3 style={{color:'red'}}>{error}</h3>
    </div>
  );
}

export default Permissions;
