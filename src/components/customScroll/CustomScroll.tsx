import React, { useRef, useEffect } from "react";
import "./customScroll.css";

export default function CustomScroll({
  children,
  childrenRef,
  containerStyles,
}) {
  const listScroll = useRef();
  const musicPlayerTable = useRef();

  return (
    <div
      style={{
        minWidth: "inherit",
        maxWidth: "inherit",
        width: "inherit",
        position: "relative",
      }}
    >
      <div ref={listScroll} className="music-player__scroll"></div>
      <div
        ref={musicPlayerTable}
        className="music-player__table"
        style={containerStyles}
        onScroll={(event) => {
          listScroll.current.style.top = `${
            event.target.scrollTop /
            (childrenRef.current.clientHeight /
              musicPlayerTable.current.clientHeight)
          }px`;
        }}
        onMouseEnter={() => {
          if (
            childrenRef.current.clientHeight >
            musicPlayerTable.current.clientHeight
          ) {
            listScroll.current.classList.add(
              "music-player__scroll--inline-block"
            );
            listScroll.current.style.height = `${Math.floor(
              musicPlayerTable.current.clientHeight *
                (musicPlayerTable.current.clientHeight /
                  childrenRef.current.clientHeight)
            )}px`;
          }
        }}
        onMouseLeave={() => {
          listScroll.current.classList.remove(
            "music-player__scroll--inline-block"
          );
        }}
      >
        {children}
      </div>
    </div>
  );
}
