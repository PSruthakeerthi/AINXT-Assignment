import { useState } from "react";
import "./styles.css";

function DisplaySpeed() {
  const [bps, setBps] = useState(0);
  const [startTime, setStartTime] = useState(new Date().getTime());
  const [endTime, setEndTime] = useState(0);
  var userImageLink =
    "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200714180638/CIP_Launch-banner.png";
  var downloadSize = 5616998;
  var downloadImgSrc = new Image();
  downloadImgSrc.onload = function () {
    setEndTime(new Date().getTime());
    setStartTime(startTime);
    displaySpeed();
  };
  downloadImgSrc.src = userImageLink;
  const displaySpeed = () => {
    var timeDuration = (endTime - startTime) / 1000;
    var loadedBits = downloadSize * 8;
    setBps((loadedBits / timeDuration).toFixed(2));
  };

  return (
    <>
      <h4>
         Network Bandwidth : {((bps / 1024).toFixed(2) / 1024).toFixed(2)}Mbps 
      </h4>
    </>
  );
}

export default DisplaySpeed;
