import React, { useEffect, useRef, useState } from "react";
import { useGetMusicList } from "../hooks/useGetMusicList";
import MusicBox from "../components/musicBox/MusicBox";
import PlaylistItem from "../components/playlistItem/PlaylistItem";
import CustomScroll from "../components/customScroll/CustomScroll";
import "./musicPlayer.css";

import { Time } from "../components/Icons/Icons";

export default function MusicPlayer() {
  const musicTable = useRef();
  const { data: playlist, isLoading, isError } = useGetMusicList();
  const [selectedMusicIdx, setSelectedMusicIdx] = useState(0);

  useEffect(() => {
    let selectedMusicInterval;
    if (
      playlist &&
      playlist[selectedMusicIdx]?.duration &&
      selectedMusicIdx < playlist.length
    ) {
      selectedMusicInterval = setInterval(() => {
        // next song
        if (selectedMusicIdx + 1 !== playlist.length) {
          setSelectedMusicIdx((state) => state + 1);
        } else {
          setSelectedMusicIdx(0);
        }
      }, (playlist[selectedMusicIdx].duration + 1) * 1000);
    }

    return () => {
      clearInterval(selectedMusicInterval);
    };
  });

  return (
    <div className="music-player">
      {playlist && (
        <>
          <MusicBox
            musicIndex={selectedMusicIdx}
            musicData={playlist[selectedMusicIdx]}
          />
          <CustomScroll
            childrenRef={musicTable}
            containerStyles={{ height: "600px" }}
          >
            <div ref={musicTable} className="music-table">
              <div className="list-header">
                <div className="row-header row-item row-item__action">#</div>
                <div className="row-header row-item row-item__name">Name</div>
                <div className="row-header row-item row-item__duration">
                  <Time fillcolor={"#c7c7c7"} />
                </div>
              </div>
              <div className="list-header-space"></div>
              {playlist.map((music, idx) => (
                <PlaylistItem
                  key={music.id}
                  listIdx={idx}
                  selectedIdx={selectedMusicIdx}
                  data={music}
                  onPlay={setSelectedMusicIdx}
                />
              ))}
            </div>
          </CustomScroll>
        </>
      )}
    </div>
  );
}
