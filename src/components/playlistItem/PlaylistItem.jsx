import React, { useRef } from "react";
import { secondsToDate } from "../../helpers/formats";
import { MusicRhythim, MusicPlay, MusicPause } from "../Icons/Icons";
import "./playlistItem.css";

export default function PlaylistItem({ listIdx, selectedIdx, data, onPlay }) {
  const firsColumnRef = useRef([]);

  const onMouseOver = (index) => {
    firsColumnRef.current[index].children[0].hidden = true;
    firsColumnRef.current[index].children[1].hidden = false;
  };

  const onMouseLeave = (index) => {
    firsColumnRef.current[index].children[0].hidden = false;
    firsColumnRef.current[index].children[1].hidden = true;
  };

  const onActionClick = (index) => {
    if (index !== selectedIdx) {
      onPlay(index);
    } else {
      console.log("Paused!!!");
    }
  };

  return (
    <div
      className={`music-body-row ${
        listIdx === selectedIdx ? "music-row--active" : ""
      }`}
      // key={data.id}
      onMouseOver={() => onMouseOver(listIdx)}
      onMouseLeave={() => onMouseLeave(listIdx)}
    >
      <div
        className="row-item row-item__action"
        ref={(element) => {
          firsColumnRef.current[listIdx] = element;
        }}
      >
        {listIdx === selectedIdx ? (
          <>
            <div>
              <MusicRhythim
                fillcolor={"#ff1e5e"}
                width={"20px"}
                height={"20px"}
              />
            </div>
            <button
              className="item-action"
              hidden={listIdx === selectedIdx}
              onClick={() => onActionClick(listIdx)}
            >
              <MusicPause
                fillcolor={"#ff1e5e"}
                width={"18px"}
                height={"18px"}
              />
            </button>
          </>
        ) : (
          <>
            <span>{listIdx + 1}</span>
            <button
              className="item-action"
              hidden={listIdx !== selectedIdx}
              onClick={() => onActionClick(listIdx)}
            >
              <MusicPlay fillcolor={"#ff1e5e"} width={"18px"} height={"18px"} />
            </button>
          </>
        )}
      </div>
      <div className="row-item row-item__name">
        <h4>{data.name}</h4>
        <h6>{data.author}</h6>
      </div>
      <div className="row-item row-item__duration">
        <h4>{secondsToDate(data.duration)}</h4>
      </div>
    </div>
  );
}
