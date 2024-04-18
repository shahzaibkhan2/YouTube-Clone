import React from "react";
import styles from "./VideoPlayer.module.css";
import PlayVideo from "../../components/playVideo/PlayVideo";
import Recommended from "../../components/recommended/Recommended";
import { useParams } from "react-router-dom";

const VideoPlayer = () => {
  const { videoId, categoryId } = useParams();

  return (
    <div className={`${styles.videoplayer}`}>
      <PlayVideo videoId={videoId} />
      <Recommended categoryId={categoryId} />
    </div>
  );
};

export default VideoPlayer;
