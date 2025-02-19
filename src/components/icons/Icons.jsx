import React from "react";

const defaultValues = Object.freeze({
  FILL_COLOR: "#000",
  ICON_WIDTH: "16px",
  ICON_HEIGHT: "16px",
});

function MusicRhythim({
  fillcolor = defaultValues.FILL_COLOR,
  width = defaultValues.ICON_WIDTH,
  height = defaultValues.ICON_HEIGHT,
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill={fillcolor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" fill={fillcolor} fillOpacity="0.01" />
      <path
        d="M5 42H10"
        stroke={fillcolor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 36H10"
        stroke={fillcolor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 30H10"
        stroke={fillcolor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 24H10"
        stroke={fillcolor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 42H21"
        stroke={fillcolor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 36H21"
        stroke={fillcolor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 30H21"
        stroke={fillcolor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 24H21"
        stroke={fillcolor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 18H21"
        stroke={fillcolor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 12H21"
        stroke={fillcolor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 6H21"
        stroke={fillcolor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27 42H32"
        stroke={fillcolor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38 42H43"
        stroke={fillcolor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27 36H32"
        stroke={fillcolor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38 36H43"
        stroke={fillcolor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27 30H32"
        stroke={fillcolor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38 30H43"
        stroke={fillcolor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38 24H43"
        stroke={fillcolor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38 18H43"
        stroke={fillcolor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MusicPause({
  fillcolor = defaultValues.FILL_COLOR,
  width = defaultValues.ICON_WIDTH,
  height = defaultValues.ICON_HEIGHT,
}) {
  return (
    <svg
      fill={fillcolor}
      width={width}
      height={height}
      viewBox="0 0 32 32"
      enableBackground="new 0 0 32 32"
      version="1.1"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="pause">
        <g>
          <path d="M6,4C5.45,4,5,4.45,5,5v22c0,0.55,0.45,1,1,1h3c0.55,0,1-0.45,1-1V5c0-0.55-0.45-1-1-1H6z" />
          <path d="M9,29H6c-1.103,0-2-0.897-2-2V5c0-1.103,0.897-2,2-2h3c1.103,0,2,0.897,2,2v22C11,28.103,10.103,29,9,29z M9,27v1V27L9,27    L9,27z M6,5v22h2.997L9,5H6z" />
        </g>
        <g>
          <path d="M23,4c-0.55,0-1,0.45-1,1v22c0,0.55,0.45,1,1,1h3c0.55,0,1-0.45,1-1V5c0-0.55-0.45-1-1-1H23z" />
          <path d="M26,29h-3c-1.103,0-2-0.897-2-2V5c0-1.103,0.897-2,2-2h3c1.103,0,2,0.897,2,2v22C28,28.103,27.103,29,26,29z M26,27v1V27    L26,27L26,27z M23,5v22h2.997L26,5H23z" />
        </g>
      </g>
    </svg>
  );
}

function MusicPlay({
  fillcolor = defaultValues.FILL_COLOR,
  width = defaultValues.ICON_WIDTH,
  height = defaultValues.ICON_HEIGHT,
}) {
  return (
    <svg
      fill={fillcolor}
      width={width}
      height={height}
      viewBox="0 0 32 32"
      enableBackground="new 0 0 32 32"
      version="1.1"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="play">
        <g>
          <path d="M4.993,2.496C4.516,2.223,4,2.45,4,3v26c0,0.55,0.516,0.777,0.993,0.504l22.826-13.008    c0.478-0.273,0.446-0.719-0.031-0.992L4.993,2.496z" />
          <path d="M4.585,30.62L4.585,30.62C3.681,30.62,3,29.923,3,29V3c0-0.923,0.681-1.62,1.585-1.62c0.309,0,0.621,0.085,0.904,0.248    l22.794,13.007c0.559,0.319,0.878,0.823,0.878,1.382c0,0.548-0.309,1.039-0.847,1.347L5.488,30.373    C5.206,30.534,4.894,30.62,4.585,30.62z M5,3.651v24.698l21.655-12.34L5,3.651z" />
        </g>
      </g>
    </svg>
  );
}

function Time({
  fillcolor = defaultValues.FILL_COLOR,
  width = defaultValues.ICON_WIDTH,
  height = defaultValues.ICON_HEIGHT,
}) {
  return (
    <svg
      fill="none"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 8V12L15 15"
        stroke={fillcolor}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="9" stroke={fillcolor} strokeWidth="2" />
    </svg>
  );
}

export { MusicRhythim, MusicPlay, MusicPause, Time };
