import React, { useEffect, useState } from "react";
import "./musicBox.css";
import { secondsToDate } from "../../helpers/formats";

function MusicBox({ musicIndex, musicData }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timeRun = setInterval(() => {
      setTime(time + 1);
    }, 1000);
    return () => {
      clearInterval(timeRun);
    };
  });

  useEffect(() => {
    setTime(0);
  }, [musicIndex]);

  return (
    <div className="music-box">
      <h3 className="music-title">{`Playing now: ${musicData.name}`}</h3>
      <span className="music-time">
        {`${secondsToDate(time)} ========= ${secondsToDate(
          musicData.duration
        )}`}
      </span>
    </div>
  );
}

export default MusicBox;
